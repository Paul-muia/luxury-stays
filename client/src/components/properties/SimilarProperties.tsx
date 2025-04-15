import { useQuery } from '@tanstack/react-query';
import PropertyCard from './PropertyCard';
import { Property } from '@/lib/types';

interface SimilarPropertiesProps {
  currentPropertyId: number;
}

const SimilarProperties = ({ currentPropertyId }: SimilarPropertiesProps) => {
  const { data: similarProperties, isLoading } = useQuery<Property[]>({
    queryKey: [`/api/properties/${currentPropertyId}/similar`],
  });

  if (isLoading) {
    return (
      <div>
        <h2 className="text-2xl font-bold text-neutral-dark mb-6 font-display">You May Also Like</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {[...Array(3)].map((_, index) => (
            <div key={index} className="rounded-lg overflow-hidden shadow-md bg-white h-80 animate-pulse">
              <div className="h-48 bg-gray-300"></div>
              <div className="p-4">
                <div className="h-4 bg-gray-300 rounded w-3/4 mb-2"></div>
                <div className="h-4 bg-gray-300 rounded w-1/2"></div>
              </div>
            </div>
          ))}
        </div>
      </div>
    );
  }

  if (!similarProperties || similarProperties.length === 0) {
    return null;
  }

  return (
    <div>
      <h2 className="text-2xl font-bold text-neutral-dark mb-6 font-display">You May Also Like</h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {similarProperties.map(property => (
          <PropertyCard key={property.id} property={property} />
        ))}
      </div>
    </div>
  );
};

export default SimilarProperties;
