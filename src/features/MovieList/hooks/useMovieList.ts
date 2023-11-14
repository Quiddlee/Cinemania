import useUrl from '../../../shared/hooks/useUrl.ts';
import { urlParams } from '../../../shared/types/enums.ts';
import useSearch from '../../Search/hooks/useSearch.ts';

function useMovieList() {
  const { movies, isLoading } = useSearch();
  const { readUrl } = useUrl();

  const moviesPerPage = Number(readUrl(urlParams.MOVIES_PER_PAGE));
  const noMovies = !movies?.length && !isLoading;
  const renderMovies = movies?.slice(0, moviesPerPage);

  return {
    isLoading,
    renderMovies,
    noMovies,
  };
}

export default useMovieList;
