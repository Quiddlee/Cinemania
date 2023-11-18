import useAppSelector from './useAppSelector.ts';
import useDispatchIsFetching from './useDispatchIsFetching.ts';
import useUrl from './useUrl.ts';
import { useGetMovieListQuery } from '../../entities/movie/api/movieApi.ts';
import selectSearchQuery from '../../features/Search/lib/selectors/selectSearchQuery.ts';
import { urlParams } from '../types/enums.ts';

/**
 * Retrieves a list of movies using the `useGetMovieListQuery` hook.
 *
 * @returns The list of movies fetched using the `useGetMovieListQuery` hook.
 */
function useGetMovieList() {
  const { readUrl } = useUrl();

  const query = useAppSelector(selectSearchQuery);
  const page = readUrl(urlParams.PAGE);

  const { data, isFetching } = useGetMovieListQuery({
    page,
    query,
  });

  const movieList = data?.Search;
  const totalResults = Number.parseInt(data?.totalResults ?? '0', 10);

  useDispatchIsFetching(isFetching);

  return { movieList, totalResults };
}

export default useGetMovieList;
