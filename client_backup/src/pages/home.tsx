import { Link } from "wouter";
import { Button } from "@/components/ui/button";
import { Building2, Users, CheckCircle, HeartHandshake } from "lucide-react";

export default function Home() {
  return (
    <div>
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-medical-blue-50 via-white to-health-green-50 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="text-center lg:text-left">
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 leading-tight mb-6" data-testid="hero-title">
                Connecting Healthcare Industry and{" "}
                <span className="text-medical-blue-600">Doctors</span> for{" "}
                <span className="text-health-green-600">Marketing, Research & Collaboration</span>
              </h1>
              <p className="text-xl text-gray-600 mb-8 max-w-2xl" data-testid="hero-description">
                MedicoActivity bridges doctors, pharma companies, medical device manufacturers, CROs, and marketing professionals to create meaningful healthcare collaborations.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
                <Link href="/companies">
                  <Button 
                    className="bg-medical-blue-600 text-white px-8 py-4 text-lg font-semibold hover:bg-medical-blue-700 transform hover:scale-105 transition-all duration-200 shadow-lg"
                    data-testid="button-companies"
                  >
                    For Companies & Marketing Professionals
                  </Button>
                </Link>
                <Link href="/doctors">
                  <Button 
                    className="bg-health-green-600 text-white px-8 py-4 text-lg font-semibold hover:bg-health-green-700 transform hover:scale-105 transition-all duration-200 shadow-lg"
                    data-testid="button-doctors"
                  >
                    For Doctors
                  </Button>
                </Link>
              </div>
            </div>
            <div className="text-center">
              <img 
                src="https://images.unsplash.com/photo-1559757148-5c350d0d3c56?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&h=600" 
                alt="Healthcare professionals collaborating" 
                className="rounded-2xl shadow-2xl w-full h-auto max-w-lg mx-auto"
                data-testid="hero-image"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4" data-testid="features-title">
              Bridging Healthcare Excellence
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto" data-testid="features-description">
              Empowering doctors to expand beyond patient care into industry collaboration while helping companies find the right medical expertise.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center bg-white p-6 rounded-xl shadow-sm hover:shadow-md transition-shadow" data-testid="feature-pharma">
              <div className="w-16 h-16 bg-medical-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Building2 className="w-8 h-8 text-medical-blue-600" />
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Pharma Companies</h3>
              <p className="text-gray-600">Connect with qualified doctors for product promotion, clinical trials, and advisory roles.</p>
            </div>
            
            <div className="text-center bg-white p-6 rounded-xl shadow-sm hover:shadow-md transition-shadow" data-testid="feature-devices">
              <div className="w-16 h-16 bg-health-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <HeartHandshake className="w-8 h-8 text-health-green-600" />
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Medical Devices</h3>
              <p className="text-gray-600">Find specialists for device testing, training, and market validation programs.</p>
            </div>
            
            <div className="text-center bg-white p-6 rounded-xl shadow-sm hover:shadow-md transition-shadow" data-testid="feature-research">
              <div className="w-16 h-16 bg-medical-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <CheckCircle className="w-8 h-8 text-medical-blue-600" />
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Clinical Research</h3>
              <p className="text-gray-600">Partner with CROs to identify principal investigators and clinical research sites.</p>
            </div>
            
            <div className="text-center bg-white p-6 rounded-xl shadow-sm hover:shadow-md transition-shadow" data-testid="feature-marketing">
              <div className="w-16 h-16 bg-health-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Users className="w-8 h-8 text-health-green-600" />
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Marketing Professionals</h3>
              <p className="text-gray-600">Build authentic healthcare campaigns with credible medical expertise.</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-medical-blue-600 to-health-green-600">
        <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6" data-testid="cta-title">
            Ready to Transform Healthcare Collaboration?
          </h2>
          <p className="text-xl text-blue-100 mb-8" data-testid="cta-description">
            Join thousands of healthcare professionals and industry leaders already collaborating through MedicoActivity.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/companies">
              <Button 
                className="bg-white text-medical-blue-600 px-8 py-4 text-lg font-semibold hover:bg-gray-50 transition-colors"
                data-testid="cta-button-companies"
              >
                Get Started as a Company
              </Button>
            </Link>
            <Link href="/doctors">
              <Button 
                variant="outline" 
                className="border-2 border-white text-white px-8 py-4 text-lg font-semibold hover:bg-white hover:text-medical-blue-600 transition-colors"
                data-testid="cta-button-doctors"
              >
                Join as a Doctor
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
