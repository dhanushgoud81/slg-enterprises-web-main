
import { Calendar, Target, Eye, User } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import WhatsAppFloat from '@/components/WhatsAppFloat';
import ScrollToTop from '../components/ScrollToTop';

const About = () => {
  const timeline = [
    {
      year: '2015',
      title: 'Company Founded',
      description: 'Sri Laxmi Ganapathi Enterprises was established with a vision to provide reliable manpower services'
    },
    {
      year: '2017',
      title: 'Service Expansion',
      description: 'Expanded services to include facility management and maintenance solutions'
    },
    {
      year: '2019',
      title: 'Major Clients',
      description: 'Secured partnerships with premier enterprises and healthcare organizations'
    },
    {
      year: '2021',
      title: 'Technology Integration',
      description: 'Implemented modern workforce management systems for better service delivery'
    },
    {
      year: '2024',
      title: 'Continued Growth',
      description: 'Serving 50+ clients with a team of 500+ trained professionals'
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
            <h1 className="text-4xl md:text-5xl font-bold mb-6">About Us</h1>
            <p className="text-xl text-blue-100 max-w-3xl mx-auto">
              Discover our journey of excellence in manpower supply and facility management services
            </p>
          </div>
        </div>
      </section>

      {/* Company Timeline */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16 animate-fade-in">
            <h2 className="text-3xl md:text-4xl font-bold text-corporate-grey-dark mb-4">
              Our Journey
            </h2>
            <p className="text-lg text-corporate-grey max-w-2xl mx-auto">
              From humble beginnings to becoming a trusted partner for enterprises across various industries
            </p>
          </div>

          <div className="relative">
            <div className="absolute left-1/2 transform -translate-x-1/2 w-1 h-full bg-corporate-blue opacity-20"></div>
            
            {timeline.map((item, index) => (
              <div 
                key={index} 
                className={`relative flex items-center mb-12 animate-fade-in ${
                  index % 2 === 0 ? 'flex-row' : 'flex-row-reverse'
                }`}
                style={{ animationDelay: `${index * 0.2}s` }}
              >
                <div className={`w-1/2 ${index % 2 === 0 ? 'pr-8 text-right' : 'pl-8'}`}>
                  <Card className="hover:shadow-lg transition-shadow duration-300">
                    <CardContent className="p-6">
                      <div className="flex items-center mb-2">
                        <Calendar className="h-5 w-5 text-corporate-blue mr-2" />
                        <span className="text-2xl font-bold text-corporate-blue">{item.year}</span>
                      </div>
                      <h3 className="text-xl font-semibold text-corporate-grey-dark mb-2">
                        {item.title}
                      </h3>
                      <p className="text-corporate-grey">{item.description}</p>
                    </CardContent>
                  </Card>
                </div>
                
                <div className="absolute left-1/2 transform -translate-x-1/2 w-4 h-4 bg-corporate-blue rounded-full border-4 border-white shadow-lg"></div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Mission and Vision */}
      <section className="py-20 bg-corporate-grey-light">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12">
            <Card className="animate-fade-in hover:shadow-xl transition-shadow duration-300">
              <CardContent className="p-8">
                <div className="flex items-center mb-6">
                  <Target className="h-12 w-12 text-corporate-blue mr-4" />
                  <h2 className="text-3xl font-bold text-corporate-grey-dark">Our Mission</h2>
                </div>
                <p className="text-lg text-corporate-grey leading-relaxed">
                  To provide exceptional manpower and facility management services that enable our clients 
                  to focus on their core business operations. We are committed to delivering reliable, 
                  skilled professionals who contribute to the success and growth of our partners.
                </p>
              </CardContent>
            </Card>

            <Card className="animate-fade-in hover:shadow-xl transition-shadow duration-300" style={{ animationDelay: '0.2s' }}>
              <CardContent className="p-8">
                <div className="flex items-center mb-6">
                  <Eye className="h-12 w-12 text-corporate-blue mr-4" />
                  <h2 className="text-3xl font-bold text-corporate-grey-dark">Our Vision</h2>
                </div>
                <p className="text-lg text-corporate-grey leading-relaxed">
                  To become the most trusted and preferred partner for comprehensive manpower solutions 
                  across diverse industries. We aspire to set new standards in service quality and 
                  professional excellence while fostering long-term relationships with our clients.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Founder's Message */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16 animate-fade-in">
            <h2 className="text-3xl md:text-4xl font-bold text-corporate-grey-dark mb-4">
              Message from Our Founder
            </h2>
          </div>

          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="animate-fade-in">
              <img
                src="/images/office-boy.jpeg"
                alt="Founder"
                className="rounded-lg shadow-xl w-full h-96 object-cover"
              />
            </div>
            <div className="animate-fade-in" style={{ animationDelay: '0.2s' }}>
              <Card className="hover:shadow-lg transition-shadow duration-300">
                <CardContent className="p-8">
                  <div className="flex items-center mb-6">
                    <User className="h-8 w-8 text-corporate-blue mr-3" />
                    <h3 className="text-2xl font-semibold text-corporate-grey-dark">Founder & CEO</h3>
                  </div>
                  <blockquote className="text-lg text-corporate-grey italic mb-4">
                    "Since founding Sri Laxmi Ganapathi Enterprises in 2015, our commitment has been 
                    unwavering - to provide reliable, skilled professionals who become integral parts 
                    of our clients' success stories. We believe that quality service and human 
                    excellence go hand in hand."
                  </blockquote>
                  <p className="text-lg text-corporate-grey">
                    Our journey began with a simple belief that every organization deserves access 
                    to dedicated, trained professionals. Today, we proudly serve diverse industries 
                    with the same passion and commitment that started it all.
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Location Info */}
      <section className="py-20 bg-corporate-blue text-white">
        <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          <div className="animate-fade-in">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Our Location</h2>
            <p className="text-xl text-blue-100 mb-8">
              Strategically located in Hyderabad, serving clients across Telangana and beyond
            </p>
            <div className="bg-white bg-opacity-10 rounded-lg p-8 backdrop-blur-sm">
              <h3 className="text-2xl font-semibold mb-4">Head Office</h3>
              <p className="text-lg text-blue-100">
                Hyderabad, Telangana, India
              </p>
              <p className="text-blue-200 mt-2">
                Serving clients across South India with dedicated regional support
              </p>
            </div>
          </div>
        </div>
      </section>

      <Footer />
      <WhatsAppFloat />
    </>
  );
};

export default About;
