import { X, Linkedin, Facebook } from "lucide-react";
import { Link } from "wouter";

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-4 gap-8">
          <div className="col-span-2">
            <div className="flex items-center mb-4">
              <svg
                className="h-8 w-8 text-medical-blue-500 mr-2"
                fill="currentColor"
                viewBox="0 0 24 24"
              >
                <path d="M12 2L13.09 8.26L22 9L13.09 9.74L12 16L10.91 9.74L2 9L10.91 8.26L12 2Z" />
              </svg>
              <span className="text-xl font-bold">MedicoActivity</span>
            </div>
            <p className="text-gray-300 mb-4 max-w-md">
              Connecting healthcare industry and doctors for meaningful
              marketing, research, and collaboration opportunities that advance
              patient care.
            </p>
            <div className="flex space-x-4">
              <a
                href="#"
                className="text-gray-400 hover:text-white transition-colors"
                data-testid="social-twitter"
              >
                <X className="w-5 h-5" />
              </a>
              <a
                href="https://www.linkedin.com/in/medico-activity-b97831369"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-white transition-colors"
                data-testid="social-linkedin"
              >
                <Linkedin className="w-5 h-5" />
              </a>
              <a
                href="#"
                className="text-gray-400 hover:text-white transition-colors"
                data-testid="social-facebook"
              >
                <Facebook className="w-5 h-5" />
              </a>
            </div>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link
                  href="/"
                  className="text-gray-300 hover:text-white transition-colors"
                  data-testid="footer-link-home"
                >
                  Home
                </Link>
              </li>
              <li>
                <Link
                  href="/companies"
                  className="text-gray-300 hover:text-white transition-colors"
                  data-testid="footer-link-companies"
                >
                  For Companies
                </Link>
              </li>
              <li>
                <Link
                  href="/doctors"
                  className="text-gray-300 hover:text-white transition-colors"
                  data-testid="footer-link-doctors"
                >
                  For Doctors
                </Link>
              </li>
              <li>
                <Link
                  href="/about"
                  className="text-gray-300 hover:text-white transition-colors"
                  data-testid="footer-link-about"
                >
                  About Us
                </Link>
              </li>
              <li>
                <Link
                  href="/contact"
                  className="text-gray-300 hover:text-white transition-colors"
                  data-testid="footer-link-contact"
                >
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-4">Legal</h3>
            <ul className="space-y-2">
              <li>
                <a
                  href="#"
                  className="text-gray-300 hover:text-white transition-colors"
                  data-testid="footer-link-privacy"
                >
                  Privacy Policy
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-gray-300 hover:text-white transition-colors"
                  data-testid="footer-link-terms"
                >
                  Terms of Service
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-gray-300 hover:text-white transition-colors"
                  data-testid="footer-link-cookies"
                >
                  Cookie Policy
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-gray-300 hover:text-white transition-colors"
                  data-testid="footer-link-compliance"
                >
                  Compliance
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-700 mt-8 pt-8 text-center">
          <p className="text-gray-300" data-testid="copyright-text">
            © 2024 MedicoActivity. All rights reserved. | Bridging Healthcare
            Excellence
          </p>
        </div>
      </div>
    </footer>
  );
}
