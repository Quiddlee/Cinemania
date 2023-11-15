import { PropsWithChildren, ReactNode, RefObject } from 'react';

import LocomotiveScroll from 'locomotive-scroll';

import useListClick from './hooks/useListClick.ts';
import { useGetMovieListQuery } from '../../entities/movie/api/movieApi.ts';
import useAppSelector from '../../shared/hooks/useAppSelector.ts';
import useUrl from '../../shared/hooks/useUrl.ts';
import { urlParams } from '../../shared/types/enums.ts';
import { Movie } from '../../shared/types/types.ts';
import Loader from '../../widgets/Loader/Loader.tsx';
import selectSearchQuery from '../Search/lib/selectors/selectSearchQuery.ts';

interface IMovieListProps extends PropsWithChildren {
  scroll: RefObject<LocomotiveScroll>;
  render: (movie: Movie, i: number) => ReactNode;
}

function MovieList({ scroll, render, children }: IMovieListProps) {
  const { listRef, handleClick } = useListClick(scroll);
  const { readUrl } = useUrl();

  const query = useAppSelector(selectSearchQuery);
  const page = readUrl(urlParams.PAGE);

  const { data: movieList, isLoading } = useGetMovieListQuery({
    page,
    query,
  });

  if (isLoading) return <Loader scroll={scroll} />;

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
