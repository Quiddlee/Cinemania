import { RefObject } from 'react';

import LocomotiveScroll from 'locomotive-scroll';

import useListClick from './hooks/useListClick.ts';
import useMovieList from './hooks/useMovieList.ts';
import NotFound from './ui/NotFound.tsx';
import PageNum from './ui/PageNum.tsx';
import Movie from '../../entities/movie/ui/Movie.tsx';
import useTooltip from '../../shared/hooks/useTooltip.ts';
import { ItemsPerPage } from '../../shared/types/types.ts';
import Tabs from '../../shared/ui/Tabs.tsx';
import Tooltip from '../../shared/ui/Tooltip.tsx';

interface IMovieListProps {
  scroll: RefObject<LocomotiveScroll>;
}

function MovieList({ scroll }: IMovieListProps) {
  const {
    isLoading,
    moviesPerPage,
    renderMovies,
    isNoMovies,
    handleMoviesPerPage,
  } = useMovieList(scroll);
  const { listRef, handleClick } = useListClick(scroll);
  const { tooltipRef, hideTooltip, showTooltip } = useTooltip(scroll);

  if (isNoMovies && !isLoading) return <NotFound />;

  return (
    <ul
      ref={listRef}
      onClick={handleClick}
      className="relative m-auto mb-8 mt-24 flex max-w-6xl flex-1 animate-fade-in flex-wrap items-center justify-start gap-6 sm:gap-10 2xl:justify-around">
      <Tooltip innerRef={tooltipRef}>Click for details</Tooltip>
      <header
        data-scroll="true"
        data-scroll-sticky="true"
        data-scroll-target="section"
        className="absolute -top-24 z-10 flex items-center justify-center gap-4">
        <Tabs<ItemsPerPage>
          handler={handleMoviesPerPage}
          activeValue={moviesPerPage}>
          <Tabs.Tab<ItemsPerPage> value={3}>03 movies</Tabs.Tab>
          <Tabs.Tab<ItemsPerPage> value={5}>05 movies</Tabs.Tab>
          <Tabs.Tab<ItemsPerPage> value={10}>10 movies</Tabs.Tab>
        </Tabs>
        <PageNum />
      </header>
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
