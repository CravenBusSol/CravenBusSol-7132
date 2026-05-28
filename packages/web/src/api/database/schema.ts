import { sqliteTable, text, integer } from "drizzle-orm/sqlite-core";

export const homeownerSubmissions = sqliteTable("homeowner_submissions", {
  id: integer("id").primaryKey({ autoIncrement: true }),
  name: text("name").notNull(),
  email: text("email").notNull(),
  phone: text("phone"),
  postcode: text("postcode").notNull(),
  propertyType: text("property_type").notNull(),
  ownershipStatus: text("ownership_status").notNull(),
  currentHeatingType: text("current_heating_type").notNull(),
  boilerAge: text("boiler_age").notNull(),
  hotWaterCylinder: text("hot_water_cylinder").notNull(),
  interestedTechnologies: text("interested_technologies").notNull(),
  mainGoals: text("main_goals").notNull(),
  approximateBudget: text("approximate_budget").notNull(),
  timeline: text("timeline").notNull(),
  grantFundingEssential: text("grant_funding_essential").notNull(),
  willingToUploadPhotos: text("willing_to_upload_photos").notNull(),
  consentGiven: integer("consent_given", { mode: "boolean" }).notNull(),
  createdAt: integer("created_at", { mode: "timestamp" })
    .notNull()
    .$defaultFn(() => new Date()),
});

export const installerInterest = sqliteTable("installer_interest", {
  id: integer("id").primaryKey({ autoIncrement: true }),
  name: text("name").notNull(),
  company: text("company").notNull(),
  email: text("email").notNull(),
  phone: text("phone"),
  region: text("region").notNull(),
  technologies: text("technologies").notNull(),
  enquiriesPerMonth: text("enquiries_per_month"),
  additionalInfo: text("additional_info"),
  createdAt: integer("created_at", { mode: "timestamp" })
    .notNull()
    .$defaultFn(() => new Date()),
});

export const contactMessages = sqliteTable("contact_messages", {
  id: integer("id").primaryKey({ autoIncrement: true }),
  name: text("name").notNull(),
  email: text("email").notNull(),
  subject: text("subject"),
  message: text("message").notNull(),
  createdAt: integer("created_at", { mode: "timestamp" })
    .notNull()
    .$defaultFn(() => new Date()),
});
