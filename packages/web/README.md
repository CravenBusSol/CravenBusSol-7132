# web

Unified server — serves both the Hono API under `/api` and the React frontend from a single Bun.serve process.

## Run

```bash
bun run dev
```

The server port is configured automatically.

For a production-like local run from this package, build the frontend and start the Bun server:

```bash
bun run build
bun run start
```

From the repository root, `bun run start` starts the same server under PM2.

## Typecheck and build

```bash
bun run typecheck
bun run build
```
