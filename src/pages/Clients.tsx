
import React from 'react';
import { Star, Quote, Building2 } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import WhatsAppFloat from '@/components/WhatsAppFloat';
import ScrollToTop from '../components/ScrollToTop';

const Clients = () => {
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

  const testimonials = [
    {
      name: 'Rajesh Kumar',
      company: 'Premier Energies',
      position: 'HR Manager',
      content: 'SLG Enterprises has been our trusted partner for manpower supply. Their professional approach and quality staff have significantly contributed to our operational efficiency.',
      rating: 5
    },
    {
      name: 'Priya Sharma',
      company: 'MGRM Medicare',
      position: 'Operations Director',
      content: 'The housekeeping and maintenance services provided by SLG are exceptional. Their attention to detail and reliability make them an invaluable partner for our healthcare facility.',
      rating: 5
    },
    {
      name: 'Anil Reddy',
      company: 'Multisorb Technologies',
      position: 'Facility Manager',
      content: 'We have been working with SLG Enterprises for over 3 years. Their security and office support services are professional and dependable. Highly recommended!',
      rating: 5
    }
  ];

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
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-indigo-400 bg-opacity-15 rounded-full blur-3xl animate-pulse" style={{animationDelay: '1s'}}></div>
        </div>
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center animate-fade-in transform hover:scale-105 transition-transform duration-500">
            <h1 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-white via-blue-100 to-white bg-clip-text text-transparent drop-shadow-2xl">
              Our Clients
            </h1>
            <p className="text-xl text-blue-100 max-w-3xl mx-auto leading-relaxed">
              Trusted by leading organizations across diverse industries for reliable manpower and facility management solutions
            </p>
            <div className="w-24 h-1 bg-gradient-to-r from-white to-blue-200 mx-auto rounded-full mt-6"></div>
          </div>
        </div>
      </section>

      {/* Featured Clients */}
      <section className="py-20 bg-gradient-to-br from-white via-blue-50 to-white relative overflow-hidden">
        {/* 3D Background Elements */}
        <div className="absolute inset-0">
          <div className="absolute top-24 left-10 w-32 h-32 bg-blue-200 bg-opacity-30 rounded-full blur-2xl animate-pulse"></div>
          <div className="absolute bottom-24 right-10 w-40 h-40 bg-indigo-200 bg-opacity-30 rounded-full blur-2xl animate-pulse" style={{animationDelay: '1s'}}></div>
        </div>
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center mb-16 animate-fade-in">
            <h2 className="text-4xl md:text-5xl font-bold text-corporate-grey-dark mb-6 bg-gradient-to-r from-corporate-blue to-blue-600 bg-clip-text text-transparent">
              Featured Clients
            </h2>
            <p className="text-lg text-corporate-grey max-w-2xl mx-auto leading-relaxed">
              A selection of organizations that trust us to deliver dependable manpower and facility solutions
            </p>
            <div className="w-24 h-1 bg-gradient-to-r from-corporate-blue to-blue-600 mx-auto rounded-full mt-4"></div>
          </div>

          {(() => {
            const featuredClients = clients.slice(0, 4).map((c) => ({
              client: c,
              testimonial: testimonials.find((t) => t.company === c.name) || null,
            }));
            return (
              <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-4">
                {featuredClients.map(({ client, testimonial }, index) => (
                  <div key={index} className="relative group/card animate-fade-in" style={{ animationDelay: `${index * 0.08}s` }}>
                    {/* Glow */}
                    <div className="pointer-events-none absolute -inset-1 rounded-2xl bg-gradient-to-r from-blue-200/40 via-indigo-200/40 to-blue-200/40 blur-xl opacity-0 group-hover/card:opacity-100 transition-opacity duration-500"></div>

                    <Card className="relative overflow-hidden transition-all duration-500 hover:shadow-2xl border-0 bg-white/80 backdrop-blur-sm">
                      {/* Ribbon */}
                      <div className="absolute left-0 top-4 z-10">
                        <span className="px-3 py-1 rounded-r-full text-xs font-semibold bg-gradient-to-r from-corporate-blue to-blue-600 text-white shadow">
                          Featured
                        </span>
                      </div>

                      <CardContent className="p-6">
                        <div className="group [perspective:1200px]">
                          <div className="relative h-72 w-full transition-transform duration-700 [transform-style:preserve-3d] group-hover:[transform:rotateY(180deg)]">
                            {/* Front */}
                            <div className="absolute inset-0 flex flex-col items-center justify-center gap-5 [backface-visibility:hidden]">
                              {/* Gradient ring around logo */}
                              <div className="w-full rounded-2xl p-[2px] bg-gradient-to-r from-blue-100 via-indigo-100 to-blue-100">
                                <div className="relative w-full h-32 bg-white rounded-2xl flex items-center justify-center shadow-md border border-gray-100 group-hover:shadow-xl group-hover:border-blue-200 transition-all duration-300">
                                  <img
                                    src={client.logo}
                                    alt={`${client.name} logo`}
                                    className="max-h-16 object-contain"
                                    onError={(e) => {
                                      const target = e.target as HTMLImageElement;
                                      target.style.display = 'none';
                                      const icon = target.nextElementSibling as HTMLElement;
                                      if (icon) icon.style.display = 'block';
                                    }}
                                  />
                                  <Building2 className="h-8 w-8 text-corporate-blue hidden" />
                                </div>
                              </div>

                              <div className="text-center">
                                <h3 className="text-lg font-semibold text-corporate-grey-dark group-hover:text-corporate-blue transition-colors duration-300">
                                  {client.name}
                                </h3>
                                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-medium bg-blue-50 text-corporate-blue border border-blue-100 mt-2">
                                  <Building2 className="h-3.5 w-3.5" />
                                  {client.industry}
                                </div>
                              </div>
                            </div>

                            {/* Back */}
                            <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-white via-blue-50 to-white p-5 shadow-inner border border-blue-100 [transform:rotateY(180deg)] [backface-visibility:hidden] flex flex-col items-center justify-center text-center">
                              <Quote className="h-6 w-6 text-corporate-blue mb-3" />
                              {testimonial ? (
                                <>
                                  <p className="italic text-corporate-grey mb-3 max-h-28 overflow-hidden">“{testimonial.content}”</p>
                                  <div className="flex justify-center gap-1 mb-2">
                                    {[...Array(testimonial.rating)].map((_, i) => (
                                      <Star key={i} className="h-4 w-4 text-yellow-400 fill-current" />
                                    ))}
                                  </div>
                                  <div className="text-corporate-blue font-semibold text-sm">
                                    <div>{testimonial.name}</div>
                                    <div className="text-corporate-grey text-xs font-normal">{testimonial.position}, {testimonial.company}</div>
                                  </div>
                                </>
                              ) : (
                                <>
                                  <p className="italic text-corporate-grey mb-3">“Trusted partner for manpower and facility solutions.”</p>
                                  <div className="text-corporate-blue font-semibold text-sm">{client.name}</div>
                                  <div className="text-corporate-grey text-xs">{client.industry}</div>
                                </>
                              )}
                            </div>
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  </div>
                ))}
              </div>
            );
          })()}
        </div>
      </section>

      {/* Client Stats */}
      <section className="py-20 bg-gradient-to-br from-white via-blue-50 to-white relative overflow-hidden">
        {/* 3D Background Elements */}
        <div className="absolute inset-0">
          <div className="absolute top-20 left-10 w-32 h-32 bg-blue-200 bg-opacity-30 rounded-full blur-2xl animate-pulse"></div>
          <div className="absolute bottom-20 right-10 w-40 h-40 bg-indigo-200 bg-opacity-30 rounded-full blur-2xl animate-pulse" style={{animationDelay: '1s'}}></div>
        </div>
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center mb-16 animate-fade-in">
            <h2 className="text-3xl md:text-4xl font-bold text-corporate-grey-dark mb-6">
              Our Impact in Numbers
            </h2>
            <p className="text-lg text-corporate-grey max-w-2xl mx-auto leading-relaxed">
              Delivering exceptional results through dedicated service and professional excellence
            </p>
            <div className="w-24 h-1 bg-gradient-to-r from-corporate-blue to-indigo-600 mx-auto rounded-full mt-4"></div>
          </div>
          
          <div className="grid md:grid-cols-4 gap-8 text-center">
            <div className="animate-fade-in group transform hover:scale-105 transition-all duration-500">
              <div className="relative">
                <div className="relative z-10 text-5xl font-bold text-corporate-blue mb-3 group-hover:text-blue-600 transition-colors duration-300">
                  50+
                </div>
                <div className="absolute -inset-2 z-0 pointer-events-none bg-gradient-to-r from-blue-100 to-indigo-100 rounded-full blur opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </div>
              <div className="text-corporate-grey font-medium text-lg">Active Clients</div>
            </div>
            
            <div className="animate-fade-in group transform hover:scale-105 transition-all duration-500" style={{ animationDelay: '0.1s' }}>
              <div className="relative">
                <div className="relative z-10 text-5xl font-bold text-corporate-blue mb-3 group-hover:text-blue-600 transition-colors duration-300">
                  500+
                </div>
                <div className="absolute -inset-2 z-0 pointer-events-none bg-gradient-to-r from-blue-100 to-indigo-100 rounded-full blur opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </div>
              <div className="text-corporate-grey font-medium text-lg">Trained Professionals</div>
            </div>
            
            <div className="animate-fade-in group transform hover:scale-105 transition-all duration-500" style={{ animationDelay: '0.2s' }}>
              <div className="relative">
                <div className="relative z-10 text-5xl font-bold text-corporate-blue mb-3 group-hover:text-blue-600 transition-colors duration-300">
                  9+
                </div>
                <div className="absolute -inset-2 z-0 pointer-events-none bg-gradient-to-r from-blue-100 to-indigo-100 rounded-full blur opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </div>
              <div className="text-corporate-grey font-medium text-lg">Years of Experience</div>
            </div>
            
            <div className="animate-fade-in group transform hover:scale-105 transition-all duration-500" style={{ animationDelay: '0.3s' }}>
              <div className="relative">
                <div className="relative z-10 text-5xl font-bold text-corporate-blue mb-3 group-hover:text-blue-600 transition-colors duration-300">
                  98%
                </div>
                <div className="absolute -inset-2 z-0 pointer-events-none bg-gradient-to-r from-blue-100 to-indigo-100 rounded-full blur opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </div>
              <div className="text-corporate-grey font-medium text-lg">Client Satisfaction</div>
            </div>
          </div>
        </div>
      </section>

      {/* Client Logos */}
      <section className="py-20 bg-gradient-to-br from-gray-50 via-white to-gray-100 relative overflow-hidden">
        {/* 3D Background Elements */}
        <div className="absolute inset-0">
          <div className="absolute top-1/4 left-20 w-32 h-32 bg-blue-200 bg-opacity-30 rounded-full blur-2xl animate-pulse"></div>
          <div className="absolute bottom-1/4 right-20 w-40 h-40 bg-green-200 bg-opacity-30 rounded-full blur-2xl animate-pulse" style={{animationDelay: '1s'}}></div>
        </div>
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center mb-16 animate-fade-in">
            <h2 className="text-4xl md:text-5xl font-bold text-corporate-grey-dark mb-6 bg-gradient-to-r from-corporate-blue to-blue-600 bg-clip-text text-transparent">
              Trusted by Industry Leaders
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

      {/* Testimonials */}
      <section className="py-20 bg-gradient-to-br from-white via-blue-50 to-white relative overflow-hidden">
        {/* 3D Background Elements */}
        <div className="absolute inset-0">
          <div className="absolute top-1/2 left-0 w-64 h-64 bg-blue-100 bg-opacity-40 rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute top-1/2 right-0 w-80 h-80 bg-indigo-100 bg-opacity-40 rounded-full blur-3xl animate-pulse" style={{animationDelay: '1.5s'}}></div>
        </div>
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center mb-16 animate-fade-in">
            <h2 className="text-4xl md:text-5xl font-bold text-corporate-grey-dark mb-6 bg-gradient-to-r from-corporate-blue to-indigo-600 bg-clip-text text-transparent">
              What Our Clients Say
            </h2>
            <p className="text-lg text-corporate-grey max-w-2xl mx-auto leading-relaxed">
              Hear directly from our satisfied clients about their experience working with us
            </p>
            <div className="w-24 h-1 bg-gradient-to-r from-corporate-blue to-indigo-600 mx-auto rounded-full mt-4"></div>
          </div>

          <div className="grid lg:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <Card 
                key={index} 
                className="hover:shadow-2xl transition-all duration-500 animate-fade-in transform hover:scale-105 hover:-rotate-1 bg-white/70 backdrop-blur-sm border border-white/20 hover:border-blue-200/50"
                style={{ 
                  animationDelay: `${index * 0.2}s`,
                  transformStyle: 'preserve-3d'
                }}
              >
                <CardContent className="p-8">
                  <div className="flex items-center mb-6">
                    <div className="p-3 bg-gradient-to-br from-corporate-blue to-blue-600 rounded-2xl shadow-lg mr-4">
                      <Quote className="h-6 w-6 text-white" />
                    </div>
                    <div className="flex">
                      {[...Array(testimonial.rating)].map((_, i) => (
                        <Star key={i} className="h-5 w-5 text-yellow-400 fill-current transform hover:scale-110 transition-transform duration-200" />
                      ))}
                    </div>
                  </div>
                  
                  <blockquote className="text-corporate-grey mb-6 italic text-lg leading-relaxed">
                    "{testimonial.content}"
                  </blockquote>
                  
                  <div className="border-t border-blue-100 pt-4">
                    <div className="font-semibold text-corporate-grey-dark text-lg">
                      {testimonial.name}
                    </div>
                    <div className="text-sm text-corporate-grey mb-1">
                      {testimonial.position}
                    </div>
                    <div className="text-sm text-corporate-blue font-medium">
                      {testimonial.company}
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Partnership CTA */}
      <section className="py-20 bg-gradient-to-br from-corporate-blue via-blue-600 to-indigo-700 text-white relative overflow-hidden">
        {/* 3D Background Elements */}
        <div className="absolute inset-0">
          <div className="absolute top-0 left-1/4 w-96 h-96 bg-white bg-opacity-10 rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute bottom-0 right-1/4 w-80 h-80 bg-blue-400 bg-opacity-20 rounded-full blur-3xl animate-pulse" style={{animationDelay: '1s'}}></div>
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-indigo-400 bg-opacity-15 rounded-full blur-3xl animate-pulse" style={{animationDelay: '2s'}}></div>
        </div>
        
        <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="animate-fade-in">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-white via-blue-100 to-white bg-clip-text text-transparent drop-shadow-2xl">
              Join Our Growing Family of Satisfied Clients
            </h2>
            <p className="text-xl text-blue-100 mb-10 leading-relaxed max-w-2xl mx-auto">
              Experience the difference that reliable, professional service can make for your organization
            </p>
            <div className="flex flex-col sm:flex-row gap-6 justify-center">
              <button
                className="bg-white text-corporate-blue hover:bg-gray-100 px-8 py-4 rounded-xl font-semibold transition-all duration-300 transform hover:scale-105 hover:shadow-2xl shadow-lg"
                onClick={() => window.open('mailto:srilaxmiganapathi80960@gmail.com?subject=Partnership Inquiry', '_blank')}
              >
                Become Our Partner
              </button>
              <button
                className="border-2 border-white text-white hover:bg-white hover:text-corporate-blue px-8 py-4 rounded-xl font-semibold transition-all duration-300 transform hover:scale-105 hover:shadow-2xl shadow-lg"
                onClick={() => window.open('https://wa.me/918106206381?text=I would like to discuss a potential partnership opportunity.', '_blank')}
              >
                WhatsApp Us
              </button>
            </div>
          </div>
        </div>
      </section>

      <Footer />
      <WhatsAppFloat />
    </>
  );
};

export default Clients;
