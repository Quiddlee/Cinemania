import { useRouter } from 'next/router';

import { useGetMovieQuery } from '@entities/movie/api/movieApi';
import useDispatchIsFetching from '@shared/hooks/useDispatchIsFetching';

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

  useDispatchIsFetching(isLoading || isFetching);

  if (movie && 'Error' in movie) {
    return null;
  }

  return movie;
}

export default useGetMovie;
