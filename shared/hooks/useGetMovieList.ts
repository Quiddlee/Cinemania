import { useEffect } from 'react';

import { urlParams } from '@customTypes/enums';
import { MovieList } from '@customTypes/types';
import { useGetMovieListQuery } from '@entities/movie/api/movieApi';
import useAppDispatch from '@shared/hooks/useAppDispatch';
import useAppSelector from '@shared/hooks/useAppSelector';
import useUrl from '@shared/hooks/useUrl';
import selectMoviesPerPage from '@shared/lib/selectors/selectMoviesPerPage';
import selectSearchQuery from '@shared/lib/selectors/selectSearchQuery';

import { dataFetchedDetailsPage } from '../../app/model/slice';

/**
 * Retrieves a list of movies using the `useGetMovieListQuery` hook.
 *
 * @returns The list of movies fetched using the `useGetMovieListQuery` hook.
 */
function useGetMovieList() {
  const { readUrl } = useUrl();

  const query = useAppSelector(selectSearchQuery);
  const moviesPerPage = useAppSelector(selectMoviesPerPage);
  const dispatch = useAppDispatch();
  const page = readUrl(urlParams.PAGE);

  const { data, isLoading, isFetching } = useGetMovieListQuery({
    page,
    query,
    moviesPerPage,
  });

  const movieList = data?.Search?.slice(0, moviesPerPage) as
    | MovieList
    | undefined;
  const totalResults = Number.parseInt(data?.totalResults ?? '0', 10);

  useEffect(() => {
    dispatch(dataFetchedDetailsPage(isFetching || isLoading));
  }, [dispatch, isFetching, isLoading]);

  return { movieList, totalResults };
}

export default useGetMovieList;
