import { urlParams } from '@customTypes/enums';
import { MovieList } from '@customTypes/types';
import { useGetMovieListQuery } from '@entities/movie/api/movieApi';
import useDispatchIsFetching from '@shared/hooks/useDispatchIsFetching';
import useUrl from '@shared/hooks/useUrl';

/**
 * Retrieves a list of movies using the `useGetMovieListQuery` hook.
 *
 * @returns The list of movies fetched using the `useGetMovieListQuery` hook.
 */
function useGetMovieList() {
  const { readUrl } = useUrl();

  const page = readUrl(urlParams.PAGE);
  const query = readUrl(urlParams.SEARCH);
  const moviesPerPage = Number(readUrl(urlParams.MOVIES_PER_PAGE));

  const { data, isLoading, isFetching } = useGetMovieListQuery({
    page,
    query,
    moviesPerPage,
  });

  const movieList = data?.Search?.slice(0, moviesPerPage) as
    | MovieList
    | undefined;
  const totalResults = Number.parseInt(data?.totalResults ?? '0', 10);

  useDispatchIsFetching(isLoading || isFetching);

  return { movieList, totalResults };
}

export default useGetMovieList;
