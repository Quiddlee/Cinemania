import { PropsWithChildren, ReactNode, RefObject } from 'react';

import { Movie } from '@customTypes/types';
import useListClick from '@features/MovieList/hooks/useListClick';
import MovieNotFound from '@features/MovieList/ui/MovieNotFound';
import useGetMovieList from '@shared/hooks/useGetMovieList';
import LocomotiveScroll from 'locomotive-scroll';

interface IMovieListProps extends PropsWithChildren {
  scroll: RefObject<LocomotiveScroll>;
  render: (movie: Movie, i: number) => ReactNode;
}

function MovieList({ scroll, render, children }: IMovieListProps) {
  const { listRef, handleClick } = useListClick(scroll);
  const { movieList } = useGetMovieList();

  if (!movieList) return <MovieNotFound />;

  return (
    <ul
      ref={listRef}
      onClick={handleClick}
      className="relative m-auto mb-8 mt-24 flex max-w-6xl flex-1 flex-wrap items-center justify-start gap-6 sm:gap-10 2xl:justify-around">
      {children}
      {movieList?.map(render)}
    </ul>
  );
}

export default MovieList;
