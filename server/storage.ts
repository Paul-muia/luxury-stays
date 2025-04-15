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

export const storage = new MemStorage();
