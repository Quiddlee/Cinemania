import { useEffect } from 'react';

import useSearch from '../../../features/Search/hooks/useSearch.ts';

function useMovie() {
  const { fetchMovie, movieDetails } = useSearch();

  useEffect(() => {
    fetchMovie();
  }, [fetchMovie]);

  useEffect(() => {
    const title = movieDetails?.Title;

    if (title) {
      document.title = `Cinemania | ${title}`;
    }
  }, [movieDetails?.Title]);

  return movieDetails;
}

export default useMovie;
