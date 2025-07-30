import { ArrowRight, Users, Leaf, Home, Shield, UserCheck, Wrench } from 'lucide-react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import WhatsAppFloat from '@/components/WhatsAppFloat';
import ScrollToTop from '../components/ScrollToTop';

const Services = () => {
  const services = [
    {
      title: 'Manpower Supply',
      description: 'Skilled and reliable workforce for your business needs. We provide trained professionals across various industries with comprehensive background verification.',
      icon: <Users className="h-16 w-16 text-corporate-blue" />,
      image: '/images/manpower.jpeg',
      link: '/services/manpower',
      features: ['Skilled Workers', 'Background Verification', 'Flexible Contracts']
    },
    {
      title: 'Landscaping',
      description: 'Professional garden and outdoor space maintenance services. Creating beautiful, sustainable landscapes for commercial and residential properties.',
      icon: <Leaf className="h-16 w-16 text-green-600" />,
      image: '/images/landscaping.jpeg',
      link: '/services/landscaping',
      features: ['Garden Design', 'Maintenance', 'Irrigation Systems']
    },
    {
      title: 'Housekeeping',
      description: 'Comprehensive cleaning and maintenance services for offices, hospitals, hotels, and residential complexes with trained cleaning professionals.',
      icon: <Home className="h-16 w-16 text-blue-600" />,
      image: '/images/housekeeping.jpeg',
      link: '/services/housekeeping',
      features: ['Deep Cleaning', 'Regular Maintenance', 'Sanitization']
    },
    {
      title: 'Security',
      description: 'Trained security personnel for your premises. Professional security guards with proper training and certification for complete safety.',
      icon: <Shield className="h-16 w-16 text-red-600" />,
      image: '/images/security.jpeg',
      link: '/services/security',
      features: ['24/7 Security', 'Trained Guards', 'Access Control']
    },
    {
      title: 'Office Boy',
      description: 'Administrative support and office assistance services. Reliable support staff for daily office operations and administrative tasks.',
      icon: <UserCheck className="h-16 w-16 text-purple-600" />,
      image: '/images/office-boy.jpeg',
      link: '/services/office-boy',
      features: ['Administrative Support', 'Document Handling', 'Office Assistance']
    },
    {
      title: 'Non-Tech Team',
      description: 'Support staff for various operational needs. Dedicated teams for manufacturing, logistics, and other non-technical requirements.',
      icon: <Wrench className="h-16 w-16 text-orange-600" />,
      image: '/images/non-tech.jpeg',
      link: '/services/non-tech',
      features: ['Operational Support', 'Manufacturing Help', 'Logistics Team']
    }
  ];

  return (
    <>
      <ScrollToTop />
      <Navigation />
      
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-corporate-blue to-corporate-blue-dark text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center animate-fade-in">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">Our Services</h1>
            <p className="text-xl text-blue-100 max-w-3xl mx-auto">
              Comprehensive manpower and facility management solutions designed to meet your specific business requirements
            </p>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-20 bg-corporate-grey-light">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16 animate-fade-in">
            <h2 className="text-3xl md:text-4xl font-bold text-corporate-grey-dark mb-4">
              Complete Service Portfolio
            </h2>
            <p className="text-lg text-corporate-grey max-w-2xl mx-auto">
              From skilled manpower to comprehensive facility management, we provide end-to-end solutions
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-8">
            {services.map((service, index) => (
              <Card 
                key={index} 
                className="group hover:shadow-2xl transition-all duration-500 hover:-translate-y-1 overflow-hidden animate-fade-in"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <CardContent className="p-0">
                  <div className="relative overflow-hidden">
                    <img
                      src={service.image}
                      alt={service.title}
                      className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-black bg-opacity-40 group-hover:bg-opacity-30 transition-all duration-300"></div>
                    <div className="absolute top-4 left-4">
                      <div className="bg-white bg-opacity-90 p-3 rounded-lg">
                        {service.icon}
                      </div>
                    </div>
                  </div>
                  
                  <div className="p-8">
                    <h3 className="text-2xl font-bold text-corporate-grey-dark mb-3 group-hover:text-corporate-blue transition-colors">
                      {service.title}
                    </h3>
                    
                    <p className="text-corporate-grey mb-4 line-clamp-3">
                      {service.description}
                    </p>
                    
                    <div className="mb-6">
                      <h4 className="font-semibold text-corporate-grey-dark mb-2">Key Features:</h4>
                      <ul className="space-y-1">
                        {service.features.map((feature, idx) => (
                          <li key={idx} className="flex items-center text-sm text-corporate-grey">
                            <ArrowRight className="h-3 w-3 text-corporate-blue mr-2" />
                            {feature}
                          </li>
                        ))}
                      </ul>
                    </div>
                    
                    <div className="flex flex-col sm:flex-row gap-3">
                      <Button
                        asChild
                        className="flex-1 bg-corporate-blue hover:bg-corporate-blue-dark"
                      >
                        <Link to={service.link}>
                          Learn More <ArrowRight className="ml-2 h-4 w-4" />
                        </Link>
                      </Button>
                      
                      <Button
                        variant="outline"
                        className="flex-1 border-green-500 text-green-600 hover:bg-green-50"
                        onClick={() => window.open(`https://wa.me/918106206381?text=I'm interested in ${service.title} services. Please provide more details.`, '_blank')}
                      >
                        WhatsApp
                      </Button>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-20 bg-corporate-blue text-white">
        <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          <div className="animate-fade-in">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Need a Custom Solution?
            </h2>
            <p className="text-xl text-blue-100 mb-8">
              We can create tailored service packages to meet your specific requirements
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button
                asChild
                size="lg"
                className="bg-white text-corporate-blue hover:bg-gray-100 font-semibold"
              >
                <Link to="/contact">
                  Discuss Your Needs <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="bg-white text-corporate-blue hover:bg-gray-100 font-semibold"
                onClick={() => window.open('https://wa.me/918106206381?text=I need a custom service solution. Can we discuss my requirements?', '_blank')}
              >
                WhatsApp Us
              </Button>
            </div>
          </div>
        </div>
      </section>

      <Footer />
      <WhatsAppFloat />
    </>
  );
};

export default Services;
