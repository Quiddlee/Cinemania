import { RefObject } from 'react';

import LocomotiveScroll from 'locomotive-scroll';

import NotFound from './ui/NotFound.tsx';
import Movie from '../../entities/movie/ui/Movie.tsx';
import useScrollTop from '../../shared/hooks/useScrollTop.ts';
import useTooltip from '../../shared/hooks/useTooltip.ts';
import Loader from '../../shared/ui/Loader.tsx';
import Tooltip from '../../shared/ui/Tooltip.tsx';
import useSearch from '../Search/hooks/useSearch.ts';

interface IMovieListProps {
  scroll: RefObject<LocomotiveScroll>;
}

function MovieList({ scroll }: IMovieListProps) {
  const { movies, isLoading } = useSearch();
  const { tooltipRef, hideTooltip, showTooltip } = useTooltip(scroll);
  useScrollTop(scroll, movies);

  const isNoMovies = !movies?.length;

  if (isNoMovies && !isLoading) return <NotFound />;
  if (isLoading) return <Loader />;
  if (isNoMovies) return null;

  return (
    <ul
      data-scroll-section="true"
      className="m-auto mb-8 flex max-w-6xl flex-1 animate-fade-in flex-wrap items-center justify-between gap-6 last:m-auto sm:gap-10">
      <Tooltip innerRef={tooltipRef}>Click for details</Tooltip>
      {movies.map((movie, i) => (
        <Movie
          onMouseMove={showTooltip}
          onMouseOut={hideTooltip}
          key={movie.imdbID}
          data={movie}
          delay={i}
        />
      ))}
    </ul>
  );
}

export default MovieList;
