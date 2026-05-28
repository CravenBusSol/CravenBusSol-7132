import { Hono } from "hono";
import { cors } from "hono/cors";
import { db } from "./database";
import * as schema from "./database/schema";
import { desc } from "drizzle-orm";

const ADMIN_KEY = process.env.ADMIN_KEY || "renewpath-admin-2024";

const app = new Hono()
  .basePath("api")
  .use(cors({ origin: "*" }))

  .get("/health", (c) => c.json({ status: "ok" }, 200))

  .post("/submissions", async (c) => {
    try {
      const body = await c.req.json();
      const [submission] = await db
        .insert(schema.homeownerSubmissions)
        .values({
          name: body.name,
          email: body.email,
          phone: body.phone || null,
          postcode: body.postcode,
          propertyType: body.propertyType,
          ownershipStatus: body.ownershipStatus,
          currentHeatingType: body.currentHeatingType,
          boilerAge: body.boilerAge,
          hotWaterCylinder: body.hotWaterCylinder,
          interestedTechnologies: JSON.stringify(body.interestedTechnologies || []),
          mainGoals: JSON.stringify(body.mainGoals || []),
          approximateBudget: body.approximateBudget,
          timeline: body.timeline,
          grantFundingEssential: body.grantFundingEssential,
          willingToUploadPhotos: body.willingToUploadPhotos,
          consentGiven: body.consentGiven,
        })
        .returning();
      return c.json({ success: true, id: submission.id }, 201);
    } catch (err) {
      console.error("Submission error:", err);
      return c.json({ success: false, error: "Failed to save submission" }, 500);
    }
  })

  .post("/installer-interest", async (c) => {
    try {
      const body = await c.req.json();
      const [entry] = await db
        .insert(schema.installerInterest)
        .values({
          name: body.name,
          company: body.company,
          email: body.email,
          phone: body.phone || null,
          region: body.region,
          technologies: JSON.stringify(body.technologies || []),
          enquiriesPerMonth: body.enquiriesPerMonth || null,
          additionalInfo: body.additionalInfo || null,
        })
        .returning();
      return c.json({ success: true, id: entry.id }, 201);
    } catch (err) {
      console.error("Installer interest error:", err);
      return c.json({ success: false, error: "Failed to save" }, 500);
    }
  })

  .post("/contact", async (c) => {
    try {
      const body = await c.req.json();
      const [msg] = await db
        .insert(schema.contactMessages)
        .values({
          name: body.name,
          email: body.email,
          subject: body.subject || null,
          message: body.message,
        })
        .returning();
      return c.json({ success: true, id: msg.id }, 201);
    } catch (err) {
      console.error("Contact error:", err);
      return c.json({ success: false, error: "Failed to save" }, 500);
    }
  })

  .get("/admin/submissions", async (c) => {
    const key = c.req.header("x-admin-key");
    if (key !== ADMIN_KEY) return c.json({ error: "Unauthorised" }, 401);
    const rows = await db
      .select()
      .from(schema.homeownerSubmissions)
      .orderBy(desc(schema.homeownerSubmissions.createdAt));
    return c.json({ submissions: rows }, 200);
  })

  .get("/admin/installer-interest", async (c) => {
    const key = c.req.header("x-admin-key");
    if (key !== ADMIN_KEY) return c.json({ error: "Unauthorised" }, 401);
    const rows = await db
      .select()
      .from(schema.installerInterest)
      .orderBy(desc(schema.installerInterest.createdAt));
    return c.json({ entries: rows }, 200);
  })

  .get("/admin/contact", async (c) => {
    const key = c.req.header("x-admin-key");
    if (key !== ADMIN_KEY) return c.json({ error: "Unauthorised" }, 401);
    const rows = await db
      .select()
      .from(schema.contactMessages)
      .orderBy(desc(schema.contactMessages.createdAt));
    return c.json({ messages: rows }, 200);
  });

export type AppType = typeof app;
export default app;
