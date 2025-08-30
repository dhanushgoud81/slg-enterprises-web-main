
import { ArrowRight, CheckCircle, Users, Shield, Clock, Award, Building2 } from 'lucide-react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import WhatsAppFloat from '@/components/WhatsAppFloat';
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import * as React from "react";
import ScrollToTop from '../components/ScrollToTop';

const Index = () => {
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
      @media (max-width: 768px) {
        .animate-scroll {
          animation: scroll 30s linear infinite;
        }
      }Trusted by Industry Leaders
    `;
    document.head.appendChild(style);
    
    return () => {
      document.head.removeChild(style);
    };
  }, []);
  const heroImages = [
    
    {
      src: "/images/manpower.jpeg",
      alt: "Professional Manpower Supply Services - Skilled Workforce Solutions"
    },
    {
      src: "/images/housekeeping.jpeg",
      alt: "Premium Housekeeping Services - Professional Cleaning Solutions"
    },
    {
      src: "/images/security.jpeg",
      alt: "Corporate Security Services - Professional Security Personnel"
    }
  ];
  const services = [
    {
      title: 'Manpower Supply',
      description: 'Premium skilled workforce with verified backgrounds and specialized training',
      image: '/images/manpower.jpeg',
      link: '/services/manpower'
    },
    {
      title: 'Landscaping',
      description: 'Transform your outdoor spaces with professional design and maintenance',
      image: '/images/landscaping.jpeg',
      link: '/services/landscaping'
    },
    {
      title: 'Housekeeping',
      description: 'Immaculate cleaning services with eco-friendly products and protocols',
      image: '/images/housekeeping.jpeg',
      link: '/services/housekeeping'
    },
    {
      title: 'Security',
      description: 'Professional security personnel with advanced training and 24/7 monitoring',
      image: '/images/security.jpeg',
      link: '/services/security'
    },
    {
      title: 'Office Support',
      description: 'Efficient administrative assistance and office management solutions',
      image: '/images/office-boy.jpeg',
      link: '/services/office-boy'
    },
    {
      title: 'Operational Teams',
      description: 'Specialized non-technical teams for manufacturing and logistics',
      image: '/images/non-tech.jpeg',
      link: '/services/non-tech'
    }
  ];

  const whyChooseUs = [
    {
      icon: <CheckCircle className="h-12 w-12 text-corporate-blue" />,
      title: 'Proven Excellence',
      description: '8+ years of consistent delivery with 500+ satisfied clients across diverse industries'
    },
    {
      icon: <Users className="h-12 w-12 text-corporate-blue" />,
      title: 'Expert Professionals',
      description: 'Rigorous screening, specialized training, and continuous skill development programs'
    },
    {
      icon: <Shield className="h-12 w-12 text-corporate-blue" />,
      title: 'Quality Guaranteed',
      description: 'ISO-compliant processes with comprehensive quality control and performance monitoring'
    },
    {
      icon: <Clock className="h-12 w-12 text-corporate-blue" />,
      title: 'Flexible Solutions',
      description: 'Customized service packages with scalable options for businesses of all sizes'
    },
    {
      icon: <Award className="h-12 w-12 text-corporate-blue" />,
      title: 'Industry Leadership',
      description: 'Setting benchmarks in manpower solutions with innovative service delivery models'
    },
    {
      icon: <ArrowRight className="h-12 w-12 text-corporate-blue" />,
      title: 'Always Available',
      description: '24/7 dedicated support with rapid response times for urgent requirements'
    }
  ];

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
      logo: '/images/leverage-science-logo.png'
    }
  ];

  const [carouselApi, setCarouselApi] = React.useState(null);

  React.useEffect(() => {
    if (!carouselApi) return;
    const interval = setInterval(() => {
      carouselApi.scrollNext();
    }, 3000); // 3 seconds
    return () => clearInterval(interval);
  }, [carouselApi]);

  return (
    <>
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
              <div className="inline-flex items-center gap-2 mb-4 px-3 py-1 rounded-full bg-white/10 ring-1 ring-white/30 shadow-sm">
                <span className="h-2 w-2 rounded-full bg-emerald-400 animate-pulse"></span>
                <span className="text-sm tracking-wide text-blue-100">Since 2015 • Hyderabad & Telangana</span>
              </div>
              <h1 className="text-4xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-white via-blue-100 to-white bg-clip-text text-transparent drop-shadow-2xl">
                Sri Laxmi Ganapathi Enterprises
              </h1>
              <p className="text-xl md:text-2xl mb-4 text-blue-100 font-light">
                Premier Manpower & Facility Management Solutions
              </p>
              <p className="text-lg mb-8 text-blue-200 max-w-lg leading-relaxed">
                Empowering businesses with exceptional manpower solutions and comprehensive facility management services. 
                With 500+ trained professionals and 8+ years of excellence, we're your strategic partner for sustainable growth.
              </p>
              <ul className="space-y-2 mb-8 text-blue-100">
                <li className="flex items-center gap-2"><CheckCircle className="h-5 w-5 text-emerald-400" /> Background-verified professionals</li>
                <li className="flex items-center gap-2"><Shield className="h-5 w-5 text-blue-200" /> 24/7 support & flexible contracts</li>
                <li className="flex items-center gap-2"><Award className="h-5 w-5 text-amber-300" /> ISO-ready processes & quality audits</li>
              </ul>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button
                  asChild
                  size="lg"
                  className="bg-white text-corporate-blue hover:bg-gray-100 font-semibold transform hover:scale-105 hover:shadow-2xl transition-all duration-300 rounded-xl"
                >
                  <Link to="/services">
                    Explore Services <ArrowRight className="ml-2 h-5 w-5" />
                  </Link>
                </Button>
                <Button
                  size="lg"
                  variant="outline"
                  className="bg-white text-corporate-blue hover:bg-gray-100 font-semibold transform hover:scale-105 hover:shadow-2xl transition-all duration-300 rounded-xl"
                  onClick={() => window.open('https://wa.me/918106206381', '_blank')}
                >
                  Contact Us
                </Button>
              </div>
              <div className="mt-6 grid grid-cols-3 gap-2 sm:gap-4 max-w-md">
                <div className="bg-white/10 backdrop-blur-sm rounded-xl p-3 sm:p-4 ring-1 ring-white/20 text-center">
                  <div className="text-xl sm:text-2xl font-bold text-white">50+</div>
                  <div className="text-xs text-blue-100">Active Clients</div>
                </div>
                <div className="bg-white/10 backdrop-blur-sm rounded-xl p-3 sm:p-4 ring-1 ring-white/20 text-center">
                  <div className="text-xl sm:text-2xl font-bold text-white">500+</div>
                  <div className="text-xs text-blue-100">Professionals</div>
                </div>
                <div className="bg-white/10 backdrop-blur-sm rounded-xl p-3 sm:p-4 ring-1 ring-white/20 text-center">
                  <div className="text-xl sm:text-2xl font-bold text-white">24/7</div>
                  <div className="text-xs text-blue-100">Support</div>
                </div>
              </div>
            </div>
            <div className="animate-scale-in transform hover:scale-105 transition-transform duration-500">
              <div className="relative">
                <div className="absolute -top-10 -right-10 w-44 h-44 bg-white/10 rounded-full blur-3xl"></div>
                <div className="rounded-3xl p-[2px] bg-gradient-to-r from-white/40 via-blue-200/40 to-white/40">
                  <div className="rounded-3xl overflow-hidden shadow-2xl">
                    <Carousel opts={{ 
                      align: "center", 
                      loop: true,
                      duration: 40
                    }} setApi={setCarouselApi}>
                      <div className="relative">
                        <CarouselContent>
                          {heroImages.map((image, index) => (
                            <CarouselItem key={index}>
                              <div className="relative group">
                                <img
                                  src={image.src}
                                  alt={image.alt}
                                  className="rounded-2xl w-full aspect-[4/3] sm:aspect-[16/10] md:aspect-[16/9] object-cover transform group-hover:scale-105 group-hover:rotate-1 transition-all duration-700"
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-black/30 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-2xl"></div>
                                <div className="absolute bottom-4 left-4 text-white opacity-0 group-hover:opacity-100 transition-all duration-500 transform translate-y-2 group-hover:translate-y-0">
                                  <h3 className="text-lg font-semibold drop-shadow-lg">{image.alt}</h3>
                                </div>
                              </div>
                            </CarouselItem>
                          ))}
                        </CarouselContent>
                        <CarouselPrevious className="absolute top-1/2 left-4 -translate-y-1/2 invisible" />
                        <CarouselNext className="absolute top-1/2 right-4 -translate-y-1/2 invisible" />
                      </div>
                    </Carousel>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-20 bg-gradient-to-br from-gray-50 via-white to-gray-100 relative overflow-hidden">
        {/* 3D Background Elements */}
        <div className="absolute inset-0">
          <div className="absolute top-20 left-10 w-32 h-32 bg-blue-200 bg-opacity-30 rounded-full blur-2xl animate-pulse"></div>
          <div className="absolute bottom-20 right-10 w-40 h-40 bg-green-200 bg-opacity-30 rounded-full blur-2xl animate-pulse" style={{animationDelay: '1s'}}></div>
        </div>
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-corporate-grey-dark mb-6 bg-gradient-to-r from-corporate-blue to-blue-600 bg-clip-text text-transparent">
              Comprehensive Manpower & Facility Management Services
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-corporate-blue to-blue-600 mx-auto rounded-full"></div>
          </div>
          
          <div className="grid gap-6 sm:gap-8 md:grid-cols-2 lg:grid-cols-3">
            {services.map((service, index) => (
              <Card 
                key={index} 
                className="overflow-hidden h-full group transform hover:scale-105 hover:-rotate-1 transition-all duration-500 hover:shadow-2xl border-0 bg-white/80 backdrop-blur-sm"
                style={{ 
                  animationDelay: `${index * 0.1}s`,
                  transformStyle: 'preserve-3d'
                }}
              >
                <div className="aspect-video relative overflow-hidden">
                  <img
                    src={service.image}
                    alt={service.title}
                    className="object-cover w-full h-full transition-transform duration-700 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                </div>
                <CardContent className="p-6">
                  <h3 className="text-xl font-semibold mb-3 text-corporate-grey-dark group-hover:text-corporate-blue transition-colors duration-300">
                    {service.title}
                  </h3>
                  <p className="text-gray-600 mb-6 leading-relaxed">{service.description}</p>
                  <Link to={service.link}>
                    <Button 
                      variant="default" 
                      className="w-full bg-gradient-to-r from-corporate-blue to-blue-600 hover:from-blue-600 hover:to-corporate-blue transform hover:scale-105 transition-all duration-300 rounded-xl shadow-lg hover:shadow-xl"
                    >
                      Learn More
                    </Button>
                  </Link>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="py-20 bg-gradient-to-br from-white via-blue-50 to-white relative overflow-hidden">
        {/* 3D Background Elements */}
        <div className="absolute inset-0">
          <div className="absolute top-1/2 left-0 w-64 h-64 bg-blue-100 bg-opacity-40 rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute top-1/2 right-0 w-80 h-80 bg-indigo-100 bg-opacity-40 rounded-full blur-3xl animate-pulse" style={{animationDelay: '1.5s'}}></div>
        </div>
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center mb-16 animate-fade-in">
            <h2 className="text-4xl md:text-5xl font-bold text-corporate-grey-dark mb-6 bg-gradient-to-r from-corporate-blue to-indigo-600 bg-clip-text text-transparent">
              Why Choose Us
            </h2>
            <p className="text-lg text-corporate-grey max-w-2xl mx-auto leading-relaxed">
              Experience the difference with our commitment to quality, reliability, and customer satisfaction
            </p>
            <div className="w-24 h-1 bg-gradient-to-r from-corporate-blue to-indigo-600 mx-auto rounded-full mt-4"></div>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {whyChooseUs.map((item, index) => (
              <div 
                key={index} 
                className="text-center p-8 rounded-2xl hover:shadow-2xl transition-all duration-500 animate-fade-in group bg-white/70 backdrop-blur-sm border border-white/20 hover:border-blue-200/50 transform hover:scale-105 hover:-rotate-1"
                style={{ 
                  animationDelay: `${index * 0.1}s`,
                  transformStyle: 'preserve-3d'
                }}
              >
                <div className="flex justify-center mb-6 transform group-hover:scale-110 transition-transform duration-300">
                  <div className="p-4 bg-gradient-to-br from-corporate-blue to-blue-600 rounded-2xl shadow-lg group-hover:shadow-2xl transition-all duration-300">
                    {React.cloneElement(item.icon, { className: 'h-10 w-10 text-white' })}
                  </div>
                </div>
                <h3 className="text-xl font-semibold text-corporate-grey-dark mb-3 group-hover:text-corporate-blue transition-colors duration-300">
                  {item.title}
                </h3>
                <p className="text-corporate-grey leading-relaxed">
                  {item.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Moving Clients Section */}
      <section className="py-20 bg-gradient-to-br from-gray-50 via-white to-gray-100 relative overflow-hidden">
        {/* 3D Background Elements */}
        <div className="absolute inset-0">
          <div className="absolute top-1/4 left-20 w-32 h-32 bg-blue-200 bg-opacity-30 rounded-full blur-2xl animate-pulse"></div>
          <div className="absolute bottom-1/4 right-20 w-40 h-40 bg-green-200 bg-opacity-30 rounded-full blur-2xl animate-pulse" style={{animationDelay: '1s'}}></div>
        </div>
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center mb-16 animate-fade-in">
            <h2 className="text-4xl md:text-5xl font-bold text-corporate-grey-dark mb-6 bg-gradient-to-r from-corporate-blue to-blue-600 bg-clip-text text-transparent">
              Trusted by Industrys
            </h2>
            <p className="text-lg text-corporate-grey max-w-2xl mx-auto leading-relaxed">
              We're proud to serve leading companies across pharmaceuticals, technology, healthcare, and infrastructure sectors
            </p>
            <div className="w-24 h-1 bg-gradient-to-r from-corporate-blue to-blue-600 mx-auto rounded-full mt-4"></div>
          </div>

          <div className="flex overflow-hidden whitespace-nowrap">
            <div className="flex animate-scroll">
              {clients.map((client, index) => (
                <div 
                  key={index} 
                  className="flex-shrink-0 mx-8 text-center group transform hover:scale-105 transition-all duration-500 h-56 flex flex-col justify-center"
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
                  className="flex-shrink-0 mx-8 text-center group transform hover:scale-105 transition-all duration-500 h-56 flex flex-col justify-center"
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

      {/* Call to Action */}
      <section className="py-20 bg-gradient-to-br from-corporate-blue via-blue-600 to-indigo-700 text-white relative overflow-hidden">
        {/* 3D Background Elements */}
        <div className="absolute inset-0">
          <div className="absolute top-0 left-1/4 w-96 h-96 bg-white bg-opacity-10 rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute bottom-0 right-1/4 w-80 h-80 bg-blue-400 bg-opacity-20 rounded-full blur-3xl animate-pulse" style={{animationDelay: '1s'}}></div>
        </div>
        
        <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8 relative z-10">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 animate-fade-in bg-gradient-to-r from-white via-blue-100 to-white bg-clip-text text-transparent drop-shadow-2xl">
            Ready to Get Started?
          </h2>
          <p className="text-xl mb-10 text-blue-100 animate-fade-in leading-relaxed max-w-2xl mx-auto">
            Contact us today to discuss your manpower and facility management needs
          </p>
          <div className="flex flex-col sm:flex-row gap-6 justify-center animate-scale-in">
            <Button
              asChild
              size="lg"
              className="bg-white text-corporate-blue hover:bg-gray-100 font-semibold transform hover:scale-105 hover:shadow-2xl transition-all duration-300 rounded-xl shadow-lg px-8 py-4"
            >
              <Link to="/contact">
                Get in Touch <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="bg-white text-corporate-blue hover:bg-gray-100 font-semibold transform hover:scale-105 hover:shadow-2xl transition-all duration-300 rounded-xl shadow-lg px-8 py-4 border-2"
              onClick={() => window.open('https://wa.me/918106206381', '_blank')}
            >
              WhatsApp Us
            </Button>
          </div>
        </div>
      </section>

      <Footer />
      <WhatsAppFloat />
    </>
  );
};

export default Index;
