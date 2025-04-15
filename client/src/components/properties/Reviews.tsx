import { useState } from 'react';
import { Review } from '@/lib/types';
import { generateRatingStars, formatDate } from '@/lib/utils';

interface ReviewsProps {
  reviews: Review[];
  rating: number;
  reviewCount: number;
}

const Reviews = ({ reviews, rating, reviewCount }: ReviewsProps) => {
  const [showAllReviews, setShowAllReviews] = useState(false);
  
  const stars = generateRatingStars(rating);
  const displayedReviews = showAllReviews ? reviews : reviews.slice(0, 2);

  return (
    <div>
      <div className="flex items-center justify-between mb-6">
        <h2 className="text-2xl font-bold text-neutral-dark font-display">Reviews</h2>
        <div className="flex items-center">
          <div className="flex text-secondary mr-2">
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
          <span className="text-neutral-dark font-medium">{rating.toFixed(1)} ({reviewCount} reviews)</span>
        </div>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
        {displayedReviews.map((review) => (
          <div key={review.id} className="bg-neutral-50 p-4 rounded-lg">
            <div className="flex items-center mb-3">
              <img 
                src={review.user.image} 
                alt={review.user.name} 
                className="w-12 h-12 rounded-full object-cover mr-3" 
              />
              <div>
                <h4 className="font-bold">{review.user.name}</h4>
                <div className="text-sm text-neutral-dark">{formatDate(review.date)}</div>
              </div>
            </div>
            <div className="flex text-secondary text-sm mb-2">
              {[...Array(5)].map((_, i) => (
                <i 
                  key={i} 
                  className={`${i < review.rating ? 'fas' : 'far'} fa-star`}
                ></i>
              ))}
            </div>
            <p className="text-neutral-dark text-sm">{review.comment}</p>
          </div>
        ))}
      </div>
      
      {reviews.length > 2 && (
        <button 
          className="text-primary hover:text-secondary transition font-medium flex items-center"
          onClick={() => setShowAllReviews(!showAllReviews)}
        >
          <span>
            {showAllReviews 
              ? 'Show fewer reviews' 
              : `Read all ${reviewCount} reviews`}
          </span>
          <i className={`fas fa-chevron-${showAllReviews ? 'up' : 'right'} ml-2 text-sm`}></i>
        </button>
      )}
    </div>
  );
};

export default Reviews;
