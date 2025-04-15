import { useState } from 'react';
import { Link } from 'wouter';
import { useQuery } from '@tanstack/react-query';
import { Property } from '@/lib/types';
import { formatCurrency, generateRatingStars } from '@/lib/utils';
import ImageGallery from './ImageGallery';
import PropertyAmenities from './PropertyAmenities';
import Reviews from './Reviews';
import SimilarProperties from './SimilarProperties';

interface PropertyDetailProps {
  propertyId: string;
}

const PropertyDetail = ({ propertyId }: PropertyDetailProps) => {
  const { data: property, isLoading, error } = useQuery<Property>({
    queryKey: [`/api/properties/${propertyId}`],
  });

  const [checkin, setCheckin] = useState('');
  const [checkout, setCheckout] = useState('');
  const [guests, setGuests] = useState('2');

  if (isLoading) {
    return (
      <div className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="animate-pulse">
            <div className="h-8 bg-gray-300 rounded w-40 mb-8"></div>
            <div className="h-10 bg-gray-300 rounded w-3/4 mb-2"></div>
            <div className="h-6 bg-gray-300 rounded w-1/2 mb-6"></div>
            
            <div className="bg-gray-300 h-[400px] w-full rounded-lg mb-12"></div>
            
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
              <div className="lg:col-span-2">
                <div className="h-8 bg-gray-300 rounded w-40 mb-4"></div>
                <div className="h-4 bg-gray-300 rounded w-full mb-2"></div>
                <div className="h-4 bg-gray-300 rounded w-full mb-2"></div>
                <div className="h-4 bg-gray-300 rounded w-full mb-8"></div>
              </div>
              <div className="lg:col-span-1">
                <div className="bg-gray-300 h-96 rounded-lg"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }

  if (error || !property) {
    return (
      <div className="py-16 bg-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-2xl font-bold text-primary mb-4">Property Not Found</h2>
          <p className="text-neutral-dark mb-6">The property you're looking for could not be found or may have been removed.</p>
          <Link href="/properties">
            <a className="bg-primary hover:bg-primary-light text-white px-6 py-3 rounded-md transition">
              Browse All Properties
            </a>
          </Link>
        </div>
      </div>
    );
  }

  const stars = generateRatingStars(property.rating);

  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <div className="mb-8">
          <Link href="/properties">
            <a className="text-primary hover:text-secondary transition flex items-center font-medium">
              <i className="fas fa-arrow-left mr-2"></i> Back to All Properties
            </a>
          </Link>
        </div>
        
        <div className="flex flex-col lg:flex-row justify-between mb-6">
          <div>
            <h1 className="text-3xl md:text-4xl font-bold text-neutral-dark mb-2 font-display">{property.title}</h1>
            <p className="text-lg text-neutral-dark mb-2">
              <i className="fas fa-map-marker-alt text-secondary mr-1"></i> 
              {property.location.area}, {property.location.city}, {property.location.country}
            </p>
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
              <span className="ml-2 text-neutral-dark">{property.rating.toFixed(1)} ({property.reviewCount} reviews)</span>
            </div>
          </div>
          
          <div className="mt-6 lg:mt-0">
            <div className="text-3xl font-bold text-secondary mb-2">
              {formatCurrency(property.price)}<span className="text-neutral-dark font-normal text-lg">/night</span>
            </div>
            <div className="flex space-x-3">
              <button className="bg-primary hover:bg-primary-light text-white px-4 py-2 rounded-md font-medium transition">
                Book Now
              </button>
              <a href="https://wa.me/254727283836" target="_blank" rel="noopener noreferrer" className="border border-primary text-primary hover:bg-primary hover:text-white px-4 py-2 rounded-md font-medium transition flex items-center">
                <i className="fab fa-whatsapp mr-2"></i> Contact Host
              </a>
            </div>
          </div>
        </div>
        
        {/* Image Gallery */}
        <ImageGallery images={property.images} />
        
        {/* Property Details */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-12">
          <div className="lg:col-span-2">
            <div className="mb-10">
              <h2 className="text-2xl font-bold text-neutral-dark mb-4 font-display">About This Property</h2>
              <p className="text-neutral-dark mb-4">{property.description}</p>
            </div>
            
            {/* Amenities */}
            <PropertyAmenities amenities={property.amenities} />
            
            {/* Location */}
            <div className="mb-10">
              <h2 className="text-2xl font-bold text-neutral-dark mb-4 font-display">Location</h2>
              <div className="h-[300px] w-full bg-neutral rounded-lg overflow-hidden relative">
                {/* Map would go here - simple placeholder for now */}
                <div className="absolute inset-0 flex items-center justify-center bg-neutral-light">
                  <i className="fas fa-map-marker-alt text-secondary text-5xl"></i>
                  <span className="ml-2">{property.location.area}, {property.location.city}</span>
                </div>
              </div>
              <p className="mt-4 text-neutral-dark">
                Located in {property.location.area}, one of {property.location.city}'s most prestigious neighborhoods. 
                Walking distance to shops, restaurants, and nightlife.
              </p>
            </div>
            
            {/* Reviews */}
            <Reviews reviews={property.reviews} rating={property.rating} reviewCount={property.reviewCount} />
          </div>
          
          {/* Sidebar - Booking Form & Host Info */}
          <div className="lg:col-span-1">
            {/* Booking Form */}
            <div className="bg-white rounded-lg shadow-lg p-6 mb-8 sticky top-24">
              <h3 className="text-xl font-bold text-neutral-dark mb-4 font-display">Book Your Stay</h3>
              
              <div className="mb-4">
                <label htmlFor="booking-checkin" className="block text-sm font-medium text-neutral-dark mb-1">Check In</label>
                <input 
                  type="date" 
                  id="booking-checkin" 
                  value={checkin}
                  onChange={(e) => setCheckin(e.target.value)}
                  className="w-full p-3 border border-neutral rounded-md focus:ring-2 focus:ring-secondary focus:border-secondary"
                />
              </div>
              
              <div className="mb-4">
                <label htmlFor="booking-checkout" className="block text-sm font-medium text-neutral-dark mb-1">Check Out</label>
                <input 
                  type="date" 
                  id="booking-checkout" 
                  value={checkout}
                  onChange={(e) => setCheckout(e.target.value)}
                  className="w-full p-3 border border-neutral rounded-md focus:ring-2 focus:ring-secondary focus:border-secondary"
                />
              </div>
              
              <div className="mb-6">
                <label htmlFor="booking-guests" className="block text-sm font-medium text-neutral-dark mb-1">Guests</label>
                <select 
                  id="booking-guests" 
                  value={guests}
                  onChange={(e) => setGuests(e.target.value)}
                  className="w-full p-3 border border-neutral rounded-md focus:ring-2 focus:ring-secondary focus:border-secondary"
                >
                  {[...Array(property.guests)].map((_, i) => (
                    <option key={i + 1} value={i + 1}>{i + 1} Guest{i !== 0 ? 's' : ''}</option>
                  ))}
                </select>
              </div>
              
              <div className="border-t border-neutral pt-4 mb-4">
                <div className="flex justify-between mb-2">
                  <span>{formatCurrency(property.price)} x 5 nights</span>
                  <span>{formatCurrency(property.price * 5)}</span>
                </div>
                <div className="flex justify-between mb-2">
                  <span>Service fee</span>
                  <span>{formatCurrency(85)}</span>
                </div>
              </div>
              
              <div className="border-t border-neutral pt-4 mb-6">
                <div className="flex justify-between font-bold">
                  <span>Total</span>
                  <span>{formatCurrency(property.price * 5 + 85)}</span>
                </div>
              </div>
              
              <button className="w-full bg-secondary hover:bg-secondary-light text-white py-3 rounded-md font-medium transition mb-4">
                Reserve Now
              </button>
              
              <p className="text-center text-sm text-neutral-dark">You won't be charged yet</p>
            </div>
            
            {/* Host Info */}
            <div className="bg-white rounded-lg shadow-lg p-6">
              <h3 className="text-xl font-bold text-neutral-dark mb-4 font-display">Meet Your Host</h3>
              
              <div className="flex items-center mb-4">
                <img 
                  src={property.host.image} 
                  alt={property.host.name} 
                  className="w-16 h-16 rounded-full object-cover mr-4"
                />
                <div>
                  <h4 className="font-bold text-lg">{property.host.name}</h4>
                  <p className="text-neutral-dark text-sm">Host since {property.host.since}</p>
                </div>
              </div>
              
              <div className="flex items-center space-x-3 mb-4">
                <div className="flex text-secondary text-sm">
                  {[...Array(5)].map((_, i) => (
                    <i key={i} className="fas fa-star"></i>
                  ))}
                </div>
                <span className="text-sm text-neutral-dark">{property.host.reviewCount} reviews</span>
                {property.host.isSuperhost && (
                  <span className="text-sm text-neutral-dark">• Superhost</span>
                )}
              </div>
              
              <p className="text-neutral-dark mb-4 text-sm">{property.host.description}</p>
              
              <div className="mb-4">
                <div className="mb-2 flex items-center">
                  <i className="fas fa-check-circle text-green-500 mr-2"></i>
                  <span className="text-neutral-dark text-sm">Identity verified</span>
                </div>
                <div className="mb-2 flex items-center">
                  <i className="fas fa-bolt text-secondary mr-2"></i>
                  <span className="text-neutral-dark text-sm">Response time: {property.host.responseTime}</span>
                </div>
              </div>
              
              <div className="flex space-x-2">
                <a href="tel:+254727283836" className="flex-1 bg-white border border-primary text-primary hover:bg-primary hover:text-white py-2 rounded-md font-medium transition text-center flex items-center justify-center">
                  <i className="fas fa-phone mr-2"></i> Call
                </a>
                <a href="https://wa.me/254727283836" target="_blank" rel="noopener noreferrer" className="flex-1 bg-white border border-green-600 text-green-600 hover:bg-green-600 hover:text-white py-2 rounded-md font-medium transition text-center flex items-center justify-center">
                  <i className="fab fa-whatsapp mr-2"></i> WhatsApp
                </a>
              </div>
            </div>
          </div>
        </div>
        
        {/* Similar Properties */}
        <SimilarProperties currentPropertyId={property.id} />
      </div>
    </section>
  );
};

export default PropertyDetail;
