import { useLocation } from 'react-router-dom';

import { useGetMovieQuery } from '../../../entities/movie/api/movieApi.ts';

function useMovie() {
  const { pathname } = useLocation();
  const id = pathname.slice(1);

  const { data: movie, isLoading } = useGetMovieQuery(id);

  return { movie, isLoading };
}

export default useMovie;
