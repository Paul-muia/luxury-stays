import { Link } from 'wouter';
import { LUXURY_PROPERTIES_IMAGES } from '@/lib/constants';

const HeroSection = () => {
  return (
    <section 
      className="relative h-[70vh] bg-cover bg-center" 
      style={{ backgroundImage: `url('${LUXURY_PROPERTIES_IMAGES[0]}')` }}
    >
      <div className="absolute inset-0 bg-black bg-opacity-40"></div>
      <div className="container mx-auto px-4 h-full flex items-center relative z-10">
        <div className="max-w-3xl">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-4 font-display leading-tight">
            Experience Luxury in Every Stay
          </h1>
          <p className="text-xl text-white mb-8 max-w-2xl">
            Discover our collection of 40+ high-end properties throughout Nairobi designed for the discerning traveler.
          </p>
          <div className="flex flex-wrap gap-4">
            <Link href="/properties">
              <a className="bg-secondary hover:bg-secondary-light text-white px-6 py-3 rounded-md font-medium transition">
                Browse Properties
              </a>
            </Link>
            <Link href="/contact">
              <a className="bg-white hover:bg-neutral text-primary px-6 py-3 rounded-md font-medium transition">
                Contact Us
              </a>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
