import type { Express } from "express";
import { createServer, type Server } from "http";
import { storage } from "./storage";

export async function registerRoutes(app: Express): Promise<Server> {
  // API routes for properties
  app.get("/api/properties", (req, res) => {
    const properties = storage.getAllProperties();
    res.json(properties);
  });

  app.get("/api/properties/featured", (req, res) => {
    const featured = storage.getFeaturedProperties();
    res.json(featured);
  });

  app.get("/api/properties/:id", (req, res) => {
    const id = parseInt(req.params.id);
    const property = storage.getPropertyById(id);
    
    if (!property) {
      return res.status(404).json({ message: "Property not found" });
    }
    
    res.json(property);
  });

  app.get("/api/properties/:id/similar", (req, res) => {
    const id = parseInt(req.params.id);
    const property = storage.getPropertyById(id);
    
    if (!property) {
      return res.status(404).json({ message: "Property not found" });
    }
    
    const similar = storage.getSimilarProperties(id);
    res.json(similar);
  });

  // Contact form submission
  app.post("/api/contact", (req, res) => {
    try {
      const { name, email, phone, subject, message } = req.body;
      
      if (!name || !email || !subject || !message) {
        return res.status(400).json({ message: "Missing required fields" });
      }
      
      // Store the message
      const newMessage = storage.createMessage({
        name,
        email,
        phone: phone || "",
        subject,
        message
      });
      
      res.status(201).json({ 
        success: true, 
        message: "Your message has been sent successfully" 
      });
    } catch (error) {
      console.error("Error in contact form submission:", error);
      res.status(500).json({ message: "Failed to send message. Please try again later." });
    }
  });

  // Booking submission
  app.post("/api/bookings", (req, res) => {
    try {
      const { propertyId, checkin, checkout, guests, totalPrice } = req.body;
      
      if (!propertyId || !checkin || !checkout || !guests || !totalPrice) {
        return res.status(400).json({ message: "Missing required fields" });
      }
      
      // For now, we'll use 1 as the default user ID since we don't have authentication
      const userId = 1;
      
      const newBooking = storage.createBooking({
        propertyId,
        userId,
        checkin,
        checkout,
        guests,
        totalPrice
      });
      
      res.status(201).json({ 
        success: true, 
        booking: newBooking,
        message: "Booking has been created successfully" 
      });
    } catch (error) {
      console.error("Error in booking submission:", error);
      res.status(500).json({ message: "Failed to create booking. Please try again later." });
    }
  });

  const httpServer = createServer(app);

  return httpServer;
}
