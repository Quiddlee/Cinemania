import { useEffect } from 'react';

import { useLoaderData } from 'react-router-dom';

import ReactLogo from '../../../assets/reactJS-logo.png';
import { APP_TITLE, NOT_EXIST } from '../../../shared/const/const.ts';
import convertSecsToHrsAndMins from '../../../shared/lib/helpers/convertSecsToHrsAndMins.ts';
import { ApiMovieResponse } from '../../../shared/types/types.ts';

function useMovie() {
  const movie = useLoaderData() as ApiMovieResponse;

  useEffect(() => {
    const newTitle = movie.Title;

    if (newTitle) document.title = `Cinemania | ${newTitle}`;

    return () => {
      document.title = APP_TITLE;
    };
  }, [movie.Title]);

  const {
    Poster,
    Title,
    Runtime,
    Genre,
    Plot,
    Year,
    imdbRating,
    imdbVotes,
    Director,
    Actors,
  } = movie;

  const time = convertSecsToHrsAndMins(Runtime);
  const description = `${Plot.slice(0, 150)}...`;
  const poster = Poster === NOT_EXIST ? ReactLogo : Poster;

  return {
    title: Title,
    time,
    description,
    poster,
    genre: Genre,
    year: Year,
    imdbRating,
    imdbVotes,
    director: Director,
    actors: Actors,
  };
}

export default useMovie;
