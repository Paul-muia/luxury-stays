import { useState } from 'react';
import { Amenity } from '@/lib/types';

interface PropertyAmenitiesProps {
  amenities: Amenity[];
}

const PropertyAmenities = ({ amenities }: PropertyAmenitiesProps) => {
  const [showAll, setShowAll] = useState(false);
  
  const displayedAmenities = showAll ? amenities : amenities.slice(0, 9);

  return (
    <div className="mb-10">
      <h2 className="text-2xl font-bold text-neutral-dark mb-4 font-display">Amenities</h2>
      <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
        {displayedAmenities.map((amenity) => (
          <div key={amenity.id} className="flex items-center amenity-icon p-2">
            <i className={`${amenity.icon} text-secondary text-lg mr-3`}></i>
            <span>{amenity.name}</span>
          </div>
        ))}
      </div>
      
      {amenities.length > 9 && (
        <button 
          className="mt-4 text-primary hover:text-secondary transition font-medium flex items-center"
          onClick={() => setShowAll(!showAll)}
        >
          <span>
            {showAll ? 'Show fewer amenities' : `Show all ${amenities.length} amenities`}
          </span>
          <i className={`fas fa-chevron-${showAll ? 'up' : 'right'} ml-2 text-sm`}></i>
        </button>
      )}
    </div>
  );
};

export default PropertyAmenities;
