import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { useMutation } from "@tanstack/react-query";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { useToast } from "@/hooks/use-toast";
import { apiRequest } from "@/lib/queryClient";
import { insertDoctorSignupSchema, type InsertDoctorSignup } from "@shared/schema";
import { CheckCircle, Users, Building2, HeartHandshake, Upload } from "lucide-react";

export default function Doctors() {
  const { toast } = useToast();
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [selectedFile, setSelectedFile] = useState<File | null>(null);

  const form = useForm<InsertDoctorSignup>({
    resolver: zodResolver(insertDoctorSignupSchema),
    defaultValues: {
      name: "",
      specialization: "",
      location: "",
      email: "",
      phone: "",
      resumeUrl: "",
    },
  });

  const mutation = useMutation({
    mutationFn: async (data: InsertDoctorSignup) => {
      const formData = new FormData();
      Object.entries(data).forEach(([key, value]) => {
        if (value) formData.append(key, value);
      });
      
      if (selectedFile) {
        formData.append('resume', selectedFile);
      }

      const response = await fetch("/api/doctor-signup", {
        method: "POST",
        body: formData,
        credentials: "include",
      });

      if (!response.ok) {
        const errorText = await response.text();
        throw new Error(`${response.status}: ${errorText}`);
      }

      return response.json();
    },
    onSuccess: () => {
      setIsSubmitted(true);
      toast({
        title: "Profile Created Successfully",
        description: "Welcome to MedicoActivity! Your professional profile has been submitted for review.",
      });
      form.reset();
      setSelectedFile(null);
    },
    onError: (error: any) => {
      toast({
        title: "Error",
        description: error.message || "Something went wrong. Please try again.",
        variant: "destructive",
      });
    },
  });

  const onSubmit = (data: InsertDoctorSignup) => {
    mutation.mutate(data);
  };

  const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (file) {
      const allowedTypes = ['application/pdf', 'application/msword', 'application/vnd.openxmlformats-officedocument.wordprocessingml.document'];
      if (!allowedTypes.includes(file.type)) {
        toast({
          title: "Invalid File Type",
          description: "Please upload a PDF, DOC, or DOCX file.",
          variant: "destructive",
        });
        return;
      }
      
      if (file.size > 5 * 1024 * 1024) {
        toast({
          title: "File Too Large",
          description: "File size must be less than 5MB.",
          variant: "destructive",
        });
        return;
      }
      
      setSelectedFile(file);
    }
  };

  return (
    <section className="py-20 bg-gradient-to-br from-health-green-50 to-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6" data-testid="page-title">
            For Doctors
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto" data-testid="page-description">
            Expand your professional impact beyond patient care. Join industry collaborations that advance healthcare innovation and your career.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center mb-16">
          <div>
            <h2 className="text-3xl font-bold text-gray-900 mb-6" data-testid="opportunities-title">
              Beyond Patient Care: Your Industry Impact
            </h2>
            <p className="text-lg text-gray-600 mb-8" data-testid="opportunities-description">
              As a healthcare professional, your expertise extends far beyond the clinic. MedicoActivity connects you with meaningful opportunities to contribute to medical advancement while enhancing your professional growth.
            </p>
            
            <div className="space-y-6">
              <div className="flex items-start space-x-4" data-testid="opportunity-research">
                <div className="w-8 h-8 bg-health-green-100 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                  <CheckCircle className="w-4 h-4 text-health-green-600" />
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">Research Collaborations</h3>
                  <p className="text-gray-600">Participate in clinical trials, product testing, and groundbreaking medical research that shapes the future of healthcare.</p>
                </div>
              </div>
              
              <div className="flex items-start space-x-4" data-testid="opportunity-advisory">
                <div className="w-8 h-8 bg-medical-blue-100 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                  <Building2 className="w-4 h-4 text-medical-blue-600" />
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">Advisory Roles</h3>
                  <p className="text-gray-600">Provide strategic guidance to pharmaceutical companies and medical device manufacturers on product development and clinical applications.</p>
                </div>
              </div>
              
              <div className="flex items-start space-x-4" data-testid="opportunity-marketing">
                <div className="w-8 h-8 bg-health-green-100 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                  <Users className="w-4 h-4 text-health-green-600" />
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">Marketing Partnerships</h3>
                  <p className="text-gray-600">Share your expertise through educational programs, product awareness initiatives, and professional development content.</p>
                </div>
              </div>
              
              <div className="flex items-start space-x-4" data-testid="opportunity-consulting">
                <div className="w-8 h-8 bg-medical-blue-100 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                  <HeartHandshake className="w-4 h-4 text-medical-blue-600" />
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">Consulting Opportunities</h3>
                  <p className="text-gray-600">Offer specialized consulting services to companies, CROs, and healthcare organizations seeking medical expertise.</p>
                </div>
              </div>
            </div>
          </div>
          <div>
            <img 
              src="https://images.unsplash.com/photo-1584515933487-779824d29309?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&h=600" 
              alt="Healthcare professional wearing medical mask in hospital setting" 
              className="rounded-xl shadow-lg w-full h-auto"
              data-testid="doctors-image"
            />
          </div>
        </div>

        {/* Signup Form */}
        <div className="max-w-4xl mx-auto">
          <Card className="shadow-xl">
            <CardContent className="p-8 md:p-12">
              <div className="text-center mb-8">
                <h2 className="text-3xl font-bold text-gray-900 mb-4" data-testid="form-title">
                  Join Our Network of Healthcare Professionals
                </h2>
                <p className="text-lg text-gray-600" data-testid="form-description">
                  Create your profile and start connecting with leading healthcare companies and research organizations.
                </p>
              </div>
              
              {isSubmitted ? (
                <div className="text-center py-8" data-testid="success-message">
                  <CheckCircle className="w-16 h-16 text-health-green-600 mx-auto mb-4" />
                  <h3 className="text-2xl font-bold text-gray-900 mb-2">Welcome to MedicoActivity!</h3>
                  <p className="text-gray-600">Your professional profile has been submitted for review. We'll be in touch soon!</p>
                </div>
              ) : (
                <Form {...form}>
                  <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6" data-testid="doctor-form">
                    <div className="grid md:grid-cols-2 gap-6">
                      <FormField
                        control={form.control}
                        name="name"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel>Full Name *</FormLabel>
                            <FormControl>
                              <Input {...field} data-testid="input-name" />
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        )}
                      />
                      <FormField
                        control={form.control}
                        name="specialization"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel>Medical Specialization *</FormLabel>
                            <Select onValueChange={field.onChange} defaultValue={field.value}>
                              <FormControl>
                                <SelectTrigger data-testid="select-specialization">
                                  <SelectValue placeholder="Select your specialization" />
                                </SelectTrigger>
                              </FormControl>
                              <SelectContent>
                                <SelectItem value="cardiology">Cardiology</SelectItem>
                                <SelectItem value="neurology">Neurology</SelectItem>
                                <SelectItem value="oncology">Oncology</SelectItem>
                                <SelectItem value="orthopedics">Orthopedics</SelectItem>
                                <SelectItem value="pediatrics">Pediatrics</SelectItem>
                                <SelectItem value="psychiatry">Psychiatry</SelectItem>
                                <SelectItem value="radiology">Radiology</SelectItem>
                                <SelectItem value="surgery">Surgery</SelectItem>
                                <SelectItem value="internal-medicine">Internal Medicine</SelectItem>
                                <SelectItem value="emergency-medicine">Emergency Medicine</SelectItem>
                                <SelectItem value="family-medicine">Family Medicine</SelectItem>
                                <SelectItem value="dermatology">Dermatology</SelectItem>
                                <SelectItem value="anesthesiology">Anesthesiology</SelectItem>
                                <SelectItem value="pathology">Pathology</SelectItem>
                                <SelectItem value="other">Other</SelectItem>
                              </SelectContent>
                            </Select>
                            <FormMessage />
                          </FormItem>
                        )}
                      />
                    </div>
                    
                    <div className="grid md:grid-cols-2 gap-6">
                      <FormField
                        control={form.control}
                        name="location"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel>Location (City, State/Country) *</FormLabel>
                            <FormControl>
                              <Input 
                                {...field} 
                                placeholder="e.g., New York, NY or London, UK"
                                data-testid="input-location"
                              />
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        )}
                      />
                      <FormField
                        control={form.control}
                        name="email"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel>Email Address *</FormLabel>
                            <FormControl>
                              <Input type="email" {...field} data-testid="input-email" />
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        )}
                      />
                    </div>
                    
                    <FormField
                      control={form.control}
                      name="phone"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Phone Number *</FormLabel>
                          <FormControl>
                            <Input type="tel" {...field} data-testid="input-phone" />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                    
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Upload Resume/CV
                      </label>
                      <div 
                        className="w-full px-4 py-8 border-2 border-dashed border-gray-300 rounded-lg text-center hover:border-health-green-500 transition-colors cursor-pointer"
                        onClick={() => document.getElementById('resume-upload')?.click()}
                        data-testid="file-upload-area"
                      >
                        <input 
                          type="file" 
                          id="resume-upload" 
                          name="resume" 
                          accept=".pdf,.doc,.docx" 
                          className="hidden"
                          onChange={handleFileChange}
                          data-testid="file-input"
                        />
                        {selectedFile ? (
                          <>
                            <CheckCircle className="mx-auto h-12 w-12 text-health-green-500 mb-4" />
                            <p className="text-sm text-health-green-600 font-medium">{selectedFile.name}</p>
                            <p className="text-xs text-gray-400 mt-1">File uploaded successfully</p>
                          </>
                        ) : (
                          <>
                            <Upload className="mx-auto h-12 w-12 text-gray-400 mb-4" />
                            <p className="text-sm text-gray-600">Click to upload your resume or CV</p>
                            <p className="text-xs text-gray-400 mt-1">PDF, DOC, or DOCX (Max 5MB)</p>
                          </>
                        )}
                      </div>
                    </div>
                    
                    <div className="text-center">
                      <Button 
                        type="submit" 
                        disabled={mutation.isPending}
                        className="bg-health-green-600 text-white px-8 py-4 text-lg font-semibold hover:bg-health-green-700 transform hover:scale-105 transition-all duration-200 shadow-lg"
                        data-testid="button-submit"
                      >
                        {mutation.isPending ? "Creating Profile..." : "Create Professional Profile"}
                      </Button>
                    </div>
                  </form>
                </Form>
              )}
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
}
