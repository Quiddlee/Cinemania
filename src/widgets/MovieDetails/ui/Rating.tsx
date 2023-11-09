interface IMovieRating {
  rating: string;
  votes: string;
}

function Rating({ rating, votes }: IMovieRating) {
  return (
    <span data-testid="details-rating">
      ⭐{rating}10 | 🍿{votes}
    </span>
  );
}

export default Rating;
