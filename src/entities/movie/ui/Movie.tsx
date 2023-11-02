import { useCallback, useRef } from 'react';

import ReactLogo from '../../../assets/reactJS-logo.png';
import { MOVIE_PARAM, NOT_EXIST } from '../../../shared/const/const.ts';
import useRadialHover from '../../../shared/hooks/useRadialHover.ts';
import useUrl from '../../../shared/hooks/useUrl.ts';
import { Movie as MovieData } from '../../../shared/types/types.ts';

interface IMovieProps {
  data: MovieData;
  delay: number;
}

// TODO - divide the component into smaller ones

function Movie({ data, delay }: IMovieProps) {
  const containerRef = useRef<HTMLLIElement>(null);
  const { setUrl } = useUrl();
  const {
    handleMouseOut,
    handleMouseMove,
    containerRef: movieRef,
  } = useRadialHover<HTMLDivElement>();

  const { Poster, Title, Year, imdbID } = data;

  const poster = Poster === NOT_EXIST ? ReactLogo : Poster;
  const animationDelay = `0.${String(delay)}s`;

  const handleMovieClick = useCallback(() => {
    setUrl(MOVIE_PARAM, imdbID);
  }, [imdbID, setUrl]);

  return (
    // TODO - fix errors
    // eslint-disable-next-line jsx-a11y/click-events-have-key-events,jsx-a11y/no-noninteractive-element-interactions
    <li
      onClick={handleMovieClick}
      style={{
        animationDelay,
      }}
      ref={containerRef}
      className="w-64 animate-springish cursor-pointer overflow-hidden rounded-5xl bg-neutral-950 text-gray-100 transition-all duration-200">
      <div
        ref={movieRef}
        onMouseMove={handleMouseMove}
        onMouseOut={handleMouseOut}
        onBlur={handleMouseOut}
        className="h-full space-y-4 rounded-4xl p-2">
        <img
          className="h-80 w-full rounded-4xl object-cover"
          src={poster}
          alt={`The poster of ${Title} film`}
        />
        <article className="h-full p-4">
          <h2 className="truncate text-xl text-gray-100">{Title}</h2>
          <div className="mt-2 grid text-gray-400">
            <span>{Year}</span>
          </div>
        </article>
      </div>
    </li>
  );
}
export default Movie;
