import { ArrowRight, Users, Leaf, Home, Shield, UserCheck, Wrench } from 'lucide-react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import WhatsAppFloat from '@/components/WhatsAppFloat';
import ScrollToTop from '../components/ScrollToTop';
import SEO from '@/components/SEO';

const Services = () => {
  const services = [
    {
      title: 'Manpower Supply',
      description: 'Skilled and reliable workforce for your business needs. We provide trained professionals across various industries with comprehensive background verification, skill assessment, and flexible staffing solutions.',
      icon: <Users className="h-16 w-16 text-corporate-blue" />,
      image: '/images/manpower.jpeg',
      link: '/services/manpower',
      features: ['Skilled Workers', 'Background Verification', 'Flexible Contracts', 'Industry Expertise']
    },
    {
      title: 'Landscaping',
      description: 'Professional garden and outdoor space maintenance services. Creating beautiful, sustainable landscapes for commercial and residential properties with eco-friendly practices and seasonal maintenance plans.',
      icon: <Leaf className="h-16 w-16 text-green-600" />,
      image: '/images/landscaping.jpeg',
      link: '/services/landscaping',
      features: ['Garden Design', 'Maintenance', 'Irrigation Systems', 'Seasonal Care']
    },
    {
      title: 'Housekeeping',
      description: 'Comprehensive cleaning and maintenance services for offices, hospitals, hotels, and residential complexes with trained cleaning professionals, eco-friendly products, and customized cleaning schedules.',
      icon: <Home className="h-16 w-16 text-blue-600" />,
      image: '/images/housekeeping.jpeg',
      link: '/services/housekeeping',
      features: ['Deep Cleaning', 'Regular Maintenance', 'Sanitization', 'Eco-friendly Products']
    },
    {
      title: 'Security',
      description: 'Trained security personnel for your premises. Professional security guards with proper training, certification, and 24/7 monitoring capabilities for complete safety and peace of mind.',
      icon: <Shield className="h-16 w-16 text-red-600" />,
      image: '/images/security.jpeg',
      link: '/services/security',
      features: ['24/7 Security', 'Trained Guards', 'Access Control', 'Emergency Response']
    },
    {
      title: 'Office Boy',
      description: 'Administrative support and office assistance services. Reliable support staff for daily office operations, document handling, and administrative tasks with professional conduct and efficiency.',
      icon: <UserCheck className="h-16 w-16 text-purple-600" />,
      image: '/images/office-boy.jpeg',
      link: '/services/office-boy',
      features: ['Administrative Support', 'Document Handling', 'Office Assistance', 'Professional Conduct']
    },
    {
      title: 'Non-Tech Team',
      description: 'Support staff for various operational needs. Dedicated teams for manufacturing, logistics, warehouse operations, and other non-technical requirements with specialized training.',
      icon: <Wrench className="h-16 w-16 text-orange-600" />,
      image: '/images/non-tech.jpeg',
      link: '/services/non-tech',
      features: ['Operational Support', 'Manufacturing Help', 'Logistics Team', 'Warehouse Operations']
    }
  ];

  const servicesSchema = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    "name": "Manpower & Facility Management Services - SLG Enterprises",
    "url": "https://slg-enterprises.com/services",
    "description": "Explore Sri Laxmi Ganapathi Enterprises services: Manpower Supply, Housekeeping, Landscaping, Security Guard services, and Office boy staffing in Hyderabad.",
    "provider": {
      "@type": "Organization",
      "name": "Sri Laxmi Ganapathi Enterprises",
      "url": "https://slg-enterprises.com"
    }
  };

  return (
    <>
      <SEO 
        title="Manpower Supply & Facility Management Services | Hyderabad"
        description="Comprehensive facility management and workforce supply services by SLG Enterprises. Professional staffing, office assistance, housekeeping, security, and garden care."
        keywords="manpower supply Hyderabad, facility management Telangana, housekeeping staffing, security services company, office helper staffing, operational laborers"
        schemaMarkup={servicesSchema}
      />
      <ScrollToTop />
      <Navigation />
      
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-corporate-blue via-blue-600 to-corporate-blue-dark text-white py-20 overflow-hidden">
        {/* 3D Background Elements */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute -top-40 -right-40 w-80 h-80 bg-white bg-opacity-10 rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute -bottom-40 -left-40 w-96 h-96 bg-blue-400 bg-opacity-20 rounded-full blur-3xl animate-pulse" style={{animationDelay: '2s'}}></div>
        </div>
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center animate-fade-in transform hover:scale-105 transition-transform duration-500">
            <h1 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-white via-blue-100 to-white bg-clip-text text-transparent drop-shadow-2xl">
              Our Services
            </h1>
            <p className="text-xl text-blue-100 max-w-3xl mx-auto leading-relaxed">
              Comprehensive manpower and facility management solutions designed to meet your specific business requirements
            </p>
            <div className="w-24 h-1 bg-gradient-to-r from-white to-blue-200 mx-auto rounded-full mt-6"></div>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-20 bg-gradient-to-br from-gray-50 via-white to-gray-100 relative overflow-hidden">
        {/* 3D Background Elements */}
        <div className="absolute inset-0">
          <div className="absolute top-20 left-10 w-32 h-32 bg-blue-200 bg-opacity-30 rounded-full blur-2xl animate-pulse"></div>
          <div className="absolute bottom-20 right-10 w-40 h-40 bg-green-200 bg-opacity-30 rounded-full blur-2xl animate-pulse" style={{animationDelay: '1s'}}></div>
        </div>
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center mb-16 animate-fade-in">
            <h2 className="text-4xl md:text-5xl font-bold text-corporate-grey-dark mb-6 bg-gradient-to-r from-corporate-blue to-blue-600 bg-clip-text text-transparent">
              Complete Service Portfolio
            </h2>
            <p className="text-lg text-corporate-grey max-w-2xl mx-auto leading-relaxed">
              From skilled manpower to comprehensive facility management, we provide end-to-end solutions
            </p>
            <div className="w-24 h-1 bg-gradient-to-r from-corporate-blue to-blue-600 mx-auto rounded-full mt-4"></div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-8">
            {services.map((service, index) => (
              <Card 
                key={index} 
                className="group hover:shadow-2xl transition-all duration-500 hover:-translate-y-1 overflow-hidden animate-fade-in transform hover:scale-105 hover:rotate-1 bg-white/80 backdrop-blur-sm border-0"
                style={{ 
                  animationDelay: `${index * 0.1}s`,
                  transformStyle: 'preserve-3d'
                }}
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
                    
                    <div className="flex flex-col sm:flex-row gap-3 mt-4">
                      <Button
                        asChild
                        className="flex-1 bg-corporate-blue hover:bg-corporate-blue-dark text-white"
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

      {/* Why Choose Our Services */}
      <section className="py-20 bg-gradient-to-br from-white via-blue-50 to-white relative overflow-hidden">
        {/* 3D Background Elements */}
        <div className="absolute inset-0">
          <div className="absolute top-1/2 left-0 w-64 h-64 bg-blue-100 bg-opacity-40 rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute top-1/2 right-0 w-80 h-80 bg-indigo-100 bg-opacity-40 rounded-full blur-3xl animate-pulse" style={{animationDelay: '1.5s'}}></div>
        </div>
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center mb-16 animate-fade-in">
            <h2 className="text-4xl md:text-5xl font-bold text-corporate-grey-dark mb-6 bg-gradient-to-r from-corporate-blue to-indigo-600 bg-clip-text text-transparent">
              Why Choose Our Services
            </h2>
            <p className="text-lg text-corporate-grey max-w-2xl mx-auto leading-relaxed">
              Experience the difference with our commitment to quality, reliability, and customer satisfaction
            </p>
            <div className="w-24 h-1 bg-gradient-to-r from-corporate-blue to-indigo-600 mx-auto rounded-full mt-4"></div>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="text-center p-8 rounded-2xl hover:shadow-2xl transition-all duration-500 animate-fade-in group bg-white/70 backdrop-blur-sm border border-white/20 hover:border-blue-200/50 transform hover:scale-105 hover:-rotate-1">
              <div className="flex justify-center mb-6 transform group-hover:scale-110 transition-transform duration-300">
                <div className="p-4 bg-gradient-to-br from-corporate-blue to-blue-600 rounded-2xl shadow-lg group-hover:shadow-2xl transition-all duration-300">
                  <Users className="h-10 w-10 text-white" />
                </div>
              </div>
              <h3 className="text-xl font-semibold text-corporate-grey-dark mb-3 group-hover:text-corporate-blue transition-colors duration-300">
                Trained Professionals
              </h3>
              <p className="text-corporate-grey leading-relaxed">
                All our staff undergo rigorous training and background verification
              </p>
            </div>

            <div className="text-center p-8 rounded-2xl hover:shadow-2xl transition-all duration-500 animate-fade-in group bg-white/70 backdrop-blur-sm border border-white/20 hover:border-blue-200/50 transform hover:scale-105 hover:-rotate-1">
              <div className="flex justify-center mb-6 transform group-hover:scale-110 transition-transform duration-300">
                <div className="p-4 bg-gradient-to-br from-corporate-blue to-blue-600 rounded-2xl shadow-lg group-hover:shadow-2xl transition-all duration-300">
                  <Shield className="h-10 w-10 text-white" />
                </div>
              </div>
              <h3 className="text-xl font-semibold text-corporate-grey-dark mb-3 group-hover:text-corporate-blue transition-colors duration-300">
                Quality Assurance
              </h3>
              <p className="text-corporate-grey leading-relaxed">
                Comprehensive quality control and service standards
              </p>
            </div>

            <div className="text-center p-8 rounded-2xl hover:shadow-2xl transition-all duration-500 animate-fade-in group bg-white/70 backdrop-blur-sm border border-white/20 hover:border-blue-200/50 transform hover:scale-105 hover:-rotate-1">
              <div className="flex justify-center mb-6 transform group-hover:scale-110 transition-transform duration-300">
                <div className="p-4 bg-gradient-to-br from-corporate-blue to-blue-600 rounded-2xl shadow-lg group-hover:shadow-2xl transition-all duration-300">
                  <Wrench className="h-10 w-10 text-white" />
                </div>
              </div>
              <h3 className="text-xl font-semibold text-corporate-grey-dark mb-3 group-hover:text-corporate-blue transition-colors duration-300">
                Custom Solutions
              </h3>
              <p className="text-corporate-grey leading-relaxed">
                Tailored service packages to meet your specific needs
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Service Process */}
      <section className="py-20 bg-gradient-to-br from-gray-50 via-white to-gray-100 relative overflow-hidden">
        {/* 3D Background Elements */}
        <div className="absolute inset-0">
          <div className="absolute top-1/4 left-20 w-32 h-32 bg-blue-200 bg-opacity-30 rounded-full blur-2xl animate-pulse"></div>
          <div className="absolute bottom-1/4 right-20 w-40 h-40 bg-green-200 bg-opacity-30 rounded-full blur-2xl animate-pulse" style={{animationDelay: '1s'}}></div>
        </div>
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center mb-16 animate-fade-in">
            <h2 className="text-4xl md:text-5xl font-bold text-corporate-grey-dark mb-6 bg-gradient-to-r from-corporate-blue to-blue-600 bg-clip-text text-transparent">
              Our Proven Service Process
            </h2>
            <p className="text-lg text-corporate-grey max-w-2xl mx-auto leading-relaxed">
              A systematic approach ensuring quality delivery and client satisfaction at every step
            </p>
            <div className="w-24 h-1 bg-gradient-to-r from-corporate-blue to-blue-600 mx-auto rounded-full mt-4"></div>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center group cursor-pointer">
              <div className="relative mb-6">
                <div className="w-20 h-20 bg-gradient-to-br from-corporate-blue to-blue-600 rounded-full flex items-center justify-center mx-auto text-white text-2xl font-bold shadow-lg hover:shadow-2xl transition-all duration-300 hover:scale-105 z-10 relative">
                  1
                </div>
                <div className="absolute -inset-1 bg-gradient-to-r from-blue-100 to-indigo-100 rounded-full blur-sm opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"></div>
              </div>
              <h3 className="text-xl font-semibold text-corporate-grey-dark mb-3 group-hover:text-corporate-blue transition-colors duration-300">
                Initial Consultation
              </h3>
              <p className="text-corporate-grey leading-relaxed">
                Comprehensive needs assessment and requirement analysis to understand your business objectives
              </p>
            </div>

            <div className="text-center group cursor-pointer">
              <div className="relative mb-6">
                <div className="w-20 h-20 bg-gradient-to-br from-corporate-blue to-blue-600 rounded-full flex items-center justify-center mx-auto text-white text-2xl font-bold shadow-lg hover:shadow-2xl transition-all duration-300 hover:scale-105 z-10 relative">
                  2
                </div>
                <div className="absolute -inset-1 bg-gradient-to-r from-blue-100 to-indigo-100 rounded-full blur-sm opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"></div>
              </div>
              <h3 className="text-xl font-semibold text-corporate-grey-dark mb-3 group-hover:text-corporate-blue transition-colors duration-300">
                Strategic Planning
              </h3>
              <p className="text-corporate-grey leading-relaxed">
                Customized service design, resource allocation, and timeline development for optimal outcomes
              </p>
            </div>

            <div className="text-center group cursor-pointer">
              <div className="relative mb-6">
                <div className="w-20 h-20 bg-gradient-to-br from-corporate-blue to-blue-600 rounded-full flex items-center justify-center mx-auto text-white text-2xl font-bold shadow-lg hover:shadow-2xl transition-all duration-300 hover:scale-105 z-10 relative">
                  3
                </div>
                <div className="absolute -inset-1 bg-gradient-to-r from-blue-100 to-indigo-100 rounded-full blur-sm opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"></div>
              </div>
              <h3 className="text-xl font-semibold text-corporate-grey-dark mb-3 group-hover:text-corporate-blue transition-colors duration-300">
                Professional Execution
              </h3>
              <p className="text-corporate-grey leading-relaxed">
                Seamless service delivery with real-time quality monitoring and performance tracking
              </p>
            </div>

            <div className="text-center group cursor-pointer">
              <div className="relative mb-6">
                <div className="w-20 h-20 bg-gradient-to-br from-corporate-blue to-blue-600 rounded-full flex items-center justify-center mx-auto text-white text-2xl font-bold shadow-lg hover:shadow-2xl transition-all duration-300 hover:scale-105 z-10 relative">
                  4
                </div>
                <div className="absolute -inset-1 bg-gradient-to-r from-blue-100 to-indigo-100 rounded-full blur-sm opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"></div>
              </div>
              <h3 className="text-xl font-semibold text-corporate-grey-dark mb-3 group-hover:text-corporate-blue transition-colors duration-300">
                Continuous Support
              </h3>
              <p className="text-corporate-grey leading-relaxed">
                24/7 dedicated support, regular maintenance, and continuous improvement initiatives
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Industries We Serve */}
      <section className="py-20 bg-gradient-to-br from-white via-blue-50 to-white relative overflow-hidden">
        {/* 3D Background Elements */}
        <div className="absolute inset-0">
          <div className="absolute top-1/2 left-0 w-64 h-64 bg-blue-100 bg-opacity-40 rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute top-1/2 right-0 w-80 h-80 bg-indigo-100 bg-opacity-40 rounded-full blur-3xl animate-pulse" style={{animationDelay: '1.5s'}}></div>
        </div>
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center mb-16 animate-fade-in">
            <h2 className="text-4xl md:text-5xl font-bold text-corporate-grey-dark mb-6 bg-gradient-to-r from-corporate-blue to-indigo-600 bg-clip-text text-transparent">
              Industries We Serve
            </h2>
            <p className="text-lg text-corporate-grey max-w-2xl mx-auto leading-relaxed">
              We provide comprehensive solutions across diverse industry sectors
            </p>
            <div className="w-24 h-1 bg-gradient-to-r from-corporate-blue to-indigo-600 mx-auto rounded-full mt-4"></div>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-500 group transform hover:scale-105 hover:-rotate-1 border border-gray-100">
              <div className="flex items-center mb-4">
                <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mr-4 group-hover:bg-blue-200 transition-colors duration-300">
                  <Users className="h-6 w-6 text-corporate-blue" />
                </div>
                <h3 className="text-xl font-semibold text-corporate-grey-dark group-hover:text-corporate-blue transition-colors duration-300">
                  Healthcare
                </h3>
              </div>
              <p className="text-corporate-grey leading-relaxed">
                Hospitals, clinics, and medical facilities with specialized staff requirements
              </p>
            </div>

            <div className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-500 group transform hover:scale-105 hover:-rotate-1 border border-gray-100">
              <div className="flex items-center mb-4">
                <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center mr-4 group-hover:bg-green-200 transition-colors duration-300">
                  <Leaf className="h-6 w-6 text-green-600" />
                </div>
                <h3 className="text-xl font-semibold text-corporate-grey-dark group-hover:text-corporate-blue transition-colors duration-300">
                  Manufacturing
                </h3>
              </div>
              <p className="text-corporate-grey leading-relaxed">
                Industrial facilities and manufacturing units requiring skilled manpower
              </p>
            </div>

            <div className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-500 group transform hover:scale-105 hover:-rotate-1 border border-gray-100">
              <div className="flex items-center mb-4">
                <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center mr-4 group-hover:bg-purple-200 transition-colors duration-300">
                  <Home className="h-6 w-6 text-purple-600" />
                </div>
                <h3 className="text-xl font-semibold text-corporate-grey-dark group-hover:text-corporate-blue transition-colors duration-300">
                  Real Estate
                </h3>
              </div>
              <p className="text-corporate-grey leading-relaxed">
                Commercial and residential properties requiring maintenance and security
              </p>
            </div>

            <div className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-500 group transform hover:scale-105 hover:-rotate-1 border border-gray-100">
              <div className="flex items-center mb-4">
                <div className="w-12 h-12 bg-orange-100 rounded-lg flex items-center justify-center mr-4 group-hover:bg-orange-200 transition-colors duration-300">
                  <Wrench className="h-6 w-6 text-orange-600" />
                </div>
                <h3 className="text-xl font-semibold text-corporate-grey-dark group-hover:text-corporate-blue transition-colors duration-300">
                  Technology
                </h3>
              </div>
              <p className="text-corporate-grey leading-relaxed">
                IT companies and tech facilities with specialized support requirements
              </p>
            </div>

            <div className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-500 group transform hover:scale-105 hover:-rotate-1 border border-gray-100">
              <div className="flex items-center mb-4">
                <div className="w-12 h-12 bg-red-100 rounded-lg flex items-center justify-center mr-4 group-hover:bg-red-200 transition-colors duration-300">
                  <Shield className="h-6 w-6 text-red-600" />
                </div>
                <h3 className="text-xl font-semibold text-corporate-grey-dark group-hover:text-corporate-blue transition-colors duration-300">
                  Infrastructure
                </h3>
              </div>
              <p className="text-corporate-grey leading-relaxed">
                Construction and infrastructure projects requiring diverse manpower
              </p>
            </div>

            <div className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-500 group transform hover:scale-105 hover:-rotate-1 border border-gray-100">
              <div className="flex items-center mb-4">
                <div className="w-12 h-12 bg-indigo-100 rounded-lg flex items-center justify-center mr-4 group-hover:bg-indigo-200 transition-colors duration-300">
                  <UserCheck className="h-6 w-6 text-indigo-600" />
                </div>
                <h3 className="text-xl font-semibold text-corporate-grey-dark group-hover:text-corporate-blue transition-colors duration-300">
                  Corporate
                </h3>
              </div>
              <p className="text-corporate-grey leading-relaxed">
                Office environments and corporate facilities with administrative needs
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-20 bg-gradient-to-br from-corporate-blue via-blue-600 to-indigo-700 text-white relative overflow-hidden">
        {/* 3D Background Elements */}
        <div className="absolute inset-0">
          <div className="absolute top-0 left-1/4 w-96 h-96 bg-white bg-opacity-10 rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute bottom-0 right-1/4 w-80 h-80 bg-blue-400 bg-opacity-20 rounded-full blur-3xl animate-pulse" style={{animationDelay: '1s'}}></div>
        </div>
        
        <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="animate-fade-in">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-white via-blue-100 to-white bg-clip-text text-transparent drop-shadow-2xl">
              Need a Custom Solution?
            </h2>
            <p className="text-xl text-blue-100 mb-10 leading-relaxed max-w-2xl mx-auto">
              We can create tailored service packages to meet your specific requirements
            </p>
            <div className="flex flex-col sm:flex-row gap-6 justify-center">
              <Button
                asChild
                size="lg"
                className="bg-white text-corporate-blue hover:bg-gray-100 font-semibold transform hover:scale-105 hover:shadow-2xl transition-all duration-300 rounded-xl shadow-lg px-8 py-4"
              >
                <Link to="/contact">
                  Discuss Your Needs <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="bg-white text-corporate-blue hover:bg-gray-100 font-semibold transform hover:scale-105 hover:shadow-2xl transition-all duration-300 rounded-xl shadow-lg px-8 py-4 border-2"
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
