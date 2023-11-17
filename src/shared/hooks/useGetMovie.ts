import { useLocation } from 'react-router-dom';

import useDispatchIsFetching from './useDispatchIsFetching.ts';
import { useGetMovieQuery } from '../../entities/movie/api/movieApi.ts';

/**
 * Retrieves movie data using the useGetMovieQuery hook and dispatches the isFetching state to the useDispatchIsFetching function.
 *
 * @returns {Object} obj - An object containing the movie data.
 * @returns {ApiMovieResponse} obj.movie - The movie data.
 */
function useGetMovie() {
  const { pathname } = useLocation();

  const id = pathname.slice(1);
  const { data: movie, isFetching } = useGetMovieQuery(id);

  useDispatchIsFetching(isFetching);

  return movie;
}

export default useGetMovie;
