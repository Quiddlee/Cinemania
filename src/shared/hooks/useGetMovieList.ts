import { useEffect } from 'react';

import useAppDispatch from './useAppDispatch.ts';
import useAppSelector from './useAppSelector.ts';
import useUrl from './useUrl.ts';
import { dataFetchedDetailsPage } from '../../app/model/slice.ts';
import { useGetMovieListQuery } from '../../entities/movie/api/movieApi.ts';
import selectMoviesPerPage from '../lib/selectors/selectMoviesPerPage.ts';
import selectSearchQuery from '../lib/selectors/selectSearchQuery.ts';
import { urlParams } from '../types/enums.ts';
import { MovieList } from '../types/types.ts';

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

  const movies = data?.Search;
  const totalResults = Number.parseInt(data?.totalResults ?? '0', 10);
  const movieList = movies?.slice(0, moviesPerPage) as MovieList | undefined;

  useEffect(() => {
    dispatch(dataFetchedDetailsPage(isFetching || isLoading));
  }, [dispatch, isFetching, isLoading]);

  return { movieList, totalResults };
}

export default useGetMovieList;
