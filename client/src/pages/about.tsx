import { Shield, Zap, Heart } from "lucide-react";

export default function About() {
  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6" data-testid="page-title">
            About MedicoActivity
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto" data-testid="page-description">
            Bridging the gap between healthcare professionals and industry to advance medical innovation and improve patient outcomes worldwide.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center mb-20">
          <div>
            <img 
              src="https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&h=600" 
              alt="Medical research laboratory with advanced equipment" 
              className="rounded-xl shadow-lg w-full h-auto"
              data-testid="mission-image"
            />
          </div>
          <div>
            <h2 className="text-3xl font-bold text-gray-900 mb-6" data-testid="mission-title">Our Mission</h2>
            <p className="text-lg text-gray-600 mb-6 leading-relaxed" data-testid="mission-statement">
              <strong>To be the bridge between doctors and the healthcare industry.</strong>
            </p>
            <p className="text-gray-600 mb-6 leading-relaxed" data-testid="mission-description-1">
              We believe that meaningful collaboration between healthcare professionals and industry leads to breakthrough innovations, better treatments, and ultimately improved patient care. MedicoActivity serves as the essential connection point where medical expertise meets commercial innovation.
            </p>
            <p className="text-gray-600 leading-relaxed" data-testid="mission-description-2">
              Our platform empowers doctors to extend their impact beyond individual patient care while helping companies access the authentic medical insights they need to develop better products and more effective marketing strategies.
            </p>
          </div>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center mb-20">
          <div className="order-2 lg:order-1">
            <h2 className="text-3xl font-bold text-gray-900 mb-6" data-testid="vision-title">Our Vision</h2>
            <p className="text-lg text-gray-600 mb-6 leading-relaxed" data-testid="vision-statement">
              <strong>Empower collaborations in marketing, clinical research, and product innovation.</strong>
            </p>
            <p className="text-gray-600 mb-6 leading-relaxed" data-testid="vision-description">
              We envision a healthcare ecosystem where collaboration flows seamlessly between clinical practice and industry innovation. Through MedicoActivity, we're creating a future where:
            </p>
            <ul className="space-y-3 text-gray-600">
              <li className="flex items-start space-x-3" data-testid="vision-point-1">
                <Shield className="w-5 h-5 text-health-green-600 mt-1 flex-shrink-0" />
                <span>Medical research accelerates through enhanced industry-physician partnerships</span>
              </li>
              <li className="flex items-start space-x-3" data-testid="vision-point-2">
                <Shield className="w-5 h-5 text-health-green-600 mt-1 flex-shrink-0" />
                <span>Healthcare marketing becomes more authentic and physician-informed</span>
              </li>
              <li className="flex items-start space-x-3" data-testid="vision-point-3">
                <Shield className="w-5 h-5 text-health-green-600 mt-1 flex-shrink-0" />
                <span>Product innovation benefits from direct clinical insights and feedback</span>
              </li>
              <li className="flex items-start space-x-3" data-testid="vision-point-4">
                <Shield className="w-5 h-5 text-health-green-600 mt-1 flex-shrink-0" />
                <span>Doctors find meaningful opportunities to impact healthcare beyond their practice</span>
              </li>
            </ul>
          </div>
          <div className="order-1 lg:order-2">
            <img 
              src="https://images.unsplash.com/photo-1559757148-5c350d0d3c56?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&h=600"
              alt="Healthcare professionals in collaborative meeting" 
              className="rounded-xl shadow-lg w-full h-auto"
              data-testid="vision-image"
            />
          </div>
        </div>

        {/* Values Section */}
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-12" data-testid="values-title">Our Core Values</h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center" data-testid="value-trust">
              <div className="w-16 h-16 bg-medical-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Shield className="w-8 h-8 text-medical-blue-600" />
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-3">Trust & Integrity</h3>
              <p className="text-gray-600">Building authentic relationships based on transparency, ethical practices, and mutual respect between all stakeholders.</p>
            </div>
            
            <div className="text-center" data-testid="value-innovation">
              <div className="w-16 h-16 bg-health-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Zap className="w-8 h-8 text-health-green-600" />
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-3">Innovation</h3>
              <p className="text-gray-600">Driving healthcare forward through collaborative innovation that combines clinical expertise with industry capabilities.</p>
            </div>
            
            <div className="text-center" data-testid="value-patient-focus">
              <div className="w-16 h-16 bg-medical-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Heart className="w-8 h-8 text-medical-blue-600" />
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-3">Patient Focus</h3>
              <p className="text-gray-600">Every collaboration ultimately serves the goal of improving patient outcomes and advancing quality healthcare delivery.</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
