import { pgTable, text, serial, integer, boolean, jsonb, timestamp } from "drizzle-orm/pg-core";
import { relations } from "drizzle-orm";
import { createInsertSchema } from "drizzle-zod";
import { z } from "zod";

// Property table
export const properties = pgTable("properties", {
  id: serial("id").primaryKey(),
  title: text("title").notNull(),
  location: jsonb("location").notNull(),
  price: integer("price").notNull(),
  bedrooms: integer("bedrooms").notNull(),
  bathrooms: integer("bathrooms").notNull(),
  guests: integer("guests").notNull(),
  rating: integer("rating").notNull(),
  reviewCount: integer("review_count").notNull(),
  description: text("description").notNull(),
  amenities: jsonb("amenities").notNull(),
  featured: boolean("featured").default(false),
  type: text("type").notNull(),
  images: jsonb("images").notNull(),
  host: jsonb("host").notNull(),
  reviews: jsonb("reviews").notNull(),
});

// Message table for contact form submissions
export const messages = pgTable("messages", {
  id: serial("id").primaryKey(),
  name: text("name").notNull(),
  email: text("email").notNull(),
  phone: text("phone"),
  subject: text("subject").notNull(),
  message: text("message").notNull(),
  createdAt: timestamp("created_at").defaultNow(),
});

// User-related tables
export const users = pgTable("users", {
  id: serial("id").primaryKey(),
  username: text("username").notNull().unique(),
  password: text("password").notNull(),
  email: text("email").notNull().unique(),
  name: text("name").notNull(),
  role: text("role").default("user"),
});

// Booking table
export const bookings = pgTable("bookings", {
  id: serial("id").primaryKey(),
  propertyId: integer("property_id").notNull().references(() => properties.id),
  userId: integer("user_id").notNull().references(() => users.id),
  checkin: text("checkin").notNull(),
  checkout: text("checkout").notNull(),
  guests: integer("guests").notNull(),
  totalPrice: integer("total_price").notNull(),
  status: text("status").default("pending"),
  createdAt: timestamp("created_at").defaultNow(),
});

// Insert schemas
export const insertPropertySchema = createInsertSchema(properties);
export const insertMessageSchema = createInsertSchema(messages);
export const insertUserSchema = createInsertSchema(users).pick({
  username: true,
  password: true,
  email: true,
  name: true,
});
export const insertBookingSchema = createInsertSchema(bookings).pick({
  propertyId: true,
  userId: true,
  checkin: true,
  checkout: true,
  guests: true,
  totalPrice: true,
});

// Types
export type InsertProperty = z.infer<typeof insertPropertySchema>;
export type Property = typeof properties.$inferSelect;

export type InsertMessage = z.infer<typeof insertMessageSchema>;
export type Message = typeof messages.$inferSelect;

export type InsertUser = z.infer<typeof insertUserSchema>;
export type User = typeof users.$inferSelect;

export type InsertBooking = z.infer<typeof insertBookingSchema>;
export type Booking = typeof bookings.$inferSelect;

// Define relations
export const usersRelations = relations(users, ({ many }) => ({
  bookings: many(bookings),
}));

export const propertiesRelations = relations(properties, ({ many }) => ({
  bookings: many(bookings),
}));

export const bookingsRelations = relations(bookings, ({ one }) => ({
  user: one(users, {
    fields: [bookings.userId],
    references: [users.id],
  }),
  property: one(properties, {
    fields: [bookings.propertyId],
    references: [properties.id],
  }),
}));
