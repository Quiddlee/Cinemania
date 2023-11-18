import useAppSelector from './useAppSelector.ts';
import useDispatchIsFetching from './useDispatchIsFetching.ts';
import useUrl from './useUrl.ts';
import { useGetMovieListQuery } from '../../entities/movie/api/movieApi.ts';
import selectMoviesPerPage from '../lib/selectors/selectMoviesPerPage.ts';
import selectSearchQuery from '../lib/selectors/selectSearchQuery.ts';
import { urlParams } from '../types/enums.ts';

/**
 * Retrieves a list of movies using the `useGetMovieListQuery` hook.
 *
 * @returns The list of movies fetched using the `useGetMovieListQuery` hook.
 */
function useGetMovieList() {
  const { readUrl } = useUrl();

  const query = useAppSelector(selectSearchQuery);
  const moviesPerPage = useAppSelector(selectMoviesPerPage);
  const page = readUrl(urlParams.PAGE);

  const { data, isFetching } = useGetMovieListQuery({
    page,
    query,
    moviesPerPage,
  });

  const movieList = data?.Search;
  const totalResults = Number.parseInt(data?.totalResults ?? '0', 10);

  useDispatchIsFetching(isFetching);

  return { movieList, totalResults };
}

export default useGetMovieList;
