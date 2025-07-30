
import { Star, Quote, Building2 } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import WhatsAppFloat from '@/components/WhatsAppFloat';
import ScrollToTop from '../components/ScrollToTop';

const Clients = () => {
  const clients = [
    { name: 'Premier Energies', industry: 'Solar Energy' },
    { name: 'Ramky Group', industry: 'Infrastructure' },
    { name: 'MGRM Medicare', industry: 'Healthcare' },
    { name: 'Multisorb Technologies', industry: 'Technology' },
    { name: 'Leverage Science Tech', industry: 'Scientific Equipment' },
    { name: 'Biocon Limited', industry: 'Pharmaceuticals' },
    { name: 'Tech Mahindra', industry: 'IT Services' },
    { name: 'Cipla Limited', industry: 'Pharmaceuticals' },
    { name: 'Gland Pharma', industry: 'Healthcare' },
    { name: 'Hetero Drugs', industry: 'Pharmaceuticals' },
    { name: 'Bharat Biotech', industry: 'Biotechnology' },
    { name: 'Dr. Reddy\'s Labs', industry: 'Pharmaceuticals' }
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
      <section className="relative bg-gradient-to-br from-corporate-blue to-corporate-blue-dark text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center animate-fade-in">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">Our Clients</h1>
            <p className="text-xl text-blue-100 max-w-3xl mx-auto">
              Trusted by leading organizations across diverse industries for reliable manpower and facility management solutions
            </p>
          </div>
        </div>
      </section>

      {/* Client Stats */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-4 gap-8 text-center">
            <div className="animate-fade-in">
              <div className="text-4xl font-bold text-corporate-blue mb-2">50+</div>
              <div className="text-corporate-grey">Active Clients</div>
            </div>
            <div className="animate-fade-in" style={{ animationDelay: '0.1s' }}>
              <div className="text-4xl font-bold text-corporate-blue mb-2">500+</div>
              <div className="text-corporate-grey">Trained Professionals</div>
            </div>
            <div className="animate-fade-in" style={{ animationDelay: '0.2s' }}>
              <div className="text-4xl font-bold text-corporate-blue mb-2">9+</div>
              <div className="text-corporate-grey">Years of Experience</div>
            </div>
            <div className="animate-fade-in" style={{ animationDelay: '0.3s' }}>
              <div className="text-4xl font-bold text-corporate-blue mb-2">98%</div>
              <div className="text-corporate-grey">Client Satisfaction</div>
            </div>
          </div>
        </div>
      </section>

      {/* Client Logos */}
      <section className="py-20 bg-corporate-grey-light">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16 animate-fade-in">
            <h2 className="text-3xl md:text-4xl font-bold text-corporate-grey-dark mb-4">
              Trusted by Industry Leaders
            </h2>
            <p className="text-lg text-corporate-grey max-w-2xl mx-auto">
              We're proud to serve leading companies across pharmaceuticals, technology, healthcare, and infrastructure sectors
            </p>
          </div>

          <div className="grid md:grid-cols-3 lg:grid-cols-4 gap-6">
            {clients.map((client, index) => (
              <Card 
                key={index} 
                className="text-center hover:shadow-lg transition-all duration-300 hover:-translate-y-1 animate-fade-in"
                style={{ animationDelay: `${index * 0.05}s` }}
              >
                <CardContent className="p-6">
                  <div className="w-16 h-16 bg-corporate-blue bg-opacity-10 rounded-lg flex items-center justify-center mx-auto mb-4">
                    <Building2 className="h-8 w-8 text-corporate-blue" />
                  </div>
                  <h3 className="font-semibold text-corporate-grey-dark mb-1">
                    {client.name}
                  </h3>
                  <p className="text-sm text-corporate-grey">
                    {client.industry}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16 animate-fade-in">
            <h2 className="text-3xl md:text-4xl font-bold text-corporate-grey-dark mb-4">
              What Our Clients Say
            </h2>
            <p className="text-lg text-corporate-grey max-w-2xl mx-auto">
              Hear directly from our satisfied clients about their experience working with us
            </p>
          </div>

          <div className="grid lg:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <Card 
                key={index} 
                className="hover:shadow-xl transition-shadow duration-300 animate-fade-in"
                style={{ animationDelay: `${index * 0.2}s` }}
              >
                <CardContent className="p-8">
                  <div className="flex items-center mb-4">
                    <Quote className="h-8 w-8 text-corporate-blue mr-3" />
                    <div className="flex">
                      {[...Array(testimonial.rating)].map((_, i) => (
                        <Star key={i} className="h-5 w-5 text-yellow-400 fill-current" />
                      ))}
                    </div>
                  </div>
                  
                  <blockquote className="text-corporate-grey mb-6 italic">
                    "{testimonial.content}"
                  </blockquote>
                  
                  <div className="border-t pt-4">
                    <div className="font-semibold text-corporate-grey-dark">
                      {testimonial.name}
                    </div>
                    <div className="text-sm text-corporate-grey">
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
      <section className="py-20 bg-corporate-blue text-white">
        <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          <div className="animate-fade-in">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Join Our Growing Family of Satisfied Clients
            </h2>
            <p className="text-xl text-blue-100 mb-8">
              Experience the difference that reliable, professional service can make for your organization
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button
                className="bg-white text-corporate-blue hover:bg-gray-100 px-8 py-3 rounded-lg font-semibold transition-colors"
                onClick={() => window.open('mailto:srilaxmiganapathi80960@gmail.com?subject=Partnership Inquiry', '_blank')}
              >
                Become Our Partner
              </button>
              <button
                className="border-2 border-white text-white hover:bg-white hover:text-corporate-blue px-8 py-3 rounded-lg font-semibold transition-colors"
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
