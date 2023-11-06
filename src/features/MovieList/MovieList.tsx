import { RefObject } from 'react';

import LocomotiveScroll from 'locomotive-scroll';

import useMovieList from './hooks/useMovieList.ts';
import NotFound from './ui/NotFound.tsx';
import PageNum from './ui/PageNum.tsx';
import Movie from '../../entities/movie/ui/Movie.tsx';
import { ItemsPerPage } from '../../shared/types/types.ts';
import Loader from '../../shared/ui/Loader.tsx';
import Tabs from '../../shared/ui/Tabs.tsx';
import Tooltip from '../../shared/ui/Tooltip.tsx';

interface IMovieListProps {
  scroll: RefObject<LocomotiveScroll>;
}

function MovieList({ scroll }: IMovieListProps) {
  const {
    isLoading,
    moviesPerPage,
    setMoviesPerPage,
    hideTooltip,
    showTooltip,
    tooltipRef,
    listRef,
    handleClick,
    renderMovies,
    isNoMovies,
    currPage,
    maxPage,
  } = useMovieList(scroll);

  if (isNoMovies && !isLoading) return <NotFound />;
  if (isNoMovies) return null;

  return (
    <ul
      ref={listRef}
      onClick={handleClick}
      className="relative m-auto mb-8 mt-24 flex max-w-6xl flex-1 animate-fade-in flex-wrap items-center justify-start gap-6 sm:gap-10 2xl:justify-around">
      <Tooltip innerRef={tooltipRef}>Click for details</Tooltip>
      {isLoading && <Loader scroll={scroll} />}
      <div
        data-scroll="true"
        data-scroll-sticky="true"
        data-scroll-target="section"
        className="absolute -top-24 z-10 flex items-center justify-center gap-4">
        <Tabs<ItemsPerPage> handler={setMoviesPerPage} value={moviesPerPage}>
          <Tabs.Tab<ItemsPerPage> value={3}>3 movies</Tabs.Tab>
          <Tabs.Tab<ItemsPerPage> value={5}>5 movies</Tabs.Tab>
          <Tabs.Tab<ItemsPerPage> value={10}>10 movies</Tabs.Tab>
        </Tabs>
        <PageNum currPage={currPage} maxPage={maxPage} />
      </div>
      {renderMovies?.map((movie, i) => (
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
