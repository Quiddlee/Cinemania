import { memo } from 'react';

interface IMovieRating {
  rating: string;
  votes: string;
}

const Rating = memo(function Rating({ rating, votes }: IMovieRating) {
  return (
    <span data-testid="details-rating">
      ⭐{rating}/10 | 🍿{votes}
    </span>
  );
});

export default Rating;
