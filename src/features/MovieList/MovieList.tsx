import { PropsWithChildren, ReactNode, RefObject } from 'react';

import LocomotiveScroll from 'locomotive-scroll';

import useListClick from './hooks/useListClick.ts';
import useGetMovieList from '../../shared/hooks/useGetMovieList.ts';
import { Movie } from '../../shared/types/types.ts';

interface IMovieListProps extends PropsWithChildren {
  scroll: RefObject<LocomotiveScroll>;
  render: (movie: Movie, i: number) => ReactNode;
}

function MovieList({ scroll, render, children }: IMovieListProps) {
  const { listRef, handleClick } = useListClick(scroll);
  const movieList = useGetMovieList();

  return (
    <ul
      ref={listRef}
      onClick={handleClick}
      className="relative m-auto mb-8 mt-24 flex max-w-6xl flex-1 flex-wrap items-center justify-start gap-6 sm:gap-10 2xl:justify-around">
      {children}
      {movieList?.Search.map(render)}
    </ul>
  );
}

export default MovieList;
