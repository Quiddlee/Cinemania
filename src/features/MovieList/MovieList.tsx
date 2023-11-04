import { RefObject, useEffect, useRef, useState } from 'react';

import LocomotiveScroll from 'locomotive-scroll';

import NotFound from './ui/NotFound.tsx';
import Movie from '../../entities/movie/ui/Movie.tsx';
import { DEFAULT_PAGE, PAGE_PARAM } from '../../shared/const/const.ts';
import useScrollTop from '../../shared/hooks/useScrollTop.ts';
import useTooltip from '../../shared/hooks/useTooltip.ts';
import useUrl from '../../shared/hooks/useUrl.ts';
import Loader from '../../shared/ui/Loader.tsx';
import Select from '../../shared/ui/Select.tsx';
import Tooltip from '../../shared/ui/Tooltip.tsx';
import useSearch from '../Search/hooks/useSearch.ts';

interface IMovieListProps {
  scroll: RefObject<LocomotiveScroll>;
}

function MovieList({ scroll }: IMovieListProps) {
  const { movies, isLoading } = useSearch();
  const { tooltipRef, hideTooltip, showTooltip } = useTooltip(scroll);
  useScrollTop(scroll, movies);
  const [moviesNum, setMoviesNum] = useState<3 | 5 | 10>(10);
  const { setUrl } = useUrl();
  const prevNum = useRef<number>(moviesNum);

  const isNoMovies = !movies?.length;

  useEffect(() => {
    if (prevNum.current !== moviesNum) {
      setUrl(PAGE_PARAM, String(DEFAULT_PAGE));
      prevNum.current = moviesNum;
    }
  }, [moviesNum, setUrl]);

  if (isNoMovies && !isLoading) return <NotFound />;
  if (isLoading)
    return (
      <ul className="relative m-auto mb-8 mt-24 flex max-w-6xl flex-1 animate-fade-in flex-wrap items-center justify-between gap-6 sm:gap-10">
        <Loader />
        <Tooltip innerRef={tooltipRef}>Click for details</Tooltip>
        <Select<3 | 5 | 10> handler={setMoviesNum} value={moviesNum}>
          <Select.Option value={3}>3 movies</Select.Option>
          <Select.Option value={5}>5 movies</Select.Option>
          <Select.Option value={10}>10 movies</Select.Option>
        </Select>
      </ul>
    );
  if (isNoMovies) return null;

  const renderMovies = movies.slice(0, moviesNum);

  return (
    <ul
      data-scroll-section="true"
      className="relative m-auto mb-8 mt-24 flex max-w-6xl flex-1 animate-fade-in flex-wrap items-center justify-between gap-6 sm:gap-10">
      <Tooltip innerRef={tooltipRef}>Click for details</Tooltip>
      <Select<3 | 5 | 10> handler={setMoviesNum} value={moviesNum}>
        <Select.Option value={3}>3 movies</Select.Option>
        <Select.Option value={5}>5 movies</Select.Option>
        <Select.Option value={10}>10 movies</Select.Option>
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
