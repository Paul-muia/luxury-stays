import { Link } from 'wouter';

const Footer = () => {
  return (
    <footer className="bg-primary text-white pt-16 pb-8">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          <div>
            <h3 className="text-2xl font-bold mb-4 font-display">
              Perfect <span className="text-secondary">Luxury</span> Stays
            </h3>
            <p className="text-white mb-6">
              Experience luxury short-term rentals in Nairobi's most prestigious neighborhoods.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-white hover:text-secondary transition">
                <i className="fab fa-facebook-f"></i>
              </a>
              <a href="#" className="text-white hover:text-secondary transition">
                <i className="fab fa-instagram"></i>
              </a>
              <a href="#" className="text-white hover:text-secondary transition">
                <i className="fab fa-twitter"></i>
              </a>
              <a href="#" className="text-white hover:text-secondary transition">
                <i className="fab fa-linkedin-in"></i>
              </a>
            </div>
          </div>
          
          <div>
            <h3 className="text-lg font-bold mb-4">Explore</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/">
                  <a className="text-white hover:text-secondary transition">Home</a>
                </Link>
              </li>
              <li>
                <Link href="/properties">
                  <a className="text-white hover:text-secondary transition">Properties</a>
                </Link>
              </li>
              <li>
                <Link href="/about">
                  <a className="text-white hover:text-secondary transition">About Us</a>
                </Link>
              </li>
              <li>
                <Link href="/contact">
                  <a className="text-white hover:text-secondary transition">Contact</a>
                </Link>
              </li>
              <li>
                <a href="#" className="text-white hover:text-secondary transition">Blog</a>
              </li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-lg font-bold mb-4">Locations</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/properties?location=westlands">
                  <a className="text-white hover:text-secondary transition">Westlands</a>
                </Link>
              </li>
              <li>
                <Link href="/properties?location=kileleshwa">
                  <a className="text-white hover:text-secondary transition">Kileleshwa</a>
                </Link>
              </li>
              <li>
                <Link href="/properties?location=lavington">
                  <a className="text-white hover:text-secondary transition">Lavington</a>
                </Link>
              </li>
              <li>
                <Link href="/properties?location=karen">
                  <a className="text-white hover:text-secondary transition">Karen</a>
                </Link>
              </li>
              <li>
                <Link href="/properties?location=runda">
                  <a className="text-white hover:text-secondary transition">Runda</a>
                </Link>
              </li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-lg font-bold mb-4">Contact</h3>
            <ul className="space-y-2">
              <li className="flex items-center">
                <i className="fas fa-phone mr-2 text-secondary"></i>
                <a href="tel:+254727283836" className="text-white hover:text-secondary transition">+254 727 283 836</a>
              </li>
              <li className="flex items-center">
                <i className="fas fa-envelope mr-2 text-secondary"></i>
                <a href="mailto:paulmutukumuia@gmail.com" className="text-white hover:text-secondary transition">paulmutukumuia@gmail.com</a>
              </li>
              <li className="flex items-center">
                <i className="fas fa-map-marker-alt mr-2 text-secondary"></i>
                <span className="text-white">Westlands, Nairobi, Kenya</span>
              </li>
              <li className="flex items-center pt-2">
                <i className="fab fa-whatsapp mr-2 text-secondary"></i>
                <a href="https://wa.me/254727283836" target="_blank" rel="noopener noreferrer" className="text-white hover:text-secondary transition">WhatsApp Chat</a>
              </li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-gray-700 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-white mb-4 md:mb-0">&copy; {new Date().getFullYear()} Perfect Luxury Stays. All rights reserved.</p>
            <div className="flex space-x-6">
              <a href="#" className="text-white hover:text-secondary transition text-sm">Privacy Policy</a>
              <a href="#" className="text-white hover:text-secondary transition text-sm">Terms of Service</a>
              <a href="#" className="text-white hover:text-secondary transition text-sm">Cookie Policy</a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
