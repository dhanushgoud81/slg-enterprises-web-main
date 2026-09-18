
import { Calendar, Target, Eye, User } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import WhatsAppFloat from '@/components/WhatsAppFloat';
import ScrollToTop from '../components/ScrollToTop';
import SEO from '@/components/SEO';

const About = () => {
  const timeline = [
    {
      year: '2015',
      title: 'Company Founded',
      description: 'Sri Laxmi Ganapathi Enterprises was established in Hyderabad with a vision to provide reliable manpower services'
    },
    {
      year: '2017',
      title: 'Service Expansion',
      description: 'Expanded services to include facility management, landscaping, and maintenance solutions'
    },
    {
      year: '2019',
      title: 'Major Clients',
      description: 'Secured partnerships with premier enterprises including Premier Energies and healthcare organizations'
    },
    {
      year: '2021',
      title: 'Technology Integration',
      description: 'Implemented modern workforce management systems and digital tracking for better service delivery'
    },
    {
      year: '2024',
      title: 'Continued Growth',
      description: 'Serving 50+ clients across Telangana with a team of 500+ trained professionals and expanding service portfolio'
    }
  ];

  const aboutSchema = {
    "@context": "https://schema.org",
    "@type": "AboutPage",
    "name": "About Sri Laxmi Ganapathi Enterprises",
    "url": "https://slg-enterprises.com/about",
    "description": "Learn about our journey since 2015, our mission, vision, values, and how we became a premier manpower and facility management agency in South India.",
    "mainEntity": {
      "@type": "Organization",
      "name": "Sri Laxmi Ganapathi Enterprises",
      "url": "https://slg-enterprises.com",
      "logo": "https://slg-enterprises.com/favicon.ico"
    }
  };

  return (
    <>
      <SEO 
        title="About Sri Laxmi Ganapathi Enterprises - Manpower Agency Hyderabad"
        description="Learn about SLG Enterprises, a premier manpower supply and facility management service provider in Hyderabad since 2015. Our mission, vision, and journey."
        keywords="about SLG Enterprises, manpower supply history Hyderabad, facility management company Telangana, staffing agency South India"
        schemaMarkup={aboutSchema}
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
              About Us
            </h1>
            <p className="text-xl text-blue-100 max-w-3xl mx-auto leading-relaxed">
              Discover our journey of excellence in manpower supply and facility management services
            </p>
            <div className="w-24 h-1 bg-gradient-to-r from-white to-blue-200 mx-auto rounded-full mt-6"></div>
          </div>
        </div>
      </section>

      {/* Company Timeline */}
      <section className="py-20 bg-gradient-to-br from-white via-blue-50 to-white relative overflow-hidden">
        {/* 3D Background Elements */}
        <div className="absolute inset-0">
          <div className="absolute top-1/4 left-20 w-32 h-32 bg-blue-200 bg-opacity-30 rounded-full blur-2xl animate-pulse"></div>
          <div className="absolute bottom-1/4 right-20 w-40 h-40 bg-indigo-200 bg-opacity-30 rounded-full blur-2xl animate-pulse" style={{animationDelay: '1s'}}></div>
        </div>
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center mb-16 animate-fade-in">
            <h2 className="text-4xl md:text-5xl font-bold text-corporate-grey-dark mb-6 bg-gradient-to-r from-corporate-blue to-indigo-600 bg-clip-text text-transparent">
              Our Journey of Excellence
            </h2>
            <p className="text-lg text-corporate-grey max-w-2xl mx-auto leading-relaxed">
              From a vision to transform manpower services to becoming the preferred partner for 500+ enterprises across diverse industries
            </p>
            <div className="w-24 h-1 bg-gradient-to-r from-corporate-blue to-indigo-600 mx-auto rounded-full mt-4"></div>
          </div>

          {/* Company Overview Cards */}
          <div className="grid md:grid-cols-3 gap-8 mb-16">
            <Card className="hover:shadow-2xl transition-all duration-500 transform hover:scale-105 bg-white/80 backdrop-blur-sm border-0">
              <CardContent className="p-6 text-center">
                <Target className="h-12 w-12 text-corporate-blue mx-auto mb-4" />
                <h3 className="text-xl font-bold text-corporate-grey-dark mb-2">Our Mission</h3>
                <p className="text-corporate-grey">To empower businesses with exceptional manpower solutions and comprehensive facility management services, enabling them to achieve operational excellence and sustainable growth.</p>
              </CardContent>
            </Card>
            
            <Card className="hover:shadow-2xl transition-all duration-500 transform hover:scale-105 bg-white/80 backdrop-blur-sm border-0">
              <CardContent className="p-6 text-center">
                <Eye className="h-12 w-12 text-corporate-blue mx-auto mb-4" />
                <h3 className="text-xl font-bold text-corporate-grey-dark mb-2">Our Vision</h3>
                <p className="text-corporate-grey">To be the most trusted and innovative manpower solutions partner across South India, setting industry benchmarks for quality, reliability, and customer excellence.</p>
              </CardContent>
            </Card>
            
            <Card className="hover:shadow-2xl transition-all duration-500 transform hover:scale-105 bg-white/80 backdrop-blur-sm border-0">
              <CardContent className="p-6 text-center">
                <User className="h-12 w-12 text-corporate-blue mx-auto mb-4" />
                <h3 className="text-xl font-bold text-corporate-grey-dark mb-2">Our Values</h3>
                <p className="text-corporate-grey">Excellence, integrity, innovation, customer-centricity, and continuous improvement form the foundation of our success and growth.</p>
              </CardContent>
            </Card>
          </div>

          <div className="relative">
            <div className="absolute left-1/2 transform -translate-x-1/2 w-1 h-full bg-gradient-to-b from-corporate-blue to-indigo-600 opacity-30"></div>
            
            {timeline.map((item, index) => (
              <div 
                key={index} 
                className={`relative flex items-center mb-12 animate-fade-in ${
                  index % 2 === 0 ? 'flex-row' : 'flex-row-reverse'
                }`}
                style={{ animationDelay: `${index * 0.2}s` }}
              >
                <div className={`w-1/2 ${index % 2 === 0 ? 'pr-8 text-right' : 'pl-8'}`}>
                  <Card className="hover:shadow-2xl transition-all duration-500 transform hover:scale-105 hover:rotate-1 bg-white/80 backdrop-blur-sm border-0">
                    <CardContent className="p-6">
                      <div className="flex items-center mb-2">
                        <Calendar className="h-5 w-5 text-corporate-blue mr-2" />
                        <span className="text-2xl font-bold text-corporate-blue">{item.year}</span>
                      </div>
                      <h3 className="text-xl font-semibold text-corporate-grey-dark mb-2">
                        {item.title}
                      </h3>
                      <p className="text-corporate-grey leading-relaxed">{item.description}</p>
                    </CardContent>
                  </Card>
                </div>
                
                <div className="absolute left-1/2 transform -translate-x-1/2 w-4 h-4 bg-gradient-to-r from-corporate-blue to-indigo-600 rounded-full border-4 border-white shadow-lg animate-pulse"></div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Mission and Vision */}
      <section className="py-20 bg-gradient-to-br from-gray-50 via-blue-50 to-white relative overflow-hidden">
        {/* 3D Background Elements */}
        <div className="absolute inset-0">
          <div className="absolute top-1/2 left-0 w-64 h-64 bg-blue-100 bg-opacity-40 rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute top-1/2 right-0 w-80 h-80 bg-indigo-100 bg-opacity-40 rounded-full blur-3xl animate-pulse" style={{animationDelay: '1.5s'}}></div>
        </div>
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid lg:grid-cols-2 gap-12">
            <Card className="animate-fade-in hover:shadow-2xl transition-all duration-500 transform hover:scale-105 hover:rotate-1 bg-white/70 backdrop-blur-sm border border-white/20 hover:border-blue-200/50">
              <CardContent className="p-8">
                <div className="flex items-center mb-6 transform group-hover:scale-110 transition-transform duration-300">
                  <div className="p-4 bg-gradient-to-br from-corporate-blue to-blue-600 rounded-2xl shadow-lg group-hover:shadow-2xl transition-all duration-300 mr-4">
                    <Target className="h-12 w-12 text-white" />
                  </div>
                  <h2 className="text-3xl font-bold text-corporate-grey-dark group-hover:text-corporate-blue transition-colors duration-300">Our Mission</h2>
                </div>
                <p className="text-lg text-corporate-grey leading-relaxed">
                  To provide exceptional manpower and facility management services that enable our clients 
                  to focus on their core business operations. We are committed to delivering reliable, 
                  skilled professionals who contribute to the success and growth of our partners.
                </p>
              </CardContent>
            </Card>

            <Card className="animate-fade-in hover:shadow-2xl transition-all duration-500 transform hover:scale-105 hover:rotate-1 bg-white/70 backdrop-blur-sm border border-white/20 hover:border-blue-200/50" style={{ animationDelay: '0.2s' }}>
              <CardContent className="p-8">
                <div className="flex items-center mb-6 transform group-hover:scale-110 transition-transform duration-300">
                  <div className="p-4 bg-gradient-to-br from-corporate-blue to-blue-600 rounded-2xl shadow-lg group-hover:shadow-2xl transition-all duration-300 mr-4">
                    <Eye className="h-12 w-12 text-white" />
                  </div>
                  <h2 className="text-3xl font-bold text-corporate-grey-dark group-hover:text-corporate-blue transition-colors duration-300">Our Vision</h2>
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



      {/* Location Info */}
      <section className="py-20 bg-gradient-to-br from-corporate-blue via-blue-600 to-indigo-700 text-white relative overflow-hidden">
        {/* 3D Background Elements */}
        <div className="absolute inset-0">
          <div className="absolute top-0 left-1/4 w-96 h-96 bg-white bg-opacity-10 rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute bottom-0 right-1/4 w-80 h-80 bg-blue-400 bg-opacity-20 rounded-full blur-3xl animate-pulse" style={{animationDelay: '1s'}}></div>
        </div>
        
        <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="animate-fade-in">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-white via-blue-100 to-white bg-clip-text text-transparent drop-shadow-2xl">
              Our Location
            </h2>
            <p className="text-xl text-blue-100 mb-10 leading-relaxed max-w-2xl mx-auto">
              Strategically located in Hyderabad, serving clients across Telangana and beyond
            </p>
            <div className="bg-white bg-opacity-10 rounded-2xl p-8 backdrop-blur-sm border border-white/20 transform hover:scale-105 transition-all duration-300">
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
