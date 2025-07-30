import { useParams } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';
import { CheckCircle, ArrowLeft, MessageCircle } from 'lucide-react';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import ScrollToTop from '../components/ScrollToTop';

const serviceData = {
  manpower: {
    title: 'Manpower Supply',
    description: 'Skilled and reliable workforce for your business needs. We provide trained professionals across various industries with comprehensive background verification.',
    image: '/images/manpower.jpeg',
    features: ['Skilled Workers', 'Background Verification', 'Flexible Contracts', '24/7 Support']
  },
  landscaping: {
    title: 'Landscaping',
    description: 'Professional garden and outdoor space maintenance services. Creating beautiful, sustainable landscapes for commercial and residential properties.',
    image: '/images/landscaping.jpeg',
    features: ['Garden Design', 'Maintenance', 'Irrigation Systems','More']  
  },
  housekeeping: {
    title: 'Housekeeping',
    description: 'Comprehensive cleaning and maintenance services for offices, hospitals, hotels, and residential complexes with trained cleaning professionals.',
    image: '/images/housekeeping.jpeg',
    features: ['Deep Cleaning', 'Regular Maintenance', 'Sanitization','More']
  },
  security: {
    title: 'Security',
    description: 'Trained security personnel for your premises. Professional security guards with proper training and certification for complete safety.',
    image: '/images/security.jpeg',
    features: ['24/7 Security', 'Trained Guards', 'Access Control','More']
  },
  'office-boy': {
    title: 'Office Boy',
    description: 'Administrative support and office assistance services. Reliable support staff for daily office operations and administrative tasks.',
    image: '/images/office-boy.jpeg',
    features: ['Administrative Support', 'Document Handling', 'Office Assistance','More']
  },
  'non-tech': {
    title: 'Non-Tech Team',
    description: 'Support staff for various operational needs. Dedicated teams for manufacturing, logistics, and other non-technical requirements.',
    image: '/images/non-tech.jpeg',
    features: ['Operational Support', 'Manufacturing Help', 'Logistics Team','More']
  },
};

const ServiceDetails = () => {
  const { serviceId } = useParams();
  const service = serviceId ? serviceData[serviceId] : null;

  if (!service) {
    return (
      <div className="min-h-screen bg-gray-50 py-20 px-4 flex flex-col items-center justify-center">
        <Navigation />
        <div className="bg-white rounded-xl shadow-lg p-8 max-w-lg w-full text-center">
          <ArrowLeft className="mx-auto mb-4 text-corporate-blue" size={32} />
          <h1 className="text-3xl font-bold text-corporate-blue mb-4">Service Not Found</h1>
          <p className="text-lg text-corporate-grey mb-6">The requested service does not exist.</p>
          <Link to="/services">
            <Button className="w-full">Back to Services</Button>
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50 py-10 px-2 flex flex-col items-center">
      <ScrollToTop />
      <Navigation />
      {/* Banner */}
      <div className="w-full max-w-3xl rounded-t-2xl bg-gradient-to-r from-corporate-blue to-blue-400 shadow-lg mb-0">
        <h1 className="text-4xl md:text-5xl font-bold text-white py-10 px-6 text-center drop-shadow-lg">{service.title}</h1>
      </div>
      {/* Card */}
      <div className="w-full max-w-3xl bg-white rounded-b-2xl shadow-lg p-8 md:p-14 -mt-2 flex flex-col md:flex-row gap-10 items-center min-h-[480px]">
        <img src={service.image} alt={service.title} className="rounded-xl shadow-md w-full max-w-xs h-64 object-cover mb-4 md:mb-0" />
        <div className="flex-1 flex flex-col items-center md:items-start">
          <p className="text-lg text-corporate-grey mb-8 text-center md:text-left">{service.description}</p>
          {/* Features */}
          {service.features && (
            <ul className="mb-8 grid grid-cols-1 sm:grid-cols-2 gap-3 w-full">
              {service.features.map((feature, idx) => (
                <li key={idx} className="flex items-center gap-2 text-green-700 font-medium">
                  <CheckCircle className="w-5 h-5 text-green-500" />
                  {feature}
                </li>
              ))}
            </ul>
          )}
          <Button
            size="lg"
            variant="outline"
            className="bg-green-500 text-white hover:bg-green-600 font-semibold flex items-center gap-2 w-full justify-center shadow-md text-lg mb-4"
            onClick={() => window.open('https://wa.me/918106206381', '_blank')}
          >
            <MessageCircle className="w-6 h-6" /> Contact on WhatsApp
          </Button>
        </div>
      </div>

      {/* Why Choose This Service Section */}
      <div className="w-full max-w-3xl bg-white rounded-2xl shadow-lg mt-10 p-8 md:p-12 flex flex-col items-center">
        <h2 className="text-2xl md:text-3xl font-bold text-corporate-blue mb-4 text-center">Why Choose {service.title}?</h2>
        <ul className="text-lg text-corporate-grey mb-4 grid grid-cols-1 sm:grid-cols-2 gap-3 w-full">
          <li className="flex items-center gap-2"><CheckCircle className="w-5 h-5 text-blue-500" /> Reliable and experienced professionals</li>
          <li className="flex items-center gap-2"><CheckCircle className="w-5 h-5 text-blue-500" /> Tailored solutions for your needs</li>
          <li className="flex items-center gap-2"><CheckCircle className="w-5 h-5 text-blue-500" /> Excellent customer support</li>
          <li className="flex items-center gap-2"><CheckCircle className="w-5 h-5 text-blue-500" /> Proven track record of client satisfaction</li>
        </ul>
      </div>

      {/* Testimonial Section */}
      <div className="w-full max-w-3xl bg-gradient-to-r from-blue-100 to-blue-50 rounded-2xl shadow-lg mt-10 p-8 md:p-12 flex flex-col items-center">
        <h3 className="text-xl md:text-2xl font-semibold text-corporate-blue mb-4 text-center">What Our Clients Say</h3>
        <blockquote className="italic text-corporate-grey text-lg max-w-2xl text-center mb-2">“SLG Enterprises provided us with outstanding service and reliable staff. Their professionalism and attention to detail exceeded our expectations!”</blockquote>
        <span className="text-corporate-blue font-bold">— Rajesh Kumar, Premier Energies</span>
      </div>

      {/* Trusted Clients Logos Row */}
      <div className="w-full max-w-3xl bg-white rounded-2xl shadow-lg mt-10 p-8 flex flex-col items-center">
        <h4 className="text-lg font-semibold text-corporate-blue mb-4">Trusted by Industry Leaders</h4>
        <div className="flex flex-wrap justify-center gap-6">
          <img src="/images/housekeeping.jpeg" alt="Client 1" className="w-16 h-16 rounded-full object-cover shadow" />
          <img src="/images/landscaping.jpeg" alt="Client 2" className="w-16 h-16 rounded-full object-cover shadow" />
          <img src="/images/manpower.jpeg" alt="Client 3" className="w-16 h-16 rounded-full object-cover shadow" />
          <img src="/images/security.jpeg" alt="Client 4" className="w-16 h-16 rounded-full object-cover shadow" />
        </div>
      </div>

      {/* Footer */}
      <div className="w-full mt-16">
        <Footer />
      </div>
    </div>
  );
};

export default ServiceDetails;
