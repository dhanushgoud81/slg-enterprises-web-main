
import { ArrowRight, CheckCircle, Users, Shield, Clock, Award } from 'lucide-react';
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
  const heroImages = [
    
    {
      src: "/images/manpower.jpeg",
      alt: "Manpower Services"
    },
    {
      src: "/images/housekeeping.jpeg",
      alt: "Housekeeping Services"
    },
    {
      src: "/images/security.jpeg",
      alt: "Security Services"
    }
  ];
  const services = [
    {
      title: 'Manpower Supply',
      description: 'Skilled and reliable workforce for your business needs',
      image: '/images/manpower.jpeg',
      link: '/services/manpower'
    },
    {
      title: 'Landscaping',
      description: 'Professional garden and outdoor space maintenance',
      image: '/images/landscaping.jpeg',
      link: '/services/landscaping'
    },
    {
      title: 'Housekeeping',
      description: 'Comprehensive cleaning and maintenance services',
      image: '/images/housekeeping.jpeg',
      link: '/services/housekeeping'
    },
    {
      title: 'Security',
      description: 'Trained security personnel for your premises',
      image: '/images/security.jpeg',
      link: '/services/security'
    },
    {
      title: 'Office Boy',
      description: 'Administrative support and office assistance',
      image: '/images/office-boy.jpeg',
      link: '/services/office-boy'
    },
    {
      title: 'Non-Tech Team',
      description: 'Support staff for various operational needs',
      image: '/images/non-tech.jpeg',
      link: '/services/non-tech'
    }
  ];

  const whyChooseUs = [
    {
      icon: <CheckCircle className="h-12 w-12 text-corporate-blue" />,
      title: 'Reliability',
      description: 'Consistent and dependable service delivery since 2015'
    },
    {
      icon: <Users className="h-12 w-12 text-corporate-blue" />,
      title: 'Trained Staff',
      description: 'Well-trained professionals with extensive experience'
    },
    {
      icon: <Shield className="h-12 w-12 text-corporate-blue" />,
      title: 'Quality Assurance',
      description: 'Rigorous quality control and service standards'
    },
    {
      icon: <Clock className="h-12 w-12 text-corporate-blue" />,
      title: 'Flexible Contracts',
      description: 'Customizable service packages to meet your needs'
    },
    {
      icon: <Award className="h-12 w-12 text-corporate-blue" />,
      title: 'Excellence',
      description: 'Committed to delivering exceptional service quality'
    },
    {
      icon: <ArrowRight className="h-12 w-12 text-corporate-blue" />,
      title: '24/7 Support',
      description: 'Round-the-clock customer support and assistance'
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
      <section className="relative bg-gradient-to-br from-corporate-blue to-corporate-blue-dark text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="animate-fade-in">
              <h1 className="text-4xl md:text-6xl font-bold mb-6">
                Sri Laxmi Ganapathi Enterprises
              </h1>
              <p className="text-xl md:text-2xl mb-4 text-blue-100">
                Reliable Manpower and Maintenance Services Since 2015
              </p>
              <p className="text-lg mb-8 text-blue-200 max-w-lg">
                Your trusted partner for comprehensive manpower supply and facility management solutions. 
                We deliver quality services with trained professionals.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button
                  asChild
                  size="lg"
                  className="bg-white text-corporate-blue hover:bg-gray-100 font-semibold"
                >
                  <Link to="/services">
                    Explore Services <ArrowRight className="ml-2 h-5 w-5" />
                  </Link>
                </Button>
                <Button
                  size="lg"
                  variant="outline"
                  className="bg-white text-corporate-blue hover:bg-gray-100 font-semibold"
                  onClick={() => window.open('https://wa.me/918106206381', '_blank')}
                >
                  Contact Us
                </Button>
              </div>
            </div>
            <div className="animate-scale-in">
              <Carousel opts={{ 
                align: "center", 
                loop: true,
                duration: 40
              }} setApi={setCarouselApi}>
                <div className="relative">
                  <CarouselContent>
                    {heroImages.map((image, index) => (
                      <CarouselItem key={index}>
                        <img
                          src={image.src}
                          alt={image.alt}
                          className="rounded-lg shadow-2xl w-full aspect-[4/3] sm:aspect-[16/10] md:aspect-[16/9] object-cover"
                        />
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
      </section>

      {/* Services Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">Our Services</h2>
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {services.map((service, index) => (
              <Card key={index} className="overflow-hidden h-full">
                <div className="aspect-video relative overflow-hidden">
                  <img
                    src={service.image}
                    alt={service.title}
                    className="object-cover w-full h-full transition-transform hover:scale-105"
                  />
                </div>
                <CardContent className="p-4">
                  <h3 className="text-xl font-semibold mb-2">{service.title}</h3>
                  <p className="text-gray-600 mb-4">{service.description}</p>
                  <Link to={service.link}>
                    <Button variant="default" className="w-full">
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
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16 animate-fade-in">
            <h2 className="text-3xl md:text-4xl font-bold text-corporate-grey-dark mb-4">
              Why Choose Us
            </h2>
            <p className="text-lg text-corporate-grey max-w-2xl mx-auto">
              Experience the difference with our commitment to quality, reliability, and customer satisfaction
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {whyChooseUs.map((item, index) => (
              <div 
                key={index} 
                className="text-center p-6 rounded-lg hover:shadow-lg transition-shadow duration-300 animate-fade-in"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="flex justify-center mb-4">
                  {item.icon}
                </div>
                <h3 className="text-xl font-semibold text-corporate-grey-dark mb-2">
                  {item.title}
                </h3>
                <p className="text-corporate-grey">
                  {item.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-20 bg-corporate-blue text-white">
        <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 animate-fade-in">
            Ready to Get Started?
          </h2>
          <p className="text-xl mb-8 text-blue-100 animate-fade-in">
            Contact us today to discuss your manpower and facility management needs
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center animate-scale-in">
            <Button
              asChild
              size="lg"
              className="bg-white text-corporate-blue hover:bg-gray-100 font-semibold"
            >
              <Link to="/contact">
                Get in Touch <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="bg-white text-corporate-blue hover:bg-gray-100 font-semibold"
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
