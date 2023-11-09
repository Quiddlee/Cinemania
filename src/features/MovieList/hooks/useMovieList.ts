import {
  DEFAULT_MOVIES_PER_PAGE,
  MOVIES_PER_PAGE_PARAM,
} from '../../../shared/const/const.ts';
import useUrl from '../../../shared/hooks/useUrl.ts';
import useSearch from '../../Search/hooks/useSearch.ts';

function useMovieList() {
  const { movies, isLoading } = useSearch();
  const { readUrl } = useUrl();

  const moviesPerPage = Number(
    readUrl(MOVIES_PER_PAGE_PARAM) || DEFAULT_MOVIES_PER_PAGE,
  );
  const noMovies = !movies?.length && !isLoading;
  const renderMovies = movies?.slice(0, moviesPerPage);

  return {
    isLoading,
    renderMovies,
    noMovies,
  };
}

export default useMovieList;
