import { memo, MouseEvent } from 'react';

import Image from 'next/image';
import Link from 'next/link';

import ReactLogo from '@assets/reactJS-logo.png';
import { Movie as TMovie } from '@customTypes/types';
import { NOT_EXIST } from '@shared/const/const';
import useRadialHover from '@shared/hooks/useRadialHover';

interface IMovieProps {
  data: TMovie;
  delay: number;
  onMouseMove: (e: MouseEvent) => void;
  onMouseOut: () => void;
}

const Movie = memo(function Movie({
  data,
  delay,
  onMouseMove,
  onMouseOut,
}: IMovieProps) {
  const { handleMouseOut, handleMouseMove, containerRef } =
    useRadialHover<HTMLDivElement>();
  const { Poster, Title, Year, imdbID } = data;

  const poster = Poster === NOT_EXIST ? ReactLogo : Poster;
  const animationDelay = `0.${String(delay)}s`;
  // const isDetailsClose = pathname.slice(1) === '';

  return (
    <Link data-testid="movie-item" href={`/${imdbID}`}>
      <li
        data-testid="movie"
        style={{
          animationDelay,
          viewTransitionName: `movie-${imdbID}`,
        }}
        className="w-64 animate-springish cursor-pointer overflow-hidden rounded-5xl bg-neutral-950 text-gray-100 transition-all duration-200">
        <div
          ref={containerRef}
          onMouseMove={handleMouseMove}
          onMouseEnter={onMouseMove}
          onMouseLeave={() => {
            handleMouseOut();
            onMouseOut();
          }}
          onBlur={handleMouseOut}
          className="h-full space-y-4 rounded-4xl p-2">
          <Image
            width="0"
            height="0"
            sizes="100vw"
            data-testid="movie-poster"
            className="h-80 w-full rounded-4xl object-cover"
            src={poster}
            alt={`The poster of ${Title} film`}
          />
          <article className="h-full p-4">
            <h2
              data-testid="movie-title"
              className="truncate text-xl text-gray-100">
              {Title}
            </h2>
            <div className="mt-2 grid text-gray-400">
              <span data-testid="movie-year">{Year}</span>
            </div>
          </article>
        </div>
      </li>
    </Link>
  );
});
export default Movie;
