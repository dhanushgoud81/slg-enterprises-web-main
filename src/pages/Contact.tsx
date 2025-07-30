
import { useState } from 'react';
import { MapPin, Phone, Mail, Clock, Send } from 'lucide-react';
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
      details: ['8106206381', '9676621758'],
      action: () => window.open('tel:+918106206381')
    },
    {
      icon: <Mail className="h-6 w-6" />,
      title: 'Email Address',
      details: ['srilaxmiganapathi80960@gmail.com'],
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
      details: ['Mon - Fri: 9:00 AM - 6:00 PM', 'Sat: 9:00 AM - 2:00 PM'],
      action: () => {}
    }
  ];

  return (
    <>
      <ScrollToTop />
      <div className="min-h-screen bg-white">
        <Navigation />
        
        {/* Hero Section */}
        <section className="relative bg-gradient-to-br from-corporate-blue to-corporate-blue-dark text-white py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center animate-fade-in">
              <h1 className="text-4xl md:text-5xl font-bold mb-6">Contact Us</h1>
              <p className="text-xl text-blue-100 max-w-3xl mx-auto">
                Get in touch with us to discuss your manpower and facility management requirements
              </p>
            </div>
          </div>
        </section>

        {/* Contact Information */}
        <section className="py-20 bg-corporate-grey-light">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16 animate-fade-in">
              <h2 className="text-3xl md:text-4xl font-bold text-corporate-grey-dark mb-4">
                Get In Touch
              </h2>
              <p className="text-lg text-corporate-grey max-w-2xl mx-auto">
                We're here to help you with all your staffing and facility management needs
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
              {contactInfo.map((info, index) => (
                <Card 
                  key={index} 
                  className="text-center hover:shadow-lg transition-shadow duration-300 cursor-pointer animate-fade-in"
                  style={{ animationDelay: `${index * 0.1}s` }}
                  onClick={info.action}
                >
                  <CardContent className="p-6">
                    <div className="flex justify-center mb-4">
                      <div className="w-12 h-12 bg-corporate-blue bg-opacity-10 rounded-lg flex items-center justify-center text-corporate-blue">
                        {info.icon}
                      </div>
                    </div>
                    <h3 className="text-lg font-semibold text-corporate-grey-dark mb-2">
                      {info.title}
                    </h3>
                    {info.details.map((detail, idx) => (
                      <p key={idx} className="text-corporate-grey text-sm">
                        {detail}
                      </p>
                    ))}
                  </CardContent>
                </Card>
              ))}
            </div>

            {/* Contact Form and Map */}
            <div className="grid lg:grid-cols-2 gap-12">
              {/* Contact Form */}
              <Card className="animate-fade-in">
                <CardContent className="p-8">
                  <h3 className="text-2xl font-bold text-corporate-grey-dark mb-6">
                    Send us a Message
                  </h3>
                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div className="grid md:grid-cols-2 gap-4">
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
                          className="w-full"
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
                          className="w-full"
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
                        className="w-full"
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
                        className="w-full p-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-corporate-blue focus:border-transparent"
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
                        className="w-full"
                      />
                    </div>

                    <div className="flex flex-col sm:flex-row gap-4">
                      <Button
                        type="submit"
                        disabled={isSubmitting}
                        className="flex-1 bg-corporate-blue hover:bg-corporate-blue-dark"
                      >
                        {isSubmitting ? 'Sending...' : 'Send Message'}
                        <Send className="ml-2 h-4 w-4" />
                      </Button>
                      <Button
                        type="button"
                        variant="outline"
                        className="flex-1 border-green-500 text-green-600 hover:bg-green-50"
                        onClick={() => window.open('https://wa.me/918106206381?text=Hello! I would like to discuss my service requirements.', '_blank')}
                      >
                        WhatsApp Chat
                      </Button>
                    </div>
                  </form>
                </CardContent>
              </Card>

              {/* Map */}
              <Card className="animate-fade-in" style={{ animationDelay: '0.2s' }}>
                <CardContent className="p-0 h-full">
                  <div className="h-full min-h-[500px] bg-corporate-grey-light rounded-lg flex items-center justify-center">
                    <div className="text-center">
                      <MapPin className="h-16 w-16 text-corporate-blue mx-auto mb-4" />
                      <h3 className="text-xl font-semibold text-corporate-grey-dark mb-2">
                        Our Location
                      </h3>
                      <p className="text-corporate-grey mb-4">
                        Hyderabad, Telangana<br />
                        India
                      </p>
                      <Button
                        variant="outline"
                        className="border-corporate-blue text-corporate-blue hover:bg-corporate-blue hover:text-white"
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

        {/* Quick Contact */}
        <section className="py-20 bg-corporate-blue text-white">
          <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
            <div className="animate-fade-in">
              <h2 className="text-3xl md:text-4xl font-bold mb-6">
                Need Immediate Assistance?
              </h2>
              <p className="text-xl text-blue-100 mb-8">
                Our team is ready to help you with urgent requirements
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button
                  size="lg"
                  className="bg-white text-corporate-blue hover:bg-gray-100 font-semibold"
                  onClick={() => window.open('tel:+918106206381')}
                >
                  Call Now: 8106206381
                </Button>
                <Button
                  size="lg"
                  variant="outline"
                  className="bg-white text-corporate-blue hover:bg-gray-100 font-semibold"
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
