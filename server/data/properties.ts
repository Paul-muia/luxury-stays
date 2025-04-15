import { Property } from "@shared/schema";
import { images } from "./images";

// Define hosts
const hosts = [
  {
    id: 1,
    name: "Paul Mutuku",
    image: "https://randomuser.me/api/portraits/men/32.jpg",
    since: "2019",
    rating: 5.0,
    reviewCount: 245,
    isSuperhost: true,
    description: "Hello! I'm Paul, a dedicated host committed to ensuring you have an exceptional stay in Nairobi. I love sharing the best of what our beautiful city has to offer!",
    responseTime: "within an hour"
  },
  {
    id: 2,
    name: "Sarah Kimani",
    image: "https://randomuser.me/api/portraits/women/64.jpg",
    since: "2020",
    rating: 4.9,
    reviewCount: 178,
    isSuperhost: true,
    description: "Passionate about hospitality and creating beautiful spaces. I ensure all my properties offer the perfect blend of luxury and comfort for a memorable stay.",
    responseTime: "within a few hours"
  },
  {
    id: 3,
    name: "David Ochieng",
    image: "https://randomuser.me/api/portraits/men/22.jpg",
    since: "2018",
    rating: 4.8,
    reviewCount: 312,
    isSuperhost: true,
    description: "As a Nairobi native, I take pride in hosting visitors to our beautiful city. I'm always available to provide local recommendations and ensure a comfortable stay.",
    responseTime: "within an hour"
  }
];

// Sample reviews for each property
const reviews = [
  {
    id: 1,
    user: {
      name: "Sarah M.",
      image: "https://randomuser.me/api/portraits/women/24.jpg"
    },
    date: "2023-08-15",
    rating: 5,
    comment: "Absolutely stunning apartment with incredible views! The host was very responsive and accommodating. The rooftop pool was a highlight of our stay. Would definitely recommend!"
  },
  {
    id: 2,
    user: {
      name: "Michael T.",
      image: "https://randomuser.me/api/portraits/men/42.jpg"
    },
    date: "2023-07-20",
    rating: 4,
    comment: "Great location and beautiful space. The kitchen had everything we needed and the beds were very comfortable. The only small issue was that the AC in one bedroom wasn't working properly."
  },
  {
    id: 3,
    user: {
      name: "Jennifer L.",
      image: "https://randomuser.me/api/portraits/women/28.jpg"
    },
    date: "2023-06-05",
    rating: 5,
    comment: "Perfect in every way! The apartment was immaculate, stylishly furnished and in an excellent location. The host's recommendations for local restaurants were spot on."
  },
  {
    id: 4,
    user: {
      name: "Robert K.",
      image: "https://randomuser.me/api/portraits/men/36.jpg"
    },
    date: "2023-05-12",
    rating: 4,
    comment: "Very luxurious property with excellent amenities. We especially enjoyed the gym and pool facilities. The location is perfect for exploring Nairobi."
  },
  {
    id: 5,
    user: {
      name: "Emily W.",
      image: "https://randomuser.me/api/portraits/women/32.jpg"
    },
    date: "2023-04-18",
    rating: 5,
    comment: "This place exceeded our expectations! Everything was perfect from the comfortable beds to the stunning views. The host was incredibly helpful and responsive."
  }
];

// Common amenities across properties
const commonAmenities = [
  { id: 1, name: "High-speed Wi-Fi", icon: "fas fa-wifi" },
  { id: 2, name: "Fully equipped kitchen", icon: "fas fa-utensils" },
  { id: 3, name: "In-unit washer/dryer", icon: "fas fa-tshirt" },
  { id: 4, name: "Air conditioning", icon: "fas fa-snowflake" },
  { id: 5, name: "City view & balcony", icon: "fas fa-mountain" },
  { id: 6, name: "Free parking", icon: "fas fa-car" },
  { id: 7, name: "Smart TV & Netflix", icon: "fas fa-tv" },
  { id: 8, name: "Coffee machine", icon: "fas fa-coffee" },
  { id: 9, name: "Workspace/desk area", icon: "fas fa-laptop" },
  { id: 10, name: "24/7 security", icon: "fas fa-shield-alt" },
  { id: 11, name: "Keyless/self check-in", icon: "fas fa-key" },
  { id: 12, name: "Daily cleaning", icon: "fas fa-broom" },
  { id: 13, name: "Essentials provided", icon: "fas fa-shopping-basket" }
];

// Additional amenities for certain properties
const luxuryAmenities = [
  { id: 14, name: "Pool access", icon: "fas fa-swimming-pool" },
  { id: 15, name: "Gym access", icon: "fas fa-dumbbell" },
  { id: 16, name: "Spa access", icon: "fas fa-spa" },
  { id: 17, name: "Hot tub", icon: "fas fa-hot-tub" },
  { id: 18, name: "Rooftop terrace", icon: "fas fa-umbrella-beach" },
  { id: 19, name: "Private garden", icon: "fas fa-leaf" },
  { id: 20, name: "BBQ facilities", icon: "fas fa-fire" }
];

// Create 40 luxury properties
export const propertiesData: Property[] = [
  {
    id: 1,
    title: "Luxury Penthouse With City View",
    location: {
      area: "Westlands",
      city: "Nairobi",
      country: "Kenya"
    },
    price: 250,
    bedrooms: 3,
    bathrooms: 2,
    guests: 6,
    rating: 4.8,
    reviewCount: 24,
    description: "This stunning luxury penthouse offers breathtaking views of Nairobi's skyline and upscale amenities for the discerning traveler. Located in the heart of Westlands, you'll be just minutes away from high-end shopping, restaurants, and business centers. The spacious 3-bedroom layout features floor-to-ceiling windows, premium furnishings, and a private balcony perfect for morning coffee or evening cocktails as you take in the city lights. The gourmet kitchen is fully equipped with high-end appliances and everything you need to prepare delicious meals. Guests have access to the building's rooftop pool, fitness center, and 24-hour concierge service. Daily cleaning is included, and our team is available to assist with any requests to make your stay perfect.",
    amenities: [...commonAmenities, luxuryAmenities[0], luxuryAmenities[1], luxuryAmenities[4]],
    featured: true,
    type: "penthouse",
    images: images.slice(0, 5),
    host: hosts[0],
    reviews: reviews.slice(0, 5)
  },
  {
    id: 2,
    title: "Elegant Villa With Private Garden",
    location: {
      area: "Karen",
      city: "Nairobi",
      country: "Kenya"
    },
    price: 320,
    bedrooms: 4,
    bathrooms: 3,
    guests: 8,
    rating: 5.0,
    reviewCount: 18,
    description: "Escape to this magnificent villa nestled in the prestigious Karen neighborhood, offering privacy and tranquility while still being close to the city. Set on a beautifully landscaped property, this elegant 4-bedroom villa features a private garden, spacious living areas, and high-end finishes throughout. The fully-equipped chef's kitchen opens to a dining area perfect for entertaining, while the luxurious bedrooms ensure a restful night's sleep. Enjoy your morning coffee on the covered patio overlooking the garden, or unwind in the evening with a glass of wine by the outdoor fireplace. The villa includes daily housekeeping, and our dedicated house manager is available to arrange additional services such as private chefs, transportation, or guided excursions.",
    amenities: [...commonAmenities, luxuryAmenities[3], luxuryAmenities[5], luxuryAmenities[6]],
    featured: true,
    type: "villa",
    images: images.slice(5, 10),
    host: hosts[1],
    reviews: [reviews[1], reviews[3], reviews[4], reviews[0]]
  },
  {
    id: 3,
    title: "Modern Apartment With Pool Access",
    location: {
      area: "Kileleshwa",
      city: "Nairobi",
      country: "Kenya"
    },
    price: 180,
    bedrooms: 2,
    bathrooms: 2,
    guests: 4,
    rating: 4.7,
    reviewCount: 15,
    description: "Experience modern luxury in this stylish apartment located in the upscale Kileleshwa neighborhood. This contemporary 2-bedroom apartment offers the perfect blend of comfort and sophistication with its sleek design and high-quality furnishings. Enjoy cooking meals in the modern kitchen with premium appliances, or relax in the spacious living area with floor-to-ceiling windows that fill the space with natural light. The master suite features a king-sized bed and an ensuite bathroom with a rainfall shower, while the second bedroom offers two comfortable twin beds. Guests can take advantage of the building's amenities, including a swimming pool, fitness center, and rooftop lounge area with panoramic city views. Ideally located near restaurants, cafes, and shopping centers, this apartment provides a perfect base for exploring Nairobi.",
    amenities: [...commonAmenities, luxuryAmenities[0], luxuryAmenities[1]],
    featured: true,
    type: "apartment",
    images: images.slice(10, 15),
    host: hosts[2],
    reviews: [reviews[2], reviews[4], reviews[0]]
  },
  {
    id: 4,
    title: "Stylish Apartment in Westlands",
    location: {
      area: "Westlands",
      city: "Nairobi",
      country: "Kenya"
    },
    price: 150,
    bedrooms: 2,
    bathrooms: 1,
    guests: 3,
    rating: 4.5,
    reviewCount: 12,
    description: "This stylish apartment in Westlands offers modern comfort in one of Nairobi's most vibrant neighborhoods. The open-concept living space features contemporary furnishings and a fully equipped kitchen, perfect for both short and extended stays. Located within walking distance to shopping malls, restaurants, and nightlife, you'll have everything you need at your doorstep. The building offers secure parking and 24-hour security for peace of mind.",
    amenities: commonAmenities.slice(0, 10),
    featured: false,
    type: "apartment",
    images: images.slice(15, 19),
    host: hosts[0],
    reviews: [reviews[1], reviews[3]]
  },
  {
    id: 5,
    title: "Luxury Penthouse with Skyline View",
    location: {
      area: "Upper Hill",
      city: "Nairobi",
      country: "Kenya"
    },
    price: 280,
    bedrooms: 3,
    bathrooms: 2,
    guests: 6,
    rating: 4.9,
    reviewCount: 23,
    description: "Experience the height of luxury in this stunning penthouse apartment located in Upper Hill, Nairobi's financial district. Floor-to-ceiling windows showcase breathtaking views of the city skyline, while the spacious interior features high-end furnishings and premium finishes. The gourmet kitchen is equipped with top-of-the-line appliances, and the master suite includes a luxurious ensuite bathroom with a soaking tub. Building amenities include a concierge service, fitness center, and rooftop terrace.",
    amenities: [...commonAmenities, luxuryAmenities[1], luxuryAmenities[4]],
    featured: false,
    type: "penthouse",
    images: images.slice(19, 23),
    host: hosts[1],
    reviews: [reviews[0], reviews[2], reviews[4]]
  },
  // Continue with more properties...
  {
    id: 6,
    title: "Elegant Townhouse with Garden",
    location: {
      area: "Lavington",
      city: "Nairobi",
      country: "Kenya"
    },
    price: 220,
    bedrooms: 3,
    bathrooms: 2.5,
    guests: 5,
    rating: 4.8,
    reviewCount: 16,
    description: "This elegant townhouse in Lavington offers a perfect blend of luxury and comfort. The spacious three-level home features a private garden, modern kitchen, and three beautifully appointed bedrooms. Located in a secure, gated community, you'll enjoy peace and privacy while being just minutes from shopping centers and restaurants. The property includes daily housekeeping and a dedicated property manager to ensure your stay is perfect.",
    amenities: [...commonAmenities, luxuryAmenities[5], luxuryAmenities[6]],
    featured: false,
    type: "house",
    images: images.slice(23, 27),
    host: hosts[2],
    reviews: [reviews[3], reviews[1], reviews[4]]
  },
  {
    id: 7,
    title: "Modern Villa with Pool",
    location: {
      area: "Karen",
      city: "Nairobi",
      country: "Kenya"
    },
    price: 350,
    bedrooms: 4,
    bathrooms: 3,
    guests: 8,
    rating: 4.9,
    reviewCount: 29,
    description: "Set on a lush property in Karen, this modern villa offers luxury living surrounded by nature. The spacious home features an open floor plan, chef's kitchen, and four luxurious bedrooms. Outside, enjoy the private swimming pool, landscaped garden, and covered patio perfect for outdoor dining. The villa comes with a full staff including a housekeeper and gardener, and additional services such as a private chef can be arranged upon request.",
    amenities: [...commonAmenities, luxuryAmenities[0], luxuryAmenities[5], luxuryAmenities[6]],
    featured: false,
    type: "villa",
    images: images.slice(27, 31),
    host: hosts[0],
    reviews: [reviews[2], reviews[0], reviews[3]]
  },
  {
    id: 8,
    title: "Cozy Studio Apartment",
    location: {
      area: "Kilimani",
      city: "Nairobi",
      country: "Kenya"
    },
    price: 120,
    bedrooms: 1,
    bathrooms: 1,
    guests: 2,
    rating: 4.6,
    reviewCount: 8,
    description: "This cozy studio apartment offers a comfortable and affordable luxury option in the heart of Kilimani. The thoughtfully designed space includes a kitchenette, queen-sized bed, and a small dining area, all tastefully furnished with high-quality pieces. The building features a shared rooftop terrace where you can enjoy evening cocktails with views of the city. Perfect for solo travelers or couples looking for a central location at a great value.",
    amenities: commonAmenities.slice(0, 8),
    featured: false,
    type: "studio",
    images: images.slice(31, 35),
    host: hosts[1],
    reviews: [reviews[4], reviews[1]]
  },
  {
    id: 9,
    title: "Executive Apartment with Gym",
    location: {
      area: "Westlands",
      city: "Nairobi",
      country: "Kenya"
    },
    price: 190,
    bedrooms: 2,
    bathrooms: 2,
    guests: 4,
    rating: 4.7,
    reviewCount: 14,
    description: "Perfect for business travelers, this executive apartment in Westlands offers a comfortable and convenient stay. The two-bedroom unit features a well-equipped work area, high-speed internet, and modern furnishings throughout. Located in a secure building with amenities including a fitness center and business lounge, you'll have everything you need for a productive stay. The central location puts you within walking distance of corporate offices, restaurants, and shopping.",
    amenities: [...commonAmenities, luxuryAmenities[1]],
    featured: false,
    type: "apartment",
    images: images.slice(35, 39),
    host: hosts[2],
    reviews: [reviews[0], reviews[2], reviews[3]]
  },
  {
    id: 10,
    title: "Spacious Garden Cottage",
    location: {
      area: "Runda",
      city: "Nairobi",
      country: "Kenya"
    },
    price: 160,
    bedrooms: 2,
    bathrooms: 1,
    guests: 3,
    rating: 4.8,
    reviewCount: 19,
    description: "This charming garden cottage in Runda offers a peaceful retreat just a short drive from the city center. Set on a large property with mature gardens, the cottage features two comfortable bedrooms, a cozy living area, and a fully equipped kitchen. Enjoy your morning coffee on the private patio overlooking the garden, or take a walk through the quiet, tree-lined streets of this prestigious neighborhood. The cottage includes daily housekeeping and secure parking.",
    amenities: [...commonAmenities.slice(0, 9), luxuryAmenities[5]],
    featured: false,
    type: "house",
    images: images.slice(2, 7),
    host: hosts[0],
    reviews: [reviews[1], reviews[4], reviews[2]]
  },
  // Adding more properties to reach 40+...
  // I'll add properties 11-40 following the same pattern but with slight variations
];

// Generate additional properties to reach 40+ total
for (let i = 11; i <= 40; i++) {
  const propertyTypes = ["apartment", "villa", "penthouse", "house", "studio"];
  const areas = ["Westlands", "Karen", "Kileleshwa", "Lavington", "Runda", "Upper Hill", "Kilimani", "Muthaiga", "Spring Valley", "Kitisuru"];
  
  const randomType = propertyTypes[Math.floor(Math.random() * propertyTypes.length)];
  const randomArea = areas[Math.floor(Math.random() * areas.length)];
  const randomHost = hosts[Math.floor(Math.random() * hosts.length)];
  const randomBedrooms = Math.floor(Math.random() * 4) + 1; // 1-4 bedrooms
  const randomBathrooms = Math.floor(Math.random() * 3) + 1; // 1-3 bathrooms
  const randomGuests = randomBedrooms * 2; // 2 guests per bedroom
  const randomPrice = (Math.floor(Math.random() * 30) + 10) * 10; // $100-$390
  const randomRating = (Math.floor(Math.random() * 10) + 40) / 10; // 4.0-4.9
  const randomReviewCount = Math.floor(Math.random() * 30) + 5; // 5-34 reviews
  
  // Pick random amenities
  const randomAmenities = [...commonAmenities.slice(0, 8)];
  if (Math.random() > 0.5) {
    randomAmenities.push(luxuryAmenities[Math.floor(Math.random() * luxuryAmenities.length)]);
  }
  if (Math.random() > 0.7) {
    randomAmenities.push(luxuryAmenities[Math.floor(Math.random() * luxuryAmenities.length)]);
  }
  
  // Pick random images (reuse from previous properties)
  const startIndex = Math.floor(Math.random() * 30);
  const randomImages = images.slice(startIndex, startIndex + 4);
  
  // Pick random reviews (reuse from previous properties)
  const randomReviews = [];
  for (let j = 0; j < Math.min(3, randomReviewCount); j++) {
    randomReviews.push(reviews[Math.floor(Math.random() * reviews.length)]);
  }
  
  const property: Property = {
    id: i,
    title: `Luxury ${randomType === 'studio' ? 'Studio' : randomType.charAt(0).toUpperCase() + randomType.slice(1)} in ${randomArea}`,
    location: {
      area: randomArea,
      city: "Nairobi",
      country: "Kenya"
    },
    price: randomPrice,
    bedrooms: randomBedrooms,
    bathrooms: randomBathrooms,
    guests: randomGuests,
    rating: randomRating,
    reviewCount: randomReviewCount,
    description: `Experience luxury living in this beautiful ${randomType} located in the prestigious ${randomArea} area of Nairobi. Featuring ${randomBedrooms} spacious bedroom${randomBedrooms > 1 ? 's' : ''}, ${randomBathrooms} modern bathroom${randomBathrooms > 1 ? 's' : ''}, and high-end finishes throughout. The property offers all the amenities you need for a comfortable stay, including high-speed Wi-Fi, a fully equipped kitchen, and premium furnishings. Ideally located near restaurants, shops, and attractions, this is the perfect base for exploring all that Nairobi has to offer.`,
    amenities: randomAmenities,
    featured: false,
    type: randomType,
    images: randomImages,
    host: randomHost,
    reviews: randomReviews
  };
  
  propertiesData.push(property);
}
