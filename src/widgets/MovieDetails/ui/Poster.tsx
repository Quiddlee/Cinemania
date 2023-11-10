import { memo } from 'react';

interface IMoviePosterProps {
  poster: string;
  title: string;
}

const Poster = memo(function Poster({ poster, title }: IMoviePosterProps) {
  return (
    <img
      data-testid="details-poster"
      className="absolute h-full w-full rounded-4xl object-cover"
      src={poster}
      alt={`The poster of ${title} film`}
    />
  );
});

export default Poster;
