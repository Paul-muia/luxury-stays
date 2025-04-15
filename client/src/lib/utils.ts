import { type ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";
import { FilterOptions, Property } from "./types";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export function formatCurrency(amount: number): string {
  return new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'USD',
    minimumFractionDigits: 0,
    maximumFractionDigits: 0
  }).format(amount);
}

export function formatDate(dateString: string): string {
  const date = new Date(dateString);
  return new Intl.DateTimeFormat('en-US', {
    year: 'numeric',
    month: 'long',
    day: 'numeric'
  }).format(date);
}

export function calculateTotalPrice(
  pricePerNight: number,
  nights: number,
  cleaningFee: number = 80,
  serviceFee: number = 85
): number {
  return pricePerNight * nights + cleaningFee + serviceFee;
}

export function generateRatingStars(rating: number): { full: number; half: number; empty: number } {
  const fullStars = Math.floor(rating);
  const hasHalfStar = rating % 1 >= 0.5;
  const emptyStars = 5 - fullStars - (hasHalfStar ? 1 : 0);
  
  return {
    full: fullStars,
    half: hasHalfStar ? 1 : 0,
    empty: emptyStars
  };
}

export function filterProperties(
  properties: Property[],
  filters: FilterOptions
): Property[] {
  return properties.filter(property => {
    // Filter by location
    if (filters.location && property.location.area.toLowerCase() !== filters.location.toLowerCase()) {
      return false;
    }

    // Filter by property type
    if (filters.propertyType && property.type !== filters.propertyType) {
      return false;
    }

    // Filter by price range
    if (filters.priceRange) {
      if (filters.priceRange === '500+') {
        if (property.price < 500) return false;
      } else {
        const [min, max] = filters.priceRange.split('-').map(Number);
        if (property.price < min || property.price > max) return false;
      }
    }

    // Filter by bedrooms
    if (filters.bedrooms) {
      if (filters.bedrooms === '4+') {
        if (property.bedrooms < 4) return false;
      } else {
        if (property.bedrooms !== parseInt(filters.bedrooms)) return false;
      }
    }

    return true;
  });
}

export function calculateNights(checkin: string, checkout: string): number {
  if (!checkin || !checkout) return 0;
  
  const startDate = new Date(checkin);
  const endDate = new Date(checkout);
  
  const diffTime = Math.abs(endDate.getTime() - startDate.getTime());
  const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));
  
  return diffDays;
}

export function truncateText(text: string, maxLength: number): string {
  if (text.length <= maxLength) return text;
  return text.substring(0, maxLength) + '...';
}
