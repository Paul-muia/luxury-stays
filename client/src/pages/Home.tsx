import HeroSection from "@/components/home/HeroSection";
import SearchSection from "@/components/home/SearchSection";
import FeaturedProperties from "@/components/home/FeaturedProperties";
import { Helmet } from "react-helmet";

const Home = () => {
  return (
    <>
      <Helmet>
        <title>Perfect Luxury Stays | High-End Properties in Nairobi</title>
        <meta name="description" content="Discover luxury short-term rentals in Nairobi with Perfect Luxury Stays. Browse our exclusive collection of high-end properties." />
      </Helmet>
      <div>
        <HeroSection />
        <SearchSection />
        <FeaturedProperties />
        
        {/* Email Subscription Section */}
        <section className="py-16 bg-primary text-white">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-6 font-display">Join Our Exclusive List</h2>
            <p className="text-lg mb-8 max-w-2xl mx-auto">
              Subscribe to receive updates on new properties, special offers, and luxury travel tips.
            </p>
            
            <div className="max-w-md mx-auto">
              <form className="flex flex-col md:flex-row gap-4">
                <input 
                  type="email" 
                  placeholder="Your email address" 
                  className="flex-grow py-3 px-4 rounded-md focus:outline-none focus:ring-2 focus:ring-secondary text-neutral-dark"
                />
                <button 
                  type="submit" 
                  className="bg-secondary hover:bg-secondary-light text-white py-3 px-6 rounded-md font-medium transition"
                >
                  Subscribe
                </button>
              </form>
              <p className="text-sm mt-4 text-neutral-light">
                We respect your privacy and will never share your information.
              </p>
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default Home;
