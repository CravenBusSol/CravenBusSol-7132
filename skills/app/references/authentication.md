# Authentication

We use [Better Auth](https://www.better-auth.com) for authentication.

**Pinned version:** `better-auth@1.4.22`. Do not upgrade to 1.5.x — it breaks `autumn-js`.

Reference docs: [llms.txt](https://www.better-auth.com/llms.txt)

<preflight>
Before wiring, state your assumptions about which auth methods are needed (email/password, OAuth, magic link), which routes/screens should be protected, where users land after sign-in, and whether sign-in/sign-up are separate pages or a single page with tabs. The user will correct what's wrong.
</preflight>

<design_thinking>
Auth pages are the first impression for returning users — match the app's visual language, don't ship barebones forms. Error states matter as much as the happy path. Loading and redirect transitions should feel instant.
</design_thinking>

## 1. Install

```bash
cd packages/web && bun add better-auth@1.4.22
cd packages/mobile && bun add better-auth@1.4.22
```

## 2. Auth Config

Create `packages/web/src/api/auth.ts`.

`basePath` must be `/api/auth`. Auth routes are served by the Hono app under the `/api` basePath, so Better Auth receives requests at `/api/auth/...`.

**Always set `trustedOrigins: ["*"]`** — the app is accessed from multiple origins (web, mobile, desktop, preview URLs).

```ts
import { betterAuth } from "better-auth";
import { drizzleAdapter } from "better-auth/adapters/drizzle";
import { bearer } from "better-auth/plugins";
import { db } from "./database";

export const auth = betterAuth({
  basePath: "/api/auth",
  baseURL: process.env.WEBSITE_URL,
  database: drizzleAdapter(db, { provider: "sqlite" }),
  emailAndPassword: { enabled: true },
  secret: process.env.BETTER_AUTH_SECRET,
  trustedOrigins: ["*"],
  plugins: [bearer()],
});
```

The `bearer()` plugin enables token-based authentication via `Authorization: Bearer <token>` headers. This is required because the app runs inside cross-origin iframes where browsers block third-party cookies. The plugin translates bearer tokens into sessions transparently — no extra server-side handling needed.

`baseURL` is set from `WEBSITE_URL` env var. Required for OAuth callbacks and production. Do **not** import JSON config files in this file — the Better Auth CLI uses jiti which cannot resolve them.

## 3. Generate Auth Schema

The CLI uses jiti (not bun env loading). Pass env vars inline. Run generate BEFORE adding `export * from "./auth-schema"` to `schema.ts` — the CLI fails if the target file doesn't exist yet.

```bash
cd packages/web
DATABASE_URL=$DATABASE_URL BETTER_AUTH_SECRET=$BETTER_AUTH_SECRET bun x @better-auth/cli@latest generate --config=./src/api/auth.ts --output=./src/api/database/auth-schema.ts -y
```

After the schema file is generated, re-export from `src/api/database/schema.ts`:

```ts
export * from "./auth-schema";
```

Then push: `bun run db:push`

## 4. Mount Auth in Hono

Auth must be mounted **before** `.basePath()` so Better Auth receives the full `/api/auth/*` path. Use `.on()` with single `*` wildcard (Hono v4 uses `*` not `**`):

```ts
import { Hono } from "hono";
import { cors } from "hono/cors";
import { auth } from "./auth";

const app = new Hono()
  .use(cors({
    origin: (origin) => origin ?? "*",
    credentials: true,
    exposeHeaders: ["set-auth-token"],
  }))
  .on(["GET", "POST"], "/api/auth/*", (c) => auth.handler(c.req.raw))
  .basePath("api")
  .get("/health", (c) => c.json({ status: "ok" }, 200));

export type AppType = typeof app;
export default app;
```

**Important:** `exposeHeaders: ["set-auth-token"]` is required so the browser allows JavaScript to read the bearer token from the response header. Without this, the token capture will silently fail.

## 5. Auth Middleware

Create `packages/web/src/api/middleware/auth.ts`:

```ts
import { createMiddleware } from "hono/factory";
import { auth } from "../auth";

export const authMiddleware = createMiddleware(async (c, next) => {
  const session = await auth.api.getSession({ headers: c.req.raw.headers });
  c.set("user", session?.user ?? null);
  c.set("session", session?.session ?? null);
  return next();
});

export const requireAuth = createMiddleware(async (c, next) => {
  if (!c.get("user")) return c.json({ message: "Unauthorized" }, 401);
  return next();
});
```

## 6. Web Auth Client

Create `packages/web/src/web/lib/auth.ts`:

The web client uses bearer token authentication. On sign-in/sign-up, capture the token from the `set-auth-token` response header and store it in `localStorage`. Configure `fetchOptions.auth` so every subsequent request sends the token automatically via the `Authorization: Bearer` header.

```ts
import { createAuthClient } from "better-auth/react";

const TOKEN_KEY = "bearer_token";

export const authClient = createAuthClient({
  baseURL: window.location.origin,
  basePath: "/api/auth",
  fetchOptions: {
    auth: {
      type: "Bearer",
      token: () => localStorage.getItem(TOKEN_KEY) ?? "",
    },
  },
});

/** Call in onSuccess of signIn/signUp to capture the bearer token */
export function captureToken(ctx: { response: Response }) {
  const token = ctx.response.headers.get("set-auth-token");
  if (token) localStorage.setItem(TOKEN_KEY, token);
}

/** Clear stored token on sign-out */
export function clearToken() {
  localStorage.removeItem(TOKEN_KEY);
}
```

Usage:

```tsx
// Sign up
await authClient.signUp.email({
  name, email, password,
}, { onSuccess: captureToken });

// Sign in
await authClient.signIn.email({
  email, password,
}, { onSuccess: captureToken });

// Sign out
await authClient.signOut();
clearToken();

// Session hook (works automatically — bearer token sent on every request)
const { data: session, isPending } = authClient.useSession();
```

## 7. Mobile Auth Client

Create `packages/mobile/lib/auth.ts`:

Mobile uses bearer tokens with `expo-secure-store` on native (encrypted, not accessible to other apps) and falls back to `localStorage` on Expo Web. Install SecureStore first: `cd packages/mobile && bun add expo-secure-store`.

`expo-secure-store` does not support web — calling it on web will throw. Use `Platform.OS` to branch between `localStorage` (web) and `SecureStore` (native). Lazy `require()` prevents the SecureStore import from crashing on web.

```ts
import { createAuthClient } from "better-auth/react";
import { Platform } from "react-native";
import Constants from "expo-constants";

const TOKEN_KEY = "bearer_token";

const isWeb = Platform.OS === "web";

function getToken(): string {
  if (isWeb) return localStorage.getItem(TOKEN_KEY) ?? "";
  const SecureStore = require("expo-secure-store");
  return SecureStore.getItem(TOKEN_KEY) ?? "";
}

function setToken(token: string) {
  if (isWeb) return localStorage.setItem(TOKEN_KEY, token);
  const SecureStore = require("expo-secure-store");
  SecureStore.setItem(TOKEN_KEY, token);
}

function removeToken() {
  if (isWeb) return localStorage.removeItem(TOKEN_KEY);
  const SecureStore = require("expo-secure-store");
  SecureStore.deleteItemAsync(TOKEN_KEY);
}

const baseURL =
  Constants.expoConfig?.extra?.apiUrl ??
  process.env.EXPO_PUBLIC_API_URL;

export const authClient = createAuthClient({
  baseURL,
  basePath: "/api/auth",
  fetchOptions: {
    auth: {
      type: "Bearer",
      token: () => getToken(),
    },
  },
});

/** Call in onSuccess of signIn/signUp to capture the bearer token */
export function captureToken(ctx: { response: Response }) {
  const token = ctx.response.headers.get("set-auth-token");
  if (token) setToken(token);
}

/** Clear stored token on sign-out */
export function clearToken() {
  removeToken();
}
```

## 8. Protected Routes

### Web (Wouter)

```tsx
// src/web/components/protected-route.tsx
import { Redirect } from "wouter";
import { authClient } from "../lib/auth";

export function ProtectedRoute({ children }: { children: React.ReactNode }) {
  const { data: session, isPending } = authClient.useSession();

  if (isPending) return <div>Loading...</div>;
  if (!session) return <Redirect to="/sign-in" />;

  return <>{children}</>;
}

// In app.tsx:
<Route path="/dashboard">
  <ProtectedRoute>
    <DashboardPage />
  </ProtectedRoute>
</Route>
```

### Mobile (Expo Router)

```tsx
export default function RootLayout() {
  const { data: session, isPending } = authClient.useSession();
  const segments = useSegments();
  const router = useRouter();

  useEffect(() => {
    if (isPending) return;
    const inAuthGroup = segments[0] === "(auth)";
    if (!session && !inAuthGroup) router.replace("/sign-in");
    if (session && inAuthGroup) router.replace("/");
  }, [session, isPending]);

  return <Slot />;
}
```
