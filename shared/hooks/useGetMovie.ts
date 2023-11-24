import { useEffect } from 'react';

import { useRouter } from 'next/router';

import { useGetMovieQuery } from '@entities/movie/api/movieApi';
import useAppDispatch from '@shared/hooks/useAppDispatch';

import { dataFetchedDetailsPage } from '../../app/model/slice';

/**
 * Retrieves movie data using the useGetMovieQuery hook and dispatches the isFetching state to the useDispatchIsFetching function.
 *
 * @returns {Object} obj - An object containing the movie data.
 * @returns {ApiMovieResponse} obj.movie - The movie data.
 */
function useGetMovie() {
  const { query } = useRouter();
  const id = (query?.id as string) ?? '1';
  const { data: movie, isLoading, isFetching } = useGetMovieQuery(id);
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(dataFetchedDetailsPage(isFetching || isLoading));
  }, [dispatch, isFetching, isLoading]);

  if (movie && 'Error' in movie) throw new Error(movie.Error);

  return movie;
}

export default useGetMovie;
