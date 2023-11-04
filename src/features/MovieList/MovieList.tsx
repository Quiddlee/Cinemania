import { RefObject } from 'react';

import LocomotiveScroll from 'locomotive-scroll';

import useMovieList from './hooks/useMovieList.ts';
import NotFound from './ui/NotFound.tsx';
import Movie from '../../entities/movie/ui/Movie.tsx';
import { ItemsPerPage } from '../../shared/types/types.ts';
import Select from '../../shared/ui/Select.tsx';
import Tooltip from '../../shared/ui/Tooltip.tsx';

interface IMovieListProps {
  scroll: RefObject<LocomotiveScroll>;
}

function MovieList({ scroll }: IMovieListProps) {
  const {
    movies,
    isLoading,
    moviesNum,
    setMoviesNum,
    hideTooltip,
    showTooltip,
    tooltipRef,
  } = useMovieList(scroll);

  const isNoMovies = !movies?.length;

  if (isNoMovies && !isLoading) return <NotFound />;
  if (isNoMovies) return null;

  const renderMovies = movies.slice(0, moviesNum);

  return (
    <ul
      data-scroll-section="true"
      className="relative m-auto mb-8 mt-24 flex max-w-6xl flex-1 animate-fade-in flex-wrap items-center justify-between gap-6 sm:gap-10">
      <Tooltip innerRef={tooltipRef}>Click for details</Tooltip>
      <Select<ItemsPerPage> handler={setMoviesNum} value={moviesNum}>
        <Select.Option<ItemsPerPage> value={3}>3 movies</Select.Option>
        <Select.Option<ItemsPerPage> value={5}>5 movies</Select.Option>
        <Select.Option<ItemsPerPage> value={10}>10 movies</Select.Option>
      </Select>
      {renderMovies.map((movie, i) => (
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
