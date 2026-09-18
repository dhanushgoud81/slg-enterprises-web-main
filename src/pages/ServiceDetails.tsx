import React from 'react';
import { useParams } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';
import { CheckCircle, ArrowLeft, MessageCircle, Building2, Users, Clock, Shield, Award } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import ScrollToTop from '../components/ScrollToTop';
import SEO from '@/components/SEO';

const serviceData = {
  manpower: {
    title: 'Manpower Supply',
    description: 'Premium skilled workforce solutions with verified backgrounds and specialized training. We deliver exceptional professionals across diverse industries with comprehensive screening, skill assessment, and flexible staffing options.',
    image: '/images/manpower.jpeg',
    features: ['Expert Professionals', 'Comprehensive Screening', 'Flexible Solutions', 'Industry Specialization', '24/7 Support'],
    detailedDescription: 'Our premium manpower supply service transforms your staffing challenges into competitive advantages. We provide meticulously screened, industry-trained professionals who seamlessly integrate into your operations, driving productivity and excellence.',
    benefits: [
      'Accelerated hiring with 70% faster onboarding',
      'Access to pre-vetted, industry-ready professionals',
      'Scalable staffing solutions for business growth',
      'Comprehensive background verification and skill assessment',
      'Continuous performance monitoring and support'
    ],
    industries: ['Manufacturing', 'Healthcare', 'Technology', 'Retail', 'Logistics', 'Construction'],
    testimonial: {
      quote: "SLG Enterprises has revolutionized our manpower strategy. Their exceptional professionals and streamlined processes have increased our operational efficiency by 40% while reducing hiring costs significantly.",
      author: "Rajesh Kumar",
      position: "HR Manager",
      company: "Premier Energies"
    }
  },
  landscaping: {
    title: 'Landscaping',
    description: 'Professional garden and outdoor space maintenance services. Creating beautiful, sustainable landscapes for commercial and residential properties with eco-friendly practices and seasonal maintenance plans.',
    image: '/images/landscaping.jpeg',
    features: ['Garden Design', 'Maintenance', 'Irrigation Systems', 'Seasonal Care', 'Eco-friendly Practices'],
    detailedDescription: 'Transform your outdoor spaces with our comprehensive landscaping services. From initial design to ongoing maintenance, we create and maintain beautiful, sustainable landscapes that enhance your property value.',
    benefits: [
      'Professional landscape design',
      'Regular maintenance schedules',
      'Eco-friendly practices',
      'Seasonal care programs',
      'Irrigation system management'
    ],
    industries: ['Commercial Properties', 'Residential Complexes', 'Hotels', 'Corporate Offices', 'Healthcare Facilities'],
    testimonial: {
      quote: "The landscaping services provided by SLG are exceptional. Their attention to detail and eco-friendly approach has transformed our property.",
      author: "Priya Sharma",
      position: "Facility Manager",
      company: "MGRM Medicare"
    }
  },
  housekeeping: {
    title: 'Housekeeping',
    description: 'Comprehensive cleaning and maintenance services for offices, hospitals, hotels, and residential complexes with trained cleaning professionals, eco-friendly products, and customized cleaning schedules.',
    image: '/images/housekeeping.jpeg',
    features: ['Deep Cleaning', 'Regular Maintenance', 'Sanitization', 'Eco-friendly Products', 'Customized Schedules'],
    detailedDescription: 'Maintain pristine environments with our professional housekeeping services. Our trained staff uses eco-friendly products and follows strict protocols to ensure the highest standards of cleanliness and hygiene.',
    benefits: [
      'Professional cleaning staff',
      'Eco-friendly cleaning products',
      'Customized cleaning schedules',
      'Specialized sanitization',
      'Quality assurance programs'
    ],
    industries: ['Healthcare', 'Hotels', 'Corporate Offices', 'Educational Institutions', 'Residential Complexes'],
    testimonial: {
      quote: "The housekeeping and maintenance services provided by SLG are exceptional. Their attention to detail and reliability make them an invaluable partner.",
      author: "Anil Reddy",
      position: "Operations Director",
      company: "Multisorb Technologies"
    }
  },
  security: {
    title: 'Security',
    description: 'Trained security personnel for your premises. Professional security guards with proper training, certification, and 24/7 monitoring capabilities for complete safety and peace of mind.',
    image: '/images/security.jpeg',
    features: ['24/7 Security', 'Trained Guards', 'Access Control', 'Emergency Response', 'Monitoring Systems'],
    detailedDescription: 'Ensure the safety and security of your premises with our professional security services. Our trained guards are equipped with the latest security protocols and provide round-the-clock protection.',
    benefits: [
      '24/7 security coverage',
      'Trained and certified guards',
      'Access control systems',
      'Emergency response protocols',
      'Regular security audits'
    ],
    industries: ['Corporate Offices', 'Manufacturing Units', 'Healthcare Facilities', 'Educational Institutions', 'Residential Complexes'],
    testimonial: {
      quote: "SLG's security services have provided us with peace of mind. Their professional guards and quick response times are exceptional.",
      author: "Suresh Kumar",
      position: "Security Manager",
      company: "Leverage Science Tech"
    }
  },
  'office-boy': {
    title: 'Office Boy',
    description: 'Administrative support and office assistance services. Reliable support staff for daily office operations, document handling, and administrative tasks with professional conduct and efficiency.',
    image: '/images/office-boy.jpeg',
    features: ['Administrative Support', 'Document Handling', 'Office Assistance', 'Professional Conduct', 'Efficient Service'],
    detailedDescription: 'Streamline your office operations with our professional office support services. Our trained staff handles various administrative tasks efficiently, allowing your core team to focus on business priorities.',
    benefits: [
      'Professional administrative support',
      'Document handling and filing',
      'Office maintenance assistance',
      'Professional conduct and etiquette',
      'Flexible scheduling options'
    ],
    industries: ['Corporate Offices', 'Educational Institutions', 'Healthcare Facilities', 'Legal Firms', 'Financial Institutions'],
    testimonial: {
      quote: "The office support staff from SLG are professional and efficient. They've significantly improved our office operations.",
      author: "Meera Patel",
      position: "Office Manager",
      company: "Ramky Group"
    }
  },
  'non-tech': {
    title: 'Non-Tech Team',
    description: 'Support staff for various operational needs. Dedicated teams for manufacturing, logistics, warehouse operations, and other non-technical requirements with specialized training.',
    image: '/images/non-tech.jpeg',
    features: ['Operational Support', 'Manufacturing Help', 'Logistics Team', 'Warehouse Operations', 'Specialized Training'],
    detailedDescription: 'Our non-tech team provides essential support for manufacturing, logistics, and operational activities. These skilled workers are trained in specific industry requirements and safety protocols to ensure efficient operations.',
    benefits: [
      'Specialized training for specific roles',
      'Safety protocol compliance',
      'Operational efficiency',
      'Flexible workforce solutions',
      'Quality control support'
    ],
    industries: ['Manufacturing', 'Logistics', 'Warehousing', 'Construction', 'Agriculture', 'Textiles'],
    testimonial: {
      quote: "SLG's non-tech team has been instrumental in our manufacturing operations. Their specialized training and dedication are outstanding.",
      author: "Vikram Singh",
      position: "Production Manager",
      company: "Premier Energies"
    }
  },
};

const clients = [
  { 
    name: 'Premier Energies', 
    industry: 'Solar Energy',
    logo: '/images/clients%20logos/premier-energieslogo.png'
  },
  { 
    name: 'Ramky Group', 
    industry: 'Infrastructure & Waste Management',
    logo: '/images/clients%20logos/Ramk_group.png'
  },
  { 
    name: 'MGRM Medicare', 
    industry: 'Healthcare & Pharmaceuticals',
    logo: '/images/clients%20logos/MGRM%20Medicare%20ltd.png'
  },
  { 
    name: 'Multisorb Technologies', 
    industry: 'Technology & Manufacturing',
    logo: '/images/clients%20logos/multisorb-filtration-group-logo.png'
  },
  { 
    name: 'Leverage Science Tech', 
    industry: 'Scientific Equipment & Research',
    logo: '/placeholder.svg'
  }
];

const ServiceDetails = () => {
  const { serviceId } = useParams();
  const service = serviceId ? serviceData[serviceId] : null;

  // Add custom CSS for scrolling animation
  React.useEffect(() => {
    const style = document.createElement('style');
    style.textContent = `
      @keyframes scroll {
        0% { transform: translateX(0); }
        100% { transform: translateX(-50%); }
      }
      .animate-scroll {
        animation: scroll 20s linear infinite;
      }
      .animate-scroll:hover {
        animation-play-state: paused;
      }
    `;
    document.head.appendChild(style);
    
    return () => {
      document.head.removeChild(style);
    };
  }, []);

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

  const schemaMarkup = service ? {
    "@context": "https://schema.org",
    "@type": "Service",
    "name": `${service.title} Services`,
    "serviceType": service.title,
    "description": service.description,
    "provider": {
      "@type": "Organization",
      "name": "Sri Laxmi Ganapathi Enterprises",
      "url": "https://slg-enterprises.com",
      "logo": "https://slg-enterprises.com/favicon.ico"
    },
    "areaServed": [
      {
        "@type": "AdministrativeArea",
        "name": "Hyderabad"
      },
      {
        "@type": "AdministrativeArea",
        "name": "Telangana"
      }
    ],
    "offers": {
      "@type": "Offer",
      "priceCurrency": "INR",
      "price": "Contact for pricing",
      "availability": "https://schema.org/InStock"
    }
  } : undefined;

  return (
    <>
      <SEO 
        title={`${service.title} Services in Hyderabad | SLG Enterprises`}
        description={`Professional ${service.title.toLowerCase()} services in Hyderabad and Telangana by Sri Laxmi Ganapathi Enterprises. ${service.features.join(', ')}.`}
        keywords={`${service.title.toLowerCase()} Hyderabad, ${service.title.toLowerCase()} supply Telangana, professional ${service.title.toLowerCase()}, staffing agency`}
        schemaMarkup={schemaMarkup}
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
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="animate-fade-in transform hover:scale-105 transition-transform duration-500">
              <h1 className="text-4xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-white via-blue-100 to-white bg-clip-text text-transparent drop-shadow-2xl">
                {service.title}
              </h1>
              <p className="text-xl md:text-2xl mb-4 text-blue-100 font-light">
                Professional Solutions for Your Business
              </p>
              <p className="text-lg mb-8 text-blue-200 max-w-lg leading-relaxed">
                {service.description}
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button
                  size="lg"
                  className="bg-white text-corporate-blue hover:bg-gray-100 font-semibold transform hover:scale-105 hover:shadow-2xl transition-all duration-300 rounded-xl"
                  onClick={() => window.open('https://wa.me/918106206381', '_blank')}
                >
                  <MessageCircle className="ml-2 h-5 w-5" />
                  Get Quote on WhatsApp
                </Button>
                <Link to="/services">
                  <Button
                    size="lg"
                    variant="outline"
                    className="border-white text-corporate-blue hover:bg-white hover:text-corporate-blue font-semibold transform hover:scale-105 transition-all duration-300 rounded-xl"
                  >
                    View All Services
                  </Button>
                </Link>
              </div>
            </div>
            <div className="relative group">
              <img 
                src={service.image} 
                alt={service.title} 
                className="rounded-2xl shadow-2xl w-full h-96 object-cover transform group-hover:scale-105 group-hover:rotate-1 transition-all duration-500" 
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-2xl"></div>
            </div>
          </div>
        </div>
      </section>

      {/* Service Details */}
      <section className="py-20 bg-gradient-to-br from-white via-blue-50 to-white relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid lg:grid-cols-2 gap-12 items-start">
            {/* Service Description */}
            <div className="animate-fade-in">
              <h2 className="text-3xl md:text-4xl font-bold text-corporate-grey-dark mb-6 bg-gradient-to-r from-corporate-blue to-blue-600 bg-clip-text text-transparent">
                About Our {service.title} Service
              </h2>
              <p className="text-lg text-corporate-grey mb-6 leading-relaxed">
                {service.detailedDescription}
              </p>
              
              {/* Features */}
              <div className="mb-8">
                <h3 className="text-xl font-semibold text-corporate-grey-dark mb-4">Key Features</h3>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  {service.features.map((feature, idx) => (
                    <div key={idx} className="flex items-center gap-3 text-corporate-grey">
                      <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0" />
                      <span>{feature}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Industries */}
              <div>
                <h3 className="text-xl font-semibold text-corporate-grey-dark mb-4">Industries We Serve</h3>
                <div className="flex flex-wrap gap-2">
                  {service.industries.map((industry, idx) => (
                    <span key={idx} className="px-3 py-1 bg-corporate-blue text-white rounded-full text-sm font-medium">
                      {industry}
                    </span>
                  ))}
                </div>
              </div>
            </div>

            {/* Benefits Card */}
            <div className="animate-fade-in" style={{ animationDelay: '0.2s' }}>
              <Card className="hover:shadow-2xl transition-all duration-500 transform hover:scale-105 bg-white/80 backdrop-blur-sm border-0">
                <CardContent className="p-8">
                  <h3 className="text-2xl font-bold text-corporate-grey-dark mb-6 text-center">Why Choose Our {service.title} Service?</h3>
                  <div className="space-y-4">
                    {service.benefits.map((benefit, idx) => (
                      <div key={idx} className="flex items-start gap-3">
                        <div className="w-6 h-6 bg-corporate-blue rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                          <CheckCircle className="w-4 h-4 text-white" />
                        </div>
                        <p className="text-corporate-grey">{benefit}</p>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonial Section */}
      <section className="py-20 bg-gradient-to-br from-gray-50 to-white relative overflow-hidden">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-corporate-grey-dark mb-4">
              What Our Clients Say
            </h2>
            <p className="text-lg text-corporate-grey">
              Hear directly from our satisfied clients about their experience
            </p>
          </div>
          
          <Card className="hover:shadow-2xl transition-all duration-500 transform hover:scale-105 bg-white/80 backdrop-blur-sm border-0">
            <CardContent className="p-8 text-center">
              <div className="mb-6">
                <div className="w-16 h-16 bg-corporate-blue rounded-full flex items-center justify-center mx-auto mb-4">
                  <Users className="h-8 w-8 text-white" />
                </div>
              </div>
              <blockquote className="text-xl text-corporate-grey mb-6 italic leading-relaxed">
                "{service.testimonial.quote}"
              </blockquote>
              <div className="text-corporate-blue font-semibold">
                <div className="text-lg">{service.testimonial.author}</div>
                <div className="text-sm">{service.testimonial.position}, {service.testimonial.company}</div>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Clients Section */}
      <section className="py-20 bg-gradient-to-br from-white via-blue-50 to-white relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-corporate-grey-dark mb-4">
              Trusted by Industrys
            </h2>
            <p className="text-lg text-corporate-grey">
              We're proud to serve leading companies across various sectors
            </p>
          </div>
          
          <div className="flex overflow-hidden whitespace-nowrap">
            <div className="flex animate-scroll">
              {clients.map((client, index) => (
                <div 
                  key={index} 
                  className="flex-shrink-0 mx-8 text-center group transform hover:scale-105 transition-all duration-300 h-56 flex flex-col justify-center"
                >
                  <div className="relative">
                    <div className="w-28 h-28 bg-white rounded-2xl flex items-center justify-center mx-auto mb-4 shadow-xl border border-gray-100 group-hover:shadow-2xl group-hover:border-blue-200 transition-all duration-300">
                      <img 
                        src={client.logo} 
                        alt={`${client.name} logo`}
                        className="w-24 h-24 object-contain transition-transform duration-300"
                        onError={(e) => {
                          // Fallback to Building2 icon if logo fails to load
                          const target = e.target as HTMLImageElement;
                          target.style.display = 'none';
                          const icon = target.nextElementSibling as HTMLElement;
                          if (icon) icon.style.display = 'block';
                        }}
                      />
                      <Building2 className="h-12 w-12 text-corporate-blue hidden" />
                    </div>
                  </div>
                  <h3 className="font-semibold text-corporate-grey-dark mb-2 text-lg group-hover:text-corporate-blue transition-colors duration-300 leading-tight">
                    {client.name}
                  </h3>
                  <p className="text-sm text-corporate-grey group-hover:text-blue-600 transition-colors duration-300 leading-tight">
                    {client.industry}
                  </p>
                </div>
              ))}
              {/* Duplicate clients for seamless loop */}
              {clients.map((client, index) => (
                <div 
                  key={`duplicate-${index}`} 
                  className="flex-shrink-0 mx-8 text-center group transform hover:scale-105 transition-all duration-300 h-56 flex flex-col justify-center"
                >
                  <div className="relative">
                    <div className="w-28 h-28 bg-white rounded-2xl flex items-center justify-center mx-auto mb-4 shadow-xl border border-gray-100 group-hover:shadow-2xl group-hover:border-blue-200 transition-all duration-300">
                      <img 
                        src={client.logo} 
                        alt={`${client.name} logo`}
                        className="w-24 h-24 object-contain transition-transform duration-300"
                        onError={(e) => {
                          // Fallback to Building2 icon if logo fails to load
                          const target = e.target as HTMLImageElement;
                          target.style.display = 'none';
                          const icon = target.nextElementSibling as HTMLElement;
                          if (icon) icon.style.display = 'block';
                        }}
                      />
                      <Building2 className="h-12 w-12 text-corporate-blue hidden" />
                    </div>
                  </div>
                  <h3 className="font-semibold text-corporate-grey-dark mb-2 text-lg group-hover:text-corporate-blue transition-colors duration-300 leading-tight">
                    {client.name}
                  </h3>
                  <p className="text-sm text-corporate-grey group-hover:text-blue-600 transition-colors duration-300 leading-tight">
                    {client.industry}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-br from-corporate-blue via-blue-600 to-corporate-blue-dark text-white relative overflow-hidden">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Ready to Get Started?
          </h2>
          <p className="text-xl mb-8 text-blue-100 max-w-2xl mx-auto">
            Contact us today to discuss your {service.title.toLowerCase()} requirements and get a customized quote.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button
              size="lg"
              className="bg-white text-corporate-blue hover:bg-gray-100 font-semibold transform hover:scale-105 hover:shadow-2xl transition-all duration-300 rounded-xl"
              onClick={() => window.open('https://wa.me/918106206381', '_blank')}
            >
              <MessageCircle className="ml-2 h-5 w-5" />
              Contact on WhatsApp
            </Button>
            <Link to="/contact">
              <Button
                size="lg"
                variant="outline"
                className="border-white text-corporate-blue hover:bg-white hover:text-corporate-blue font-semibold transform hover:scale-105 transition-all duration-300 rounded-xl"
              >
                Contact Us
              </Button>
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
};

export default ServiceDetails;
