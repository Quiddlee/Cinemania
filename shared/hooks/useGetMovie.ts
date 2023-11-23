import { useEffect } from 'react';

import { usePathname } from 'next/navigation';

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
  const pathname = usePathname();
  const id = pathname?.slice(1);
  const { data: movie, isLoading, isFetching } = useGetMovieQuery(id ?? '1');
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(dataFetchedDetailsPage(isFetching || isLoading));
  }, [dispatch, isFetching, isLoading]);

  if (movie && 'Error' in movie) throw new Error(movie.Error);

  return movie;
}

export default useGetMovie;
