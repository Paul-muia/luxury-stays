import { Amenity } from './types';

export const PROPERTY_TYPES = [
  { value: '', label: 'All Types' },
  { value: 'apartment', label: 'Apartment' },
  { value: 'villa', label: 'Villa' },
  { value: 'penthouse', label: 'Penthouse' },
  { value: 'house', label: 'House' },
  { value: 'studio', label: 'Studio' }
];

export const PRICE_RANGES = [
  { value: '', label: 'All Prices' },
  { value: '100-200', label: '$100 - $200' },
  { value: '200-300', label: '$200 - $300' },
  { value: '300-500', label: '$300 - $500' },
  { value: '500+', label: '$500+' }
];

export const BEDROOM_OPTIONS = [
  { value: '', label: 'All Bedrooms' },
  { value: '1', label: '1 Bedroom' },
  { value: '2', label: '2 Bedrooms' },
  { value: '3', label: '3 Bedrooms' },
  { value: '4+', label: '4+ Bedrooms' }
];

export const LOCATIONS = [
  { value: '', label: 'All Locations' },
  { value: 'westlands', label: 'Westlands' },
  { value: 'kileleshwa', label: 'Kileleshwa' },
  { value: 'lavington', label: 'Lavington' },
  { value: 'karen', label: 'Karen' },
  { value: 'runda', label: 'Runda' },
  { value: 'upperhill', label: 'Upper Hill' },
  { value: 'kilimani', label: 'Kilimani' }
];

export const GUEST_OPTIONS = [
  { value: '1', label: '1 Guest' },
  { value: '2', label: '2 Guests' },
  { value: '3', label: '3 Guests' },
  { value: '4', label: '4 Guests' },
  { value: '5', label: '5 Guests' },
  { value: '6', label: '6 Guests' },
  { value: '7', label: '7 Guests' },
  { value: '8', label: '8 Guests' },
  { value: '9', label: '9 Guests' },
  { value: '10+', label: '10+ Guests' }
];

export const AMENITIES: Amenity[] = [
  { id: 1, name: 'High-speed Wi-Fi', icon: 'fas fa-wifi' },
  { id: 2, name: 'Fully equipped kitchen', icon: 'fas fa-utensils' },
  { id: 3, name: 'In-unit washer/dryer', icon: 'fas fa-tshirt' },
  { id: 4, name: 'Air conditioning', icon: 'fas fa-snowflake' },
  { id: 5, name: 'City view & balcony', icon: 'fas fa-mountain' },
  { id: 6, name: 'Free parking', icon: 'fas fa-car' },
  { id: 7, name: 'Smart TV & Netflix', icon: 'fas fa-tv' },
  { id: 8, name: 'Coffee machine', icon: 'fas fa-coffee' },
  { id: 9, name: 'Workspace/desk area', icon: 'fas fa-laptop' },
  { id: 10, name: '24/7 security', icon: 'fas fa-shield-alt' },
  { id: 11, name: 'Keyless/self check-in', icon: 'fas fa-key' },
  { id: 12, name: 'Pool access', icon: 'fas fa-swimming-pool' },
  { id: 13, name: 'Gym access', icon: 'fas fa-dumbbell' },
  { id: 14, name: 'Daily cleaning', icon: 'fas fa-broom' },
  { id: 15, name: 'Essentials provided', icon: 'fas fa-shopping-basket' }
];

export const CONTACT_SUBJECTS = [
  { value: '', label: 'Select a subject' },
  { value: 'booking', label: 'Booking Inquiry' },
  { value: 'property', label: 'Property Information' },
  { value: 'service', label: 'Guest Services' },
  { value: 'feedback', label: 'Feedback' },
  { value: 'other', label: 'Other' }
];

export const LUXURY_PROPERTIES_IMAGES = [
  "https://images.unsplash.com/photo-1601918774946-25832a4be0d6?ixlib=rb-1.2.1&auto=format&fit=crop&w=1920&q=80",
  "https://images.unsplash.com/photo-1600566753086-00f18fb6b3ea?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&h=500&q=80",
  "https://images.unsplash.com/photo-1600585154084-4e5fe7c39198?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&h=500&q=80",
  "https://images.unsplash.com/photo-1567767292278-a4f21aa2d36e?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&h=500&q=80",
  "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&h=500&q=80",
  "https://images.unsplash.com/photo-1602343168117-bb8ffe3e2e9f?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&h=500&q=80"
];
