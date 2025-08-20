import type { Express } from "express";
import { createServer, type Server } from "http";
import { storage } from "./storage";
import { insertCompanyInquirySchema, insertDoctorSignupSchema, insertContactInquirySchema } from "@shared/schema";
import multer from "multer";
import path from "path";
import { z } from "zod";

// Configure multer for file uploads
const upload = multer({
  storage: multer.diskStorage({
    destination: (req, file, cb) => {
      cb(null, 'uploads/');
    },
    filename: (req, file, cb) => {
      const uniqueSuffix = Date.now() + '-' + Math.round(Math.random() * 1E9);
      cb(null, file.fieldname + '-' + uniqueSuffix + path.extname(file.originalname));
    }
  }),
  limits: {
    fileSize: 5 * 1024 * 1024, // 5MB limit
  },
  fileFilter: (req, file, cb) => {
    const allowedTypes = ['.pdf', '.doc', '.docx'];
    const ext = path.extname(file.originalname).toLowerCase();
    if (allowedTypes.includes(ext)) {
      cb(null, true);
    } else {
      cb(new Error('Invalid file type. Only PDF, DOC, and DOCX files are allowed.'));
    }
  }
});

export async function registerRoutes(app: Express): Promise<Server> {
  // Company inquiry form submission
  app.post("/api/company-inquiry", async (req, res) => {
    try {
      const validatedData = insertCompanyInquirySchema.parse(req.body);
      const inquiry = await storage.createCompanyInquiry(validatedData);
      
      // In a real application, you would send an email here
      console.log('New company inquiry received:', inquiry);
      
      res.json({ 
        message: "Company inquiry submitted successfully", 
        id: inquiry.id 
      });
    } catch (error) {
      if (error instanceof z.ZodError) {
        res.status(400).json({ 
          message: "Validation error", 
          errors: error.errors 
        });
      } else {
        res.status(500).json({ 
          message: "Internal server error" 
        });
      }
    }
  });

  // Doctor signup form submission
  app.post("/api/doctor-signup", upload.single('resume'), async (req, res) => {
    try {
      const doctorData = {
        ...req.body,
        resumeUrl: req.file ? req.file.path : null
      };
      
      const validatedData = insertDoctorSignupSchema.parse(doctorData);
      const signup = await storage.createDoctorSignup(validatedData);
      
      // In a real application, you would send an email here
      console.log('New doctor signup received:', signup);
      
      res.json({ 
        message: "Doctor profile created successfully", 
        id: signup.id 
      });
    } catch (error) {
      if (error instanceof z.ZodError) {
        res.status(400).json({ 
          message: "Validation error", 
          errors: error.errors 
        });
      } else {
        res.status(500).json({ 
          message: "Internal server error" 
        });
      }
    }
  });

  // Contact form submission
  app.post("/api/contact", async (req, res) => {
    try {
      const validatedData = insertContactInquirySchema.parse(req.body);
      const inquiry = await storage.createContactInquiry(validatedData);
      
      // In a real application, you would send an email here
      console.log('New contact inquiry received:', inquiry);
      
      res.json({ 
        message: "Contact message sent successfully", 
        id: inquiry.id 
      });
    } catch (error) {
      if (error instanceof z.ZodError) {
        res.status(400).json({ 
          message: "Validation error", 
          errors: error.errors 
        });
      } else {
        res.status(500).json({ 
          message: "Internal server error" 
        });
      }
    }
  });

  // Get all submissions (for admin purposes)
  app.get("/api/admin/inquiries", async (req, res) => {
    try {
      const companyInquiries = await storage.getAllCompanyInquiries();
      const doctorSignups = await storage.getAllDoctorSignups();
      const contactInquiries = await storage.getAllContactInquiries();
      
      res.json({
        companyInquiries,
        doctorSignups,
        contactInquiries
      });
    } catch (error) {
      res.status(500).json({ 
        message: "Internal server error" 
      });
    }
  });

  const httpServer = createServer(app);
  return httpServer;
}
