import { memo } from 'react';

import Image, { StaticImageData } from 'next/image';

interface IMoviePosterProps {
  poster: string | StaticImageData;
  title: string;
}

const Poster = memo(function Poster({ poster, title }: IMoviePosterProps) {
  return (
    <Image
      width="0"
      height="0"
      sizes="100vw"
      data-testid="details-poster"
      className="absolute h-full w-full rounded-4xl object-cover"
      src={poster}
      alt={`The poster of ${title} film`}
    />
  );
});

export default Poster;
