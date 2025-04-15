import { Link } from 'wouter';

const AboutSection = () => {
  return (
    <section className="py-16 bg-neutral-50" id="about">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-3xl md:text-4xl font-bold text-primary mb-6 font-display">About Perfect Luxury Stays</h2>
            <p className="text-lg text-neutral-dark mb-6">
              Founded in 2019, Perfect Luxury Stays was born from a passion for exceptional hospitality and a desire to showcase the very best of Nairobi's luxury accommodation options.
            </p>
            <p className="text-lg text-neutral-dark mb-6">
              Our curated collection of over 40 properties represents the pinnacle of comfort, style, and service. Each property is personally vetted by our team to ensure it meets our exacting standards.
            </p>
            <p className="text-lg text-neutral-dark mb-8">
              We believe that where you stay is more than just accommodation—it's an integral part of your travel experience. Our mission is to provide travelers with extraordinary spaces that enhance their journey and create lasting memories.
            </p>
            <div className="flex flex-wrap gap-4">
              <Link href="/properties">
                <a className="bg-secondary hover:bg-secondary-light text-white px-6 py-3 rounded-md font-medium transition">
                  Browse Our Properties
                </a>
              </Link>
              <Link href="/contact">
                <a className="border border-primary text-primary hover:bg-primary hover:text-white px-6 py-3 rounded-md font-medium transition">
                  Contact Us
                </a>
              </Link>
            </div>
          </div>
          
          <div className="relative">
            <div className="absolute top-0 left-0 w-2/3 h-2/3 bg-primary rounded-lg transform -translate-x-4 -translate-y-4 -z-10"></div>
            <div className="absolute bottom-0 right-0 w-2/3 h-2/3 bg-secondary rounded-lg transform translate-x-4 translate-y-4 -z-10"></div>
            <img 
              src="https://images.unsplash.com/photo-1539922631499-09155cc609a4?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&h=1000&q=80" 
              alt="About Perfect Luxury Stays" 
              className="w-full h-auto rounded-lg shadow-xl relative z-10"
            />
          </div>
        </div>
        
        <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="bg-white p-6 rounded-lg shadow-md">
            <div className="text-secondary text-4xl mb-4"><i className="fas fa-gem"></i></div>
            <h3 className="text-xl font-bold text-neutral-dark mb-3 font-display">Premium Selection</h3>
            <p className="text-neutral-dark">
              Each property in our collection is handpicked for its exceptional quality, unique character, and outstanding amenities.
            </p>
          </div>
          
          <div className="bg-white p-6 rounded-lg shadow-md">
            <div className="text-secondary text-4xl mb-4"><i className="fas fa-concierge-bell"></i></div>
            <h3 className="text-xl font-bold text-neutral-dark mb-3 font-display">Personalized Service</h3>
            <p className="text-neutral-dark">
              Our dedicated concierge team is available 24/7 to ensure your stay exceeds expectations and to address any needs.
            </p>
          </div>
          
          <div className="bg-white p-6 rounded-lg shadow-md">
            <div className="text-secondary text-4xl mb-4"><i className="fas fa-map-marked-alt"></i></div>
            <h3 className="text-xl font-bold text-neutral-dark mb-3 font-display">Local Expertise</h3>
            <p className="text-neutral-dark">
              Benefit from our deep knowledge of Nairobi and access to exclusive experiences, restaurants, and attractions.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
