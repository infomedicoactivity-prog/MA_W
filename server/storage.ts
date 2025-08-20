import { 
  type CompanyInquiry, 
  type InsertCompanyInquiry,
  type DoctorSignup,
  type InsertDoctorSignup,
  type ContactInquiry,
  type InsertContactInquiry
} from "@shared/schema";
import { randomUUID } from "crypto";

export interface IStorage {
  createCompanyInquiry(inquiry: InsertCompanyInquiry): Promise<CompanyInquiry>;
  createDoctorSignup(signup: InsertDoctorSignup): Promise<DoctorSignup>;
  createContactInquiry(inquiry: InsertContactInquiry): Promise<ContactInquiry>;
  getAllCompanyInquiries(): Promise<CompanyInquiry[]>;
  getAllDoctorSignups(): Promise<DoctorSignup[]>;
  getAllContactInquiries(): Promise<ContactInquiry[]>;
}

export class MemStorage implements IStorage {
  private companyInquiries: Map<string, CompanyInquiry>;
  private doctorSignups: Map<string, DoctorSignup>;
  private contactInquiries: Map<string, ContactInquiry>;

  constructor() {
    this.companyInquiries = new Map();
    this.doctorSignups = new Map();
    this.contactInquiries = new Map();
  }

  async createCompanyInquiry(insertInquiry: InsertCompanyInquiry): Promise<CompanyInquiry> {
    const id = randomUUID();
    const inquiry: CompanyInquiry = {
      ...insertInquiry,
      id,
      createdAt: new Date(),
    };
    this.companyInquiries.set(id, inquiry);
    return inquiry;
  }

  async createDoctorSignup(insertSignup: InsertDoctorSignup): Promise<DoctorSignup> {
    const id = randomUUID();
    const signup: DoctorSignup = {
      ...insertSignup,
      id,
      createdAt: new Date(),
    };
    this.doctorSignups.set(id, signup);
    return signup;
  }

  async createContactInquiry(insertInquiry: InsertContactInquiry): Promise<ContactInquiry> {
    const id = randomUUID();
    const inquiry: ContactInquiry = {
      ...insertInquiry,
      id,
      createdAt: new Date(),
    };
    this.contactInquiries.set(id, inquiry);
    return inquiry;
  }

  async getAllCompanyInquiries(): Promise<CompanyInquiry[]> {
    return Array.from(this.companyInquiries.values());
  }

  async getAllDoctorSignups(): Promise<DoctorSignup[]> {
    return Array.from(this.doctorSignups.values());
  }

  async getAllContactInquiries(): Promise<ContactInquiry[]> {
    return Array.from(this.contactInquiries.values());
  }
}

export const storage = new MemStorage();
