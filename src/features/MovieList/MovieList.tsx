import { PropsWithChildren, ReactNode, RefObject } from 'react';

import LocomotiveScroll from 'locomotive-scroll';

import useListClick from './hooks/useListClick.ts';
import useMovieList from './hooks/useMovieList.ts';
import NotFound from './ui/NotFound.tsx';
import { Movie } from '../../shared/types/types.ts';

interface IMovieListProps extends PropsWithChildren {
  scroll: RefObject<LocomotiveScroll>;
  render: (movie: Movie, i: number) => ReactNode;
}

function MovieList({ scroll, render, children }: IMovieListProps) {
  const { renderMovies, noMovies } = useMovieList();
  const { listRef, handleClick } = useListClick(scroll);

  if (noMovies) return <NotFound />;

  return (
    <ul
      ref={listRef}
      onClick={handleClick}
      className="relative m-auto mb-8 mt-24 flex max-w-6xl flex-1 animate-fade-in flex-wrap items-center justify-start gap-6 sm:gap-10 2xl:justify-around">
      {children}
      {renderMovies?.map(render)}
    </ul>
  );
}

export default MovieList;
