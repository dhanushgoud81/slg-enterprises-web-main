
import { Mail, MapPin, Phone } from 'lucide-react';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className="bg-corporate-grey-dark text-white mt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid md:grid-cols-4 gap-8">
          <div className="md:col-span-2">
            <div className="flex items-center space-x-3 mb-4">
              <div className="w-16 h-16 bg-white rounded-lg flex items-center justify-center shadow-lg">
                <img 
                  src="/images/companylogo.png" 
                  alt="SLG Enterprises Logo" 
                  className="w-14 h-14 object-contain"
                />
              </div>
              <span className="font-bold text-xl">Sri Laxmi Ganapathi Enterprises</span>
            </div>
            <p className="text-gray-300 mb-4 max-w-md">
              Reliable manpower and maintenance services since 2015. We provide comprehensive solutions for all your staffing and facility management needs.
            </p>
            <div className="space-y-2">
              <div className="flex items-center space-x-2">
                <Phone size={16} className="text-corporate-blue" />
                <span>8106206381 / 9676621758</span>
              </div>
              <div className="flex items-center space-x-2">
                <Mail size={16} className="text-corporate-blue" />
                <span>srilaxmiganapathi80960@gmail.com</span>
              </div>
              <div className="flex items-center space-x-2">
                <MapPin size={16} className="text-corporate-blue" />
                <span>Hyderabad, Telangana</span>
              </div>
            </div>
          </div>

          <div>
            <h3 className="font-semibold text-lg mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li><Link to="/" className="text-gray-300 hover:text-corporate-blue transition-colors">Home</Link></li>
              <li><Link to="/about" className="text-gray-300 hover:text-corporate-blue transition-colors">About Us</Link></li>
              <li><Link to="/services" className="text-gray-300 hover:text-corporate-blue transition-colors">Services</Link></li>
              <li><Link to="/clients" className="text-gray-300 hover:text-corporate-blue transition-colors">Clients</Link></li>
              <li><Link to="/contact" className="text-gray-300 hover:text-corporate-blue transition-colors">Contact</Link></li>
            </ul>
          </div>

          <div>
            <h3 className="font-semibold text-lg mb-4">Services</h3>
            <ul className="space-y-2">
              <li><Link to="/services/manpower" className="text-gray-300 hover:text-corporate-blue transition-colors">Manpower Supply</Link></li>
              <li><Link to="/services/landscaping" className="text-gray-300 hover:text-corporate-blue transition-colors">Landscaping</Link></li>
              <li><Link to="/services/housekeeping" className="text-gray-300 hover:text-corporate-blue transition-colors">Housekeeping</Link></li>
              <li><Link to="/services/security" className="text-gray-300 hover:text-corporate-blue transition-colors">Security</Link></li>
              <li><Link to="/services/office-boy" className="text-gray-300 hover:text-corporate-blue transition-colors">Office Boy</Link></li>
              <li><Link to="/services/non-tech" className="text-gray-300 hover:text-corporate-blue transition-colors">Non-Tech Team</Link></li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-600 mt-8 pt-8 text-center">
          <p className="text-gray-300">
            &copy; 2024 Sri Laxmi Ganapathi Enterprises. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
