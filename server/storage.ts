import { Property, InsertProperty, Message, InsertMessage, Booking, InsertBooking, User, InsertUser } from "@shared/schema";
import { propertiesData } from "./data/properties";

export interface IStorage {
  // User operations
  getUser(id: number): Promise<User | undefined>;
  getUserByUsername(username: string): Promise<User | undefined>;
  createUser(user: InsertUser): Promise<User>;
  
  // Property operations
  getAllProperties(): Property[];
  getFeaturedProperties(): Property[];
  getPropertyById(id: number): Property | undefined;
  getSimilarProperties(propertyId: number): Property[];
  
  // Message operations
  createMessage(message: Omit<InsertMessage, "createdAt">): Message;
  
  // Booking operations
  createBooking(booking: Omit<InsertBooking, "status" | "createdAt">): Booking;
  getBookingsByUserId(userId: number): Booking[];
  getBookingsByPropertyId(propertyId: number): Booking[];
}

export class MemStorage implements IStorage {
  private users: Map<number, User>;
  private properties: Map<number, Property>;
  private messages: Map<number, Message>;
  private bookings: Map<number, Booking>;
  private currentUserId: number;
  private currentMessageId: number;
  private currentBookingId: number;

  constructor() {
    this.users = new Map();
    this.properties = new Map();
    this.messages = new Map();
    this.bookings = new Map();
    this.currentUserId = 1;
    this.currentMessageId = 1;
    this.currentBookingId = 1;
    
    // Initialize with sample properties data
    this.initializeProperties();
  }

  private initializeProperties() {
    propertiesData.forEach(property => {
      this.properties.set(property.id, property);
    });
  }

  // User operations
  async getUser(id: number): Promise<User | undefined> {
    return this.users.get(id);
  }

  async getUserByUsername(username: string): Promise<User | undefined> {
    return Array.from(this.users.values()).find(
      (user) => user.username === username,
    );
  }

  async createUser(insertUser: InsertUser): Promise<User> {
    const id = this.currentUserId++;
    const user: User = { 
      ...insertUser, 
      id, 
      role: "user" 
    };
    this.users.set(id, user);
    return user;
  }

  // Property operations
  getAllProperties(): Property[] {
    return Array.from(this.properties.values());
  }

  getFeaturedProperties(): Property[] {
    return Array.from(this.properties.values())
      .filter(property => property.featured)
      .slice(0, 3); // Return only 3 featured properties
  }

  getPropertyById(id: number): Property | undefined {
    return this.properties.get(id);
  }

  getSimilarProperties(propertyId: number): Property[] {
    const property = this.properties.get(propertyId);
    if (!property) return [];

    // Find properties of the same type or in the same location
    return Array.from(this.properties.values())
      .filter(p => {
        if (p.id === propertyId) return false;
        if (p.type === property.type) return true;
        
        // Type safety for location comparison
        if (p.location && property.location && 
            typeof p.location === 'object' && typeof property.location === 'object' &&
            'area' in p.location && 'area' in property.location) {
          return p.location.area === property.location.area;
        }
        
        return false;
      })
      .slice(0, 3); // Return only 3 similar properties
  }

  // Message operations
  createMessage(messageData: Omit<InsertMessage, "createdAt">): Message {
    const id = this.currentMessageId++;
    // Create a new object with the correct structure for Message type
    const message: Message = {
      id,
      name: messageData.name,
      email: messageData.email,
      phone: messageData.phone || null, // Convert undefined to null
      subject: messageData.subject,
      message: messageData.message,
      createdAt: new Date()
    };
    this.messages.set(id, message);
    return message;
  }

  // Booking operations
  createBooking(bookingData: Omit<InsertBooking, "status" | "createdAt">): Booking {
    const id = this.currentBookingId++;
    const booking: Booking = {
      ...bookingData,
      id,
      status: "pending",
      createdAt: new Date()
    };
    this.bookings.set(id, booking);
    return booking;
  }

  getBookingsByUserId(userId: number): Booking[] {
    return Array.from(this.bookings.values())
      .filter(booking => booking.userId === userId);
  }

  getBookingsByPropertyId(propertyId: number): Booking[] {
    return Array.from(this.bookings.values())
      .filter(booking => booking.propertyId === propertyId);
  }
}

// Use DatabaseStorage if needed
// export const storage = new MemStorage();

import { db } from "./db";
import { eq } from "drizzle-orm";
import { users, messages, bookings, properties } from "@shared/schema";

// Database storage implementation
export class DatabaseStorage implements IStorage {
  async getUser(id: number): Promise<User | undefined> {
    const [user] = await db.select().from(users).where(eq(users.id, id));
    return user || undefined;
  }

  async getUserByUsername(username: string): Promise<User | undefined> {
    const [user] = await db.select().from(users).where(eq(users.username, username));
    return user || undefined;
  }

  async createUser(insertUser: InsertUser): Promise<User> {
    const [user] = await db
      .insert(users)
      .values(insertUser)
      .returning();
    return user;
  }
  
  getAllProperties(): Property[] {
    // For now, return the in-memory properties from the data file
    const memStorage = new MemStorage();
    return memStorage.getAllProperties();
  }

  getFeaturedProperties(): Property[] {
    return this.getAllProperties()
      .filter(property => property.featured)
      .slice(0, 3);
  }

  getPropertyById(id: number): Property | undefined {
    return this.getAllProperties().find(p => p.id === id);
  }

  getSimilarProperties(propertyId: number): Property[] {
    const property = this.getPropertyById(propertyId);
    if (!property) return [];

    return this.getAllProperties()
      .filter(p => {
        if (p.id === propertyId) return false;
        if (p.type === property.type) return true;
        
        if (p.location && property.location && 
            typeof p.location === 'object' && typeof property.location === 'object' &&
            'area' in p.location && 'area' in property.location) {
          return p.location.area === property.location.area;
        }
        
        return false;
      })
      .slice(0, 3);
  }

  async createMessage(messageData: Omit<InsertMessage, "createdAt">): Promise<Message> {
    try {
      const [message] = await db.insert(messages)
        .values({
          name: messageData.name,
          email: messageData.email,
          phone: messageData.phone || null, 
          subject: messageData.subject,
          message: messageData.message
        })
        .returning();
      
      return message;
    } catch (err) {
      console.error("Error saving message to database:", err);
      // Return a placeholder message for now
      return {
        id: 0,
        name: messageData.name,
        email: messageData.email,
        phone: messageData.phone || null,
        subject: messageData.subject,
        message: messageData.message,
        createdAt: new Date()
      };
    }
  }

  async createBooking(bookingData: Omit<InsertBooking, "status" | "createdAt">): Promise<Booking> {
    try {
      const [booking] = await db.insert(bookings)
        .values({
          propertyId: bookingData.propertyId,
          userId: bookingData.userId,
          checkin: bookingData.checkin,
          checkout: bookingData.checkout,
          guests: bookingData.guests,
          totalPrice: bookingData.totalPrice,
          status: "pending"
        })
        .returning();
      
      return booking;
    } catch (err) {
      console.error("Error saving booking to database:", err);
      // Return a placeholder booking for now
      return {
        id: 0,
        ...bookingData,
        status: "pending",
        createdAt: new Date()
      };
    }
  }

  async getBookingsByUserId(userId: number): Promise<Booking[]> {
    try {
      const results = await db.select()
        .from(bookings)
        .where(eq(bookings.userId, userId));
      
      return results;
    } catch (err) {
      console.error("Error retrieving bookings by user:", err);
      return [];
    }
  }

  async getBookingsByPropertyId(propertyId: number): Promise<Booking[]> {
    try {
      const results = await db.select()
        .from(bookings)
        .where(eq(bookings.propertyId, propertyId));
      
      return results;
    } catch (err) {
      console.error("Error retrieving bookings by property:", err);
      return [];
    }
  }
}

// Switch from MemStorage to DatabaseStorage
export const storage = new DatabaseStorage();
