import { useQuery } from '@tanstack/react-query';
import { Link } from 'wouter';
import PropertyCard from '@/components/properties/PropertyCard';
import { Property } from '@/lib/types';

const FeaturedProperties = () => {
  const { data: properties, isLoading } = useQuery<Property[]>({
    queryKey: ['/api/properties/featured'],
  });

  if (isLoading) {
    return (
      <section className="py-16" id="featured">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-neutral-dark mb-4 font-display">
              Featured Luxury Properties
            </h2>
            <p className="text-lg text-neutral-dark max-w-2xl mx-auto">
              Experience the finest accommodations Nairobi has to offer, handpicked for your comfort and satisfaction.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[...Array(3)].map((_, index) => (
              <div key={index} className="rounded-lg overflow-hidden shadow-lg bg-white h-96 animate-pulse">
                <div className="h-64 bg-gray-300"></div>
                <div className="p-6">
                  <div className="h-4 bg-gray-300 rounded w-3/4 mb-2"></div>
                  <div className="h-4 bg-gray-300 rounded w-1/2 mb-4"></div>
                  <div className="h-4 bg-gray-300 rounded w-full"></div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    );
  }

  return (
    <section className="py-16" id="featured">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-neutral-dark mb-4 font-display">
            Featured Luxury Properties
          </h2>
          <p className="text-lg text-neutral-dark max-w-2xl mx-auto">
            Experience the finest accommodations Nairobi has to offer, handpicked for your comfort and satisfaction.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {properties?.map(property => (
            <PropertyCard key={property.id} property={property} featured />
          ))}
        </div>
        
        <div className="text-center mt-12">
          <Link href="/properties">
            <a className="inline-block bg-primary hover:bg-primary-light text-white px-6 py-3 rounded-md font-medium transition">
              View All Properties
            </a>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default FeaturedProperties;
