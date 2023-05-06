import React from 'react';
import './starRating.css';

const StarRating = ({ rating }) => {
  const fullStars = Math.floor(rating);
  const hasHalfStar = rating % 1 !== 0;
  const emptyStars = 5 - fullStars - (hasHalfStar ? 1 : 0);

  return (
    <div className="star-rating">
      {[...Array(fullStars)].map((_, i) => (
        <span key={i} className="fa fa-star"></span>
      ))}
      {hasHalfStar && (
        <span className="fa fa-star-half"></span>
      )}
      {[...Array(emptyStars)].map((_, i) => (
        <span key={i} className="fa fa-star empty"></span>
      ))}
    </div>
  );
};

export default StarRating;
