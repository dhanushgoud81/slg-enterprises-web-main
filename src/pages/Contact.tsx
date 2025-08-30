
import React, { useState } from 'react';
import { MapPin, Phone, Mail, Clock, Send, Users, Shield } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { useToast } from '@/hooks/use-toast';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import WhatsAppFloat from '@/components/WhatsAppFloat';
import ScrollToTop from '../components/ScrollToTop';

const Contact = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    service: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate form submission
    await new Promise(resolve => setTimeout(resolve, 1000));

    toast({
      title: "Message Sent!",
      description: "Thank you for your inquiry. We'll get back to you within 24 hours.",
    });

    setFormData({
      name: '',
      email: '',
      phone: '',
      service: '',
      message: ''
    });
    setIsSubmitting(false);
  };

  const contactInfo = [
    {
      icon: <Phone className="h-6 w-6" />,
      title: 'Phone Numbers',
      details: ['+91 8106206381', '+91 9676621758'],
      action: () => window.open('tel:+918106206381')
    },
    {
      icon: <Mail className="h-6 w-6" />,
      title: 'Email Address',
      details: ['srilaxmiganapathi80960@gmail.com', 'info@slgenterprises.com'],
      action: () => window.open('mailto:srilaxmiganapathi80960@gmail.com')
    },
    {
      icon: <MapPin className="h-6 w-6" />,
      title: 'Office Location',
      details: ['Hyderabad, Telangana', 'India'],
      action: () => {}
    },
    {
      icon: <Clock className="h-6 w-6" />,
      title: 'Business Hours',
      details: ['Mon - Fri: 9:00 AM - 6:00 PM', 'Sat: 9:00 AM - 2:00 PM', 'Emergency: 24/7'],
      action: () => {}
    }
  ];

  return (
    <>
      <ScrollToTop />
      <div className="min-h-screen bg-white">
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
                Contact Us
              </h1>
              <p className="text-xl text-blue-100 max-w-3xl mx-auto leading-relaxed">
                Ready to transform your business with exceptional manpower solutions? Let's discuss how we can drive your success
              </p>
              <div className="w-24 h-1 bg-gradient-to-r from-white to-blue-200 mx-auto rounded-full mt-6"></div>
            </div>
          </div>
        </section>

        {/* Contact Information */}
        <section className="py-20 bg-gradient-to-br from-gray-50 via-white to-gray-100 relative overflow-hidden">
          {/* 3D Background Elements */}
          <div className="absolute inset-0">
            <div className="absolute top-20 left-10 w-32 h-32 bg-blue-200 bg-opacity-30 rounded-full blur-2xl animate-pulse"></div>
            <div className="absolute bottom-20 right-10 w-40 h-40 bg-green-200 bg-opacity-30 rounded-full blur-2xl animate-pulse" style={{animationDelay: '1s'}}></div>
          </div>
          
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
            <div className="text-center mb-16 animate-fade-in">
              <h2 className="text-4xl md:text-5xl font-bold text-corporate-grey-dark mb-6 bg-gradient-to-r from-corporate-blue to-blue-600 bg-clip-text text-transparent">
                Get In Touch
              </h2>
              <p className="text-lg text-corporate-grey max-w-2xl mx-auto leading-relaxed">
                Connect with our expert team to explore customized solutions that align with your business objectives and growth strategies
              </p>
              <div className="w-24 h-1 bg-gradient-to-r from-corporate-blue to-blue-600 mx-auto rounded-full mt-4"></div>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
              {contactInfo.map((info, index) => (
                <Card 
                  key={index} 
                  className="text-center hover:shadow-2xl transition-all duration-500 cursor-pointer animate-fade-in transform hover:scale-105 hover:rotate-1 bg-white/80 backdrop-blur-sm border border-white/20 hover:border-blue-200/50"
                  style={{ 
                    animationDelay: `${index * 0.1}s`,
                    transformStyle: 'preserve-3d'
                  }}
                  onClick={info.action}
                >
                  <CardContent className="p-6">
                    <div className="flex justify-center mb-4 transform group-hover:scale-110 transition-transform duration-300">
                      <div className="p-4 bg-gradient-to-br from-corporate-blue to-blue-600 rounded-2xl shadow-lg group-hover:shadow-2xl transition-all duration-300">
                        {React.cloneElement(info.icon, { className: 'h-6 w-6 text-white' })}
                      </div>
                    </div>
                    <h3 className="text-lg font-semibold text-corporate-grey-dark mb-3 group-hover:text-corporate-blue transition-colors duration-300">
                      {info.title}
                    </h3>
                    {info.details.map((detail, idx) => (
                      <p key={idx} className="text-corporate-grey text-sm leading-relaxed">
                        {detail}
                      </p>
                    ))}
                  </CardContent>
                </Card>
              ))}
            </div>

            {/* Contact Form and Map */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12">
              {/* Contact Form */}
              <Card className="animate-fade-in transform hover:scale-[1.02] transition-all duration-500 bg-white/90 backdrop-blur-sm border border-white/20 hover:border-blue-200/50 shadow-xl hover:shadow-2xl">
                <CardContent className="p-8">
                  <h3 className="text-2xl font-bold text-corporate-grey-dark mb-6 bg-gradient-to-r from-corporate-blue to-blue-600 bg-clip-text text-transparent">
                    Send us a Message
                  </h3>
                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div>
                        <label htmlFor="name" className="block text-sm font-medium text-corporate-grey-dark mb-2">
                          Full Name *
                        </label>
                        <Input
                          id="name"
                          name="name"
                          type="text"
                          required
                          value={formData.name}
                          onChange={handleInputChange}
                          placeholder="Your full name"
                          className="w-full border-gray-200 focus:border-corporate-blue focus:ring-2 focus:ring-corporate-blue/20 transition-all duration-300 rounded-xl"
                        />
                      </div>
                      <div>
                        <label htmlFor="phone" className="block text-sm font-medium text-corporate-grey-dark mb-2">
                          Phone Number *
                        </label>
                        <Input
                          id="phone"
                          name="phone"
                          type="tel"
                          required
                          value={formData.phone}
                          onChange={handleInputChange}
                          placeholder="Your phone number"
                          className="w-full border-gray-200 focus:border-corporate-blue focus:ring-2 focus:ring-corporate-blue/20 transition-all duration-300 rounded-xl"
                        />
                      </div>
                    </div>

                    <div>
                      <label htmlFor="email" className="block text-sm font-medium text-corporate-grey-dark mb-2">
                        Email Address *
                      </label>
                      <Input
                        id="email"
                        name="email"
                        type="email"
                        required
                        value={formData.email}
                        onChange={handleInputChange}
                        placeholder="your.email@example.com"
                        className="w-full border-gray-200 focus:border-corporate-blue focus:ring-2 focus:ring-corporate-blue/20 transition-all duration-300 rounded-xl"
                      />
                    </div>

                    <div>
                      <label htmlFor="service" className="block text-sm font-medium text-corporate-grey-dark mb-2">
                        Service Interest
                      </label>
                      <select
                        id="service"
                        name="service"
                        value={formData.service}
                        onChange={handleInputChange}
                        className="w-full p-3 border border-gray-200 rounded-xl focus:ring-2 focus:ring-corporate-blue/20 focus:border-corporate-blue transition-all duration-300"
                      >
                        <option value="">Select a service</option>
                        <option value="manpower">Manpower Supply</option>
                        <option value="landscaping">Landscaping</option>
                        <option value="housekeeping">Housekeeping</option>
                        <option value="security">Security</option>
                        <option value="office-boy">Office Boy</option>
                        <option value="non-tech">Non-Tech Team</option>
                        <option value="custom">Custom Solution</option>
                      </select>
                    </div>

                    <div>
                      <label htmlFor="message" className="block text-sm font-medium text-corporate-grey-dark mb-2">
                        Message *
                      </label>
                      <Textarea
                        id="message"
                        name="message"
                        required
                        value={formData.message}
                        onChange={handleInputChange}
                        placeholder="Tell us about your requirements..."
                        rows={5}
                        className="w-full border-gray-200 focus:border-corporate-blue focus:ring-2 focus:ring-corporate-blue/20 transition-all duration-300 rounded-xl resize-none"
                      />
                    </div>

                    <div className="flex flex-col sm:flex-row gap-4">
                      <Button
                        type="submit"
                        disabled={isSubmitting}
                        className="flex-1 bg-gradient-to-r from-corporate-blue to-blue-600 hover:from-blue-600 hover:to-corporate-blue text-white font-semibold py-3 rounded-xl shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300 border-0"
                      >
                        {isSubmitting ? 'Sending...' : 'Send Message'}
                        <Send className="ml-2 h-4 w-4" />
                      </Button>
                      <Button
                        type="button"
                        variant="outline"
                        className="flex-1 border-2 border-green-500 text-green-600 hover:bg-green-50 font-semibold py-3 rounded-xl shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300"
                        onClick={() => window.open('https://wa.me/918106206381?text=Hello! I would like to discuss my service requirements.', '_blank')}
                      >
                        WhatsApp Chat
                      </Button>
                    </div>
                  </form>
                </CardContent>
              </Card>

              {/* Map */}
              <Card className="animate-fade-in transform hover:scale-[1.02] transition-all duration-500 bg-white/90 backdrop-blur-sm border border-white/20 hover:border-blue-200/50 shadow-xl hover:shadow-2xl" style={{ animationDelay: '0.2s' }}>
                <CardContent className="p-0 h-full">
                  <div className="h-full min-h-[500px] bg-gradient-to-br from-gray-50 to-blue-50 rounded-lg flex items-center justify-center relative overflow-hidden">
                    {/* 3D Background Elements */}
                    <div className="absolute inset-0">
                      <div className="absolute top-10 left-10 w-20 h-20 bg-blue-200 bg-opacity-30 rounded-full blur-xl animate-pulse"></div>
                      <div className="absolute bottom-10 right-10 w-24 h-24 bg-indigo-200 bg-opacity-30 rounded-full blur-xl animate-pulse" style={{animationDelay: '1s'}}></div>
                    </div>
                    
                    <div className="text-center relative z-10">
                      <div className="p-6 bg-gradient-to-br from-corporate-blue to-blue-600 rounded-2xl shadow-xl mb-6 transform hover:scale-110 transition-transform duration-300">
                        <MapPin className="h-16 w-16 text-white mx-auto" />
                      </div>
                      <h3 className="text-2xl font-bold text-corporate-grey-dark mb-3 bg-gradient-to-r from-corporate-blue to-blue-600 bg-clip-text text-transparent">
                        Our Location
                      </h3>
                      <p className="text-corporate-grey mb-6 text-lg leading-relaxed">
                        Hyderabad, Telangana<br />
                        India
                      </p>
                      <Button
                        variant="outline"
                        className="border-2 border-corporate-blue text-corporate-blue hover:bg-corporate-blue hover:text-white font-semibold px-6 py-3 rounded-xl shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300"
                        onClick={() => window.open('https://maps.google.com/?q=Hyderabad,Telangana', '_blank')}
                      >
                        View on Google Maps
                      </Button>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* Business Information */}
        <section className="py-16 bg-gradient-to-br from-gray-50 to-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-corporate-grey-dark mb-4">
                Why Choose SLG Enterprises?
              </h2>
              <p className="text-lg text-corporate-grey max-w-3xl mx-auto">
                We understand the importance of reliable manpower and facility management services for your business success
              </p>
            </div>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              <Card className="hover:shadow-xl transition-all duration-300 transform hover:scale-105">
                <CardContent className="p-6 text-center">
                  <div className="w-16 h-16 bg-corporate-blue rounded-full flex items-center justify-center mx-auto mb-4">
                    <Users className="h-8 w-8 text-white" />
                  </div>
                  <h3 className="text-xl font-semibold text-corporate-grey-dark mb-2">Experienced Team</h3>
                  <p className="text-corporate-grey">Our team of 500+ professionals brings years of industry experience and specialized training to every project.</p>
                </CardContent>
              </Card>
              
              <Card className="hover:shadow-xl transition-all duration-300 transform hover:scale-105">
                <CardContent className="p-6 text-center">
                  <div className="w-16 h-16 bg-corporate-blue rounded-full flex items-center justify-center mx-auto mb-4">
                    <Shield className="h-8 w-8 text-white" />
                  </div>
                  <h3 className="text-xl font-semibold text-corporate-grey-dark mb-2">Quality Assurance</h3>
                  <p className="text-corporate-grey">We maintain strict quality standards with regular audits, training programs, and performance monitoring.</p>
                </CardContent>
              </Card>
              
              <Card className="hover:shadow-xl transition-all duration-300 transform hover:scale-105">
                <CardContent className="p-6 text-center">
                  <div className="w-16 h-16 bg-corporate-blue rounded-full flex items-center justify-center mx-auto mb-4">
                    <Clock className="h-8 w-8 text-white" />
                  </div>
                  <h3 className="text-xl font-semibold text-corporate-grey-dark mb-2">24/7 Support</h3>
                  <p className="text-corporate-grey">Round-the-clock customer support and emergency response services to ensure your business continuity.</p>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* Quick Contact */}
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
                Need Immediate Assistance?
              </h2>
              <p className="text-xl text-blue-100 mb-10 leading-relaxed max-w-2xl mx-auto">
                Our team is ready to help you with urgent requirements
              </p>
              <div className="flex flex-col sm:flex-row gap-6 justify-center">
                <Button
                  size="lg"
                  className="bg-white text-corporate-blue hover:bg-gray-100 font-semibold transform hover:scale-105 hover:shadow-2xl transition-all duration-300 rounded-xl shadow-lg px-8 py-4"
                  onClick={() => window.open('tel:+918106206381')}
                >
                  Call Now: 8106206381
                </Button>
                <Button
                  size="lg"
                  variant="outline"
                  className="bg-white text-corporate-blue hover:bg-gray-100 font-semibold transform hover:scale-105 hover:shadow-2xl transition-all duration-300 rounded-xl shadow-lg px-8 py-4 border-2"
                  onClick={() => window.open('https://wa.me/918106206381?text=I need immediate assistance with my requirements.', '_blank')}
                >
                  WhatsApp Now
                </Button>
              </div>
            </div>
          </div>
        </section>

        <Footer />
        <WhatsAppFloat />
      </div>
    </>
  );
};

export default Contact;
