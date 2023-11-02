import { useEffect } from 'react';

import useSearch from '../../../features/Search/hooks/useSearch.ts';

function useMovie() {
  const { fetchMovie, movieDetails } = useSearch();

  useEffect(() => {
    fetchMovie();
  }, [fetchMovie]);

  return movieDetails;
}

export default useMovie;
