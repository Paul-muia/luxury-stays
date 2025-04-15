import { useState } from 'react';
import { Link, useLocation } from 'wouter';
import useMobile from '@/hooks/use-mobile';

const Header = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [location] = useLocation();
  const isMobile = useMobile();
  
  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen);
  };
  
  const closeMobileMenu = () => {
    setMobileMenuOpen(false);
  };

  return (
    <header className="bg-white shadow-md sticky top-0 z-50">
      <div className="container mx-auto px-4 py-4 flex items-center justify-between">
        <Link href="/">
          <a className="flex items-center">
            <h1 className="text-primary text-2xl md:text-3xl font-bold font-display">
              Perfect <span className="text-secondary">Luxury</span> Stays
            </h1>
          </a>
        </Link>
        
        <div className="hidden md:flex items-center space-x-6 text-neutral-dark">
          <Link href="/">
            <a className={`font-medium hover:text-secondary transition ${location === '/' ? 'text-secondary' : ''}`}>
              Home
            </a>
          </Link>
          <Link href="/properties">
            <a className={`font-medium hover:text-secondary transition ${location === '/properties' ? 'text-secondary' : ''}`}>
              Properties
            </a>
          </Link>
          <Link href="/about">
            <a className={`font-medium hover:text-secondary transition ${location === '/about' ? 'text-secondary' : ''}`}>
              About
            </a>
          </Link>
          <Link href="/contact">
            <a className={`font-medium hover:text-secondary transition ${location === '/contact' ? 'text-secondary' : ''}`}>
              Contact
            </a>
          </Link>
        </div>
        
        <div className="flex items-center space-x-4">
          <a href="#login" className="hidden md:block text-primary hover:text-secondary transition font-medium">Login</a>
          <a href="#signup" className="hidden md:block bg-primary hover:bg-primary-light text-white py-2 px-4 rounded-md transition font-medium">Sign Up</a>
          <button 
            className="md:hidden text-neutral-dark focus:outline-none" 
            onClick={toggleMobileMenu}
            aria-label="Toggle mobile menu"
          >
            <i className="fas fa-bars text-xl"></i>
          </button>
        </div>
      </div>
      
      {/* Mobile Menu */}
      <div className={`md:hidden bg-white ${mobileMenuOpen ? 'block' : 'hidden'}`}>
        <div className="container mx-auto px-4 py-3 flex flex-col space-y-3">
          <Link href="/">
            <a 
              className={`font-medium py-2 hover:text-secondary transition ${location === '/' ? 'text-secondary' : ''}`}
              onClick={closeMobileMenu}
            >
              Home
            </a>
          </Link>
          <Link href="/properties">
            <a 
              className={`font-medium py-2 hover:text-secondary transition ${location === '/properties' ? 'text-secondary' : ''}`}
              onClick={closeMobileMenu}
            >
              Properties
            </a>
          </Link>
          <Link href="/about">
            <a 
              className={`font-medium py-2 hover:text-secondary transition ${location === '/about' ? 'text-secondary' : ''}`}
              onClick={closeMobileMenu}
            >
              About
            </a>
          </Link>
          <Link href="/contact">
            <a 
              className={`font-medium py-2 hover:text-secondary transition ${location === '/contact' ? 'text-secondary' : ''}`}
              onClick={closeMobileMenu}
            >
              Contact
            </a>
          </Link>
          <div className="flex space-x-4 pt-2">
            <a href="#login" className="text-primary hover:text-secondary transition font-medium">Login</a>
            <a href="#signup" className="bg-primary hover:bg-primary-light text-white py-2 px-4 rounded-md transition font-medium">Sign Up</a>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
