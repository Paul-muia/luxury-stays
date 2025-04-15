import { Link } from 'wouter';
import { Property } from '@/lib/types';
import { formatCurrency, generateRatingStars } from '@/lib/utils';

interface PropertyCardProps {
  property: Property;
  featured?: boolean;
}

const PropertyCard = ({ property, featured = false }: PropertyCardProps) => {
  const { id, title, location, price, bedrooms, bathrooms, guests, rating, reviewCount, images } = property;
  const stars = generateRatingStars(rating);

  return (
    <div className="property-card rounded-lg overflow-hidden shadow-lg bg-white transition transform hover:-translate-y-1 hover:shadow-xl">
      <div className="relative">
        <img 
          src={images[0]?.url} 
          alt={title} 
          className="w-full h-64 object-cover"
        />
        {featured && (
          <div className="absolute top-0 right-0 bg-secondary text-white m-4 px-3 py-1 rounded-md font-medium">
            Featured
          </div>
        )}
        <Link href={`/property/${id}`}>
          <div className="property-overlay absolute inset-0 bg-black bg-opacity-25 opacity-0 transition-opacity flex items-center justify-center">
            <button className="bg-white hover:bg-neutral-light text-primary px-4 py-2 rounded-md font-medium transition">
              View Details
            </button>
          </div>
        </Link>
      </div>
      <div className="p-6">
        <div className="flex justify-between items-start mb-2">
          <h3 className="text-xl font-bold font-display">{title}</h3>
          <div className="text-secondary font-bold">
            {formatCurrency(price)}<span className="text-neutral-dark font-normal text-sm">/night</span>
          </div>
        </div>
        <p className="text-neutral-dark mb-4 text-sm">
          <i className="fas fa-map-marker-alt text-secondary mr-1"></i> {location.area}, {location.city}
        </p>
        <div className="flex justify-between text-sm mb-4">
          <span><i className="fas fa-bed text-primary mr-1"></i> {bedrooms} Bedroom{bedrooms !== 1 ? 's' : ''}</span>
          <span><i className="fas fa-bath text-primary mr-1"></i> {bathrooms} Bathroom{bathrooms !== 1 ? 's' : ''}</span>
          <span><i className="fas fa-users text-primary mr-1"></i> {guests} Guest{guests !== 1 ? 's' : ''}</span>
        </div>
        <div className="flex items-center">
          <div className="flex text-secondary">
            {[...Array(stars.full)].map((_, i) => (
              <i key={`star-full-${i}`} className="fas fa-star"></i>
            ))}
            {[...Array(stars.half)].map((_, i) => (
              <i key={`star-half-${i}`} className="fas fa-star-half-alt"></i>
            ))}
            {[...Array(stars.empty)].map((_, i) => (
              <i key={`star-empty-${i}`} className="far fa-star"></i>
            ))}
          </div>
          <span className="ml-2 text-sm text-neutral-dark">{rating.toFixed(1)} ({reviewCount} review{reviewCount !== 1 ? 's' : ''})</span>
        </div>
      </div>
    </div>
  );
};

export default PropertyCard;
