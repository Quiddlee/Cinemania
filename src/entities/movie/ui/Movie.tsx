import { MouseEvent } from 'react';

import ReactLogo from '../../../assets/reactJS-logo.png';
import { NOT_EXIST } from '../../../shared/const/const.ts';
import useRadialHover from '../../../shared/hooks/useRadialHover.ts';
import { Movie as MovieData } from '../../../shared/types/types.ts';
import LinkWithQuery from '../../../shared/ui/LinkWithQuery.tsx';

interface IMovieProps {
  data: MovieData;
  delay: number;
  onMouseIn: (e: MouseEvent) => void;
  onMouseOut: () => void;
}

function Movie({ data, delay, onMouseIn, onMouseOut }: IMovieProps) {
  const { handleMouseOut, handleMouseMove, containerRef } =
    useRadialHover<HTMLDivElement>();

  const { Poster, Title, Year, imdbID } = data;

  const poster = Poster === NOT_EXIST ? ReactLogo : Poster;
  const animationDelay = `0.${String(delay)}s`;

  return (
    <LinkWithQuery to={`/${imdbID}`}>
      <li
        style={{
          animationDelay,
        }}
        className="w-64 animate-springish cursor-pointer overflow-hidden rounded-5xl bg-neutral-950 text-gray-100 transition-all duration-200">
        <div
          ref={containerRef}
          onMouseMove={(e) => {
            handleMouseMove(e);
            onMouseIn(e);
          }}
          onMouseOut={() => {
            handleMouseOut();
            onMouseOut();
          }}
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
    </LinkWithQuery>
  );
}
export default Movie;
