
import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Menu, X, MessageCircle, Building2, Phone, Mail } from 'lucide-react';

const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  const navItems = [
    { label: 'Home', path: '/' },
    { label: 'About', path: '/about' },
    { label: 'Services', path: '/services' },
    { label: 'Clients', path: '/clients' },
    { label: 'Contact', path: '/contact' },
  ];

  const isActive = (path: string) => location.pathname === path;

  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const isScrolled = window.scrollY > 10;
      setScrolled(isScrolled);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className={`sticky top-0 z-50 transition-all duration-500 ${
      scrolled 
        ? 'bg-white/95 backdrop-blur-md shadow-2xl border-b border-blue-100/50' 
        : 'bg-white/80 backdrop-blur-sm shadow-lg'
    }`}>
      <div className="absolute inset-x-0 bottom-0 h-[2px] bg-gradient-to-r from-blue-400/0 via-blue-400/40 to-blue-400/0 pointer-events-none"></div>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Top utility bar */}
        <div className="hidden lg:flex items-center justify-between py-1 text-xs text-corporate-grey">
          <div className="flex items-center gap-6">
            <button onClick={() => window.open('tel:+918106206381')} className="inline-flex items-center gap-2 hover:text-corporate-blue transition-colors">
              <Phone size={14} /> +91 8106206381
            </button>
            <button onClick={() => window.open('mailto:srilaxmiganapathi80960@gmail.com')} className="inline-flex items-center gap-2 hover:text-corporate-blue transition-colors">
              <Mail size={14} /> srilaxmiganapathi80960@gmail.com
            </button>
          </div>
          <div className="hidden lg:flex items-center gap-3 text-[11px] text-corporate-grey">
            <span className="inline-flex items-center gap-1 px-2 py-1 rounded-full bg-blue-50 text-corporate-blue border border-blue-100">Since 2015</span>
            <span className="inline-flex items-center gap-1 px-2 py-1 rounded-full bg-blue-50 text-corporate-blue border border-blue-100">Hyderabad & Telangana</span>
          </div>
        </div>
        <div className={`flex justify-between ${scrolled ? 'h-12' : 'h-16'} transition-all`}>
          <div className="flex items-center">
            <Link to="/" className="flex items-center space-x-3 group">
              <div className="relative">
                <div className={`${scrolled ? 'w-8 h-8' : 'w-10 h-10'} bg-gradient-to-br from-corporate-blue to-blue-600 rounded-2xl flex items-center justify-center shadow-lg group-hover:shadow-2xl transform group-hover:scale-110 group-hover:rotate-3 transition-all duration-300`}>
                  <Building2 className="h-5 w-5 text-white" />
                </div>
                <div className="absolute -inset-1 bg-gradient-to-r from-blue-400 to-indigo-500 rounded-2xl blur opacity-30 group-hover:opacity-50 transition-opacity duration-300"></div>
              </div>
              <div className="flex flex-col">
                <span className="font-bold text-base sm:text-lg text-corporate-blue group-hover:text-blue-600 transition-colors duration-300">
                  SLG Enterprises
                </span>
                <span className="text-xs text-corporate-grey font-medium hidden sm:block">
                  Since 2015
                </span>
              </div>
            </Link>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-4">
            {navItems.map((item) => (
              <Link
                key={item.path}
                to={item.path}
                className={`relative px-3 py-1 text-sm font-semibold transition-all duration-300 group ${
                  isActive(item.path)
                    ? 'text-corporate-blue'
                    : 'text-corporate-grey hover:text-corporate-blue'
                }`}
              >
                {item.label}
                <span className={`absolute bottom-0 left-0 w-full h-0.5 bg-gradient-to-r from-corporate-blue to-blue-600 transform transition-all duration-300 ${
                  isActive(item.path) 
                    ? 'scale-x-100' 
                    : 'scale-x-0 group-hover:scale-x-100'
                }`}></span>
                <span className={`absolute -bottom-1 left-1/2 w-1 h-1 bg-corporate-blue rounded-full transform -translate-x-1/2 transition-all duration-300 ${
                  isActive(item.path) 
                    ? 'scale-100 opacity-100' 
                    : 'scale-0 opacity-0 group-hover:scale-100 group-hover:opacity-100'
                }`}></span>
              </Link>
            ))}
            <div className="ml-3 flex items-center gap-2">
              <Button
                onClick={() => window.open('https://wa.me/918106206381', '_blank')}
                className="bg-gradient-to-r from-green-500 to-green-600 hover:from-green-600 hover:to-green-700 text-white font-semibold px-4 py-2 rounded-lg shadow-md hover:shadow-lg transform hover:scale-105 transition-all duration-300 border-0"
              >
                <MessageCircle className="h-4 w-4 mr-2" />
                WhatsApp
              </Button>
              <Button
                onClick={() => window.open('/contact', '_self')}
                className="bg-gradient-to-r from-corporate-blue to-blue-600 hover:from-blue-600 hover:to-corporate-blue text-white font-semibold px-4 py-2 rounded-lg shadow-md hover:shadow-lg transform hover:scale-105 transition-all duration-300 border-0"
              >
                Request Quote
              </Button>
            </div>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden flex items-center relative z-50">
            <Button
              variant="ghost"
              onClick={() => setIsOpen(!isOpen)}
              className="text-corporate-grey hover:text-corporate-blue hover:bg-blue-50 rounded-xl transition-all duration-300"
            >
              {isOpen ? (
                <X size={24} className="transform rotate-90 transition-transform duration-300" />
              ) : (
                <Menu size={24} className="transform rotate-0 transition-transform duration-300" />
              )}
            </Button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="md:hidden animate-fade-in">
            {/* Backdrop */}
            <div onClick={() => setIsOpen(false)} className="fixed inset-0 bg-black/20 z-40"></div>
            <div className="relative z-50 px-4 pt-4 pb-6 space-y-3 bg-white/95 border-t border-blue-100/50 rounded-b-2xl shadow-xl">
              {navItems.map((item, index) => (
                <Link
                  key={item.path}
                  to={item.path}
                  onClick={() => setIsOpen(false)}
                  className={`block px-4 py-4 rounded-xl text-base font-medium transition-all duration-300 transform hover:scale-105 ${
                    isActive(item.path)
                      ? 'text-corporate-blue bg-gradient-to-r from-blue-50 to-indigo-50 border-l-4 border-corporate-blue shadow-md'
                      : 'text-corporate-grey hover:text-corporate-blue hover:bg-blue-50/50'
                  }`}
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  {item.label}
                </Link>
              ))}
              <div className="pt-2 grid grid-cols-2 gap-2">
                <Button
                  onClick={() => window.open('https://wa.me/918106206381', '_blank')}
                  className="w-full bg-gradient-to-r from-green-500 to-green-600 hover:from-green-600 hover:to-green-700 text-white font-semibold py-3 rounded-xl shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300 border-0"
                >
                  <MessageCircle className="h-5 w-5 mr-2" />
                  WhatsApp Us
                </Button>
                <Button
                  onClick={() => { setIsOpen(false); window.location.href='/contact'; }}
                  className="w-full bg-gradient-to-r from-corporate-blue to-blue-600 hover:from-blue-600 hover:to-corporate-blue text-white font-semibold py-3 rounded-xl shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300 border-0"
                >
                  Request Quote
                </Button>
              </div>
              <div className="mt-3 text-xs text-corporate-grey flex items-center justify-between">
                <button onClick={() => window.open('tel:+918106206381')} className="inline-flex items-center gap-2 hover:text-corporate-blue transition-colors">
                  <Phone size={14} /> +91 8106206381
                </button>
                <button onClick={() => window.open('mailto:srilaxmiganapathi80960@gmail.com')} className="inline-flex items-center gap-2 hover:text-corporate-blue transition-colors">
                  <Mail size={14} /> Email
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navigation;
