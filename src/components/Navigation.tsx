
import { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Menu, X } from 'lucide-react';

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

  return (
    <nav className="bg-white shadow-lg sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex items-center">
            <Link to="/" className="flex items-center space-x-2">
              <div className="w-10 h-10 bg-corporate-blue rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-lg">SLG</span>
              </div>
              <span className="font-bold text-xl text-corporate-blue">
                Sri Laxmi Ganapathi Enterprises
              </span>
            </Link>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {navItems.map((item) => (
              <Link
                key={item.path}
                to={item.path}
                className={`px-3 py-2 rounded-md text-sm font-medium transition-colors ${
                  isActive(item.path)
                    ? 'text-corporate-blue border-b-2 border-corporate-blue'
                    : 'text-corporate-grey hover:text-corporate-blue'
                }`}
              >
                {item.label}
              </Link>
            ))}
            <Button
              onClick={() => window.open('https://wa.me/918106206381', '_blank')}
              className="bg-green-500 hover:bg-green-600 text-white"
            >
              WhatsApp
            </Button>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden flex items-center">
            <Button
              variant="ghost"
              onClick={() => setIsOpen(!isOpen)}
              className="text-corporate-grey"
            >
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </Button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="md:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-white border-t">
              {navItems.map((item) => (
                <Link
                  key={item.path}
                  to={item.path}
                  onClick={() => setIsOpen(false)}
                  className={`block px-3 py-2 rounded-md text-base font-medium ${
                    isActive(item.path)
                      ? 'text-corporate-blue bg-corporate-grey-light'
                      : 'text-corporate-grey hover:text-corporate-blue hover:bg-corporate-grey-light'
                  }`}
                >
                  {item.label}
                </Link>
              ))}
              <Button
                onClick={() => window.open('https://wa.me/918106206381', '_blank')}
                className="w-full mt-4 bg-green-500 hover:bg-green-600 text-white"
              >
                WhatsApp
              </Button>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navigation;
