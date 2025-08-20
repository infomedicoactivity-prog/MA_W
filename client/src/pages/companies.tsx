import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { useMutation } from "@tanstack/react-query";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { useToast } from "@/hooks/use-toast";
import { apiRequest } from "@/lib/queryClient";
import { insertCompanyInquirySchema, type InsertCompanyInquiry } from "@shared/schema";
import { CheckCircle, Users, Building2, Lightbulb } from "lucide-react";

export default function Companies() {
  const { toast } = useToast();
  const [isSubmitted, setIsSubmitted] = useState(false);

  const form = useForm<InsertCompanyInquiry>({
    resolver: zodResolver(insertCompanyInquirySchema),
    defaultValues: {
      name: "",
      organization: "",
      email: "",
      phone: "",
      areaOfInterest: "",
      message: "",
    },
  });

  const mutation = useMutation({
    mutationFn: async (data: InsertCompanyInquiry) => {
      const response = await apiRequest("POST", "/api/company-inquiry", data);
      return response.json();
    },
    onSuccess: () => {
      setIsSubmitted(true);
      toast({
        title: "Request Submitted Successfully",
        description: "Thank you for your interest! We will contact you soon to discuss collaboration opportunities.",
      });
      form.reset();
    },
    onError: (error: any) => {
      toast({
        title: "Error",
        description: error.message || "Something went wrong. Please try again.",
        variant: "destructive",
      });
    },
  });

  const onSubmit = (data: InsertCompanyInquiry) => {
    mutation.mutate(data);
  };

  return (
    <section className="py-20 bg-gradient-to-br from-medical-blue-50 to-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6" data-testid="page-title">
            For Companies & Marketing Professionals
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto" data-testid="page-description">
            Connect with qualified healthcare professionals to drive your marketing, research, and collaboration initiatives forward.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center mb-16">
          <div>
            <img 
              src="https://images.unsplash.com/photo-1579154204601-01588f351e67?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&h=600" 
              alt="Pharmaceutical industry laboratory" 
              className="rounded-xl shadow-lg w-full h-auto"
              data-testid="companies-image"
            />
          </div>
          <div>
            <h2 className="text-3xl font-bold text-gray-900 mb-6" data-testid="benefits-title">
              How MedicoActivity Helps Your Organization
            </h2>
            <div className="space-y-6">
              <div className="flex items-start space-x-4" data-testid="benefit-promotions">
                <div className="w-8 h-8 bg-medical-blue-100 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                  <CheckCircle className="w-4 h-4 text-medical-blue-600" />
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">Find Doctors for Product Promotions</h3>
                  <p className="text-gray-600">Connect with specialists and general practitioners for product awareness campaigns, educational programs, and authentic endorsements.</p>
                </div>
              </div>
              
              <div className="flex items-start space-x-4" data-testid="benefit-advisory">
                <div className="w-8 h-8 bg-health-green-100 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                  <Users className="w-4 h-4 text-health-green-600" />
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">Engage Advisory Boards & Clinical Trials</h3>
                  <p className="text-gray-600">Recruit qualified physicians for advisory panels, clinical research studies, and product development consultations.</p>
                </div>
              </div>
              
              <div className="flex items-start space-x-4" data-testid="benefit-collaboration">
                <div className="w-8 h-8 bg-medical-blue-100 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                  <Building2 className="w-4 h-4 text-medical-blue-600" />
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">Build Long-Term Collaborations</h3>
                  <p className="text-gray-600">Establish ongoing partnerships in healthcare marketing, research initiatives, and innovation projects with trusted medical professionals.</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Contact Form */}
        <div className="max-w-4xl mx-auto">
          <Card className="shadow-xl">
            <CardContent className="p-8 md:p-12">
              <div className="text-center mb-8">
                <h2 className="text-3xl font-bold text-gray-900 mb-4" data-testid="form-title">
                  Get Started Today
                </h2>
                <p className="text-lg text-gray-600" data-testid="form-description">
                  Tell us about your organization and collaboration needs. Our team will connect you with the right healthcare professionals.
                </p>
              </div>
              
              {isSubmitted ? (
                <div className="text-center py-8" data-testid="success-message">
                  <CheckCircle className="w-16 h-16 text-health-green-600 mx-auto mb-4" />
                  <h3 className="text-2xl font-bold text-gray-900 mb-2">Thank You!</h3>
                  <p className="text-gray-600">Your request has been submitted successfully. We'll be in touch soon!</p>
                </div>
              ) : (
                <Form {...form}>
                  <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6" data-testid="company-form">
                    <div className="grid md:grid-cols-2 gap-6">
                      <FormField
                        control={form.control}
                        name="name"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel>Name *</FormLabel>
                            <FormControl>
                              <Input {...field} data-testid="input-name" />
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        )}
                      />
                      <FormField
                        control={form.control}
                        name="organization"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel>Organization *</FormLabel>
                            <FormControl>
                              <Input {...field} data-testid="input-organization" />
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        )}
                      />
                    </div>
                    
                    <div className="grid md:grid-cols-2 gap-6">
                      <FormField
                        control={form.control}
                        name="email"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel>Email *</FormLabel>
                            <FormControl>
                              <Input type="email" {...field} data-testid="input-email" />
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        )}
                      />
                      <FormField
                        control={form.control}
                        name="phone"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel>Phone *</FormLabel>
                            <FormControl>
                              <Input type="tel" {...field} data-testid="input-phone" />
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        )}
                      />
                    </div>
                    
                    <FormField
                      control={form.control}
                      name="areaOfInterest"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Area of Interest *</FormLabel>
                          <Select onValueChange={field.onChange} defaultValue={field.value}>
                            <FormControl>
                              <SelectTrigger data-testid="select-area-interest">
                                <SelectValue placeholder="Select your primary interest" />
                              </SelectTrigger>
                            </FormControl>
                            <SelectContent>
                              <SelectItem value="product-promotion">Product Promotion & Marketing</SelectItem>
                              <SelectItem value="clinical-trials">Clinical Trials & Research</SelectItem>
                              <SelectItem value="advisory-boards">Advisory Boards</SelectItem>
                              <SelectItem value="medical-devices">Medical Device Testing</SelectItem>
                              <SelectItem value="educational-programs">Educational Programs</SelectItem>
                              <SelectItem value="consulting">Medical Consulting</SelectItem>
                              <SelectItem value="other">Other</SelectItem>
                            </SelectContent>
                          </Select>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                    
                    <FormField
                      control={form.control}
                      name="message"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Message</FormLabel>
                          <FormControl>
                            <Textarea 
                              {...field} 
                              rows={4}
                              placeholder="Tell us more about your collaboration needs, target specialties, project timeline, or any specific requirements..."
                              data-testid="textarea-message"
                            />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                    
                    <div className="text-center">
                      <Button 
                        type="submit" 
                        disabled={mutation.isPending}
                        className="bg-medical-blue-600 text-white px-8 py-4 text-lg font-semibold hover:bg-medical-blue-700 transform hover:scale-105 transition-all duration-200 shadow-lg"
                        data-testid="button-submit"
                      >
                        {mutation.isPending ? "Submitting..." : "Submit Request"}
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
