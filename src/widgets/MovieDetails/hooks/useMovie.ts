import { useEffect } from 'react';

import { useLoaderData } from 'react-router-dom';

import { ApiMovieResponse } from '../../../shared/types/types.ts';

function useMovie() {
  const movie = useLoaderData() as ApiMovieResponse;

  useEffect(() => {
    const newTitle = movie.Title;

    if (newTitle) document.title = `Cinemania | ${newTitle}`;
  }, [movie.Title]);

  return movie;
}

export default useMovie;
