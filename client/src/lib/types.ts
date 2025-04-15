export interface Property {
  id: number;
  title: string;
  location: {
    area: string;
    city: string;
    country: string;
  };
  price: number;
  bedrooms: number;
  bathrooms: number;
  guests: number;
  rating: number;
  reviewCount: number;
  images: Image[];
  description: string;
  amenities: Amenity[];
  featured: boolean;
  type: PropertyType;
  host: Host;
  reviews: Review[];
}

export interface Image {
  id: number;
  url: string;
  caption: string;
}

export interface Amenity {
  id: number;
  name: string;
  icon: string;
}

export interface Host {
  id: number;
  name: string;
  image: string;
  since: string;
  rating: number;
  reviewCount: number;
  isSuperhost: boolean;
  description: string;
  responseTime: string;
}

export interface Review {
  id: number;
  user: {
    name: string;
    image: string;
  };
  date: string;
  rating: number;
  comment: string;
}

export type PropertyType = 'apartment' | 'villa' | 'penthouse' | 'house' | 'studio';

export interface BookingDetails {
  checkin: string;
  checkout: string;
  guests: number;
  price: number;
  cleaningFee: number;
  serviceFee: number;
  totalNights: number;
  totalPrice: number;
}

export interface ContactFormData {
  name: string;
  email: string;
  phone: string;
  subject: string;
  message: string;
}

export interface FilterOptions {
  location: string;
  propertyType: string;
  priceRange: string;
  bedrooms: string;
}
