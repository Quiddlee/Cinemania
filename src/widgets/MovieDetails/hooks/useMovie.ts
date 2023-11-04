import { useEffect } from 'react';

import { useLoaderData } from 'react-router-dom';

import ReactLogo from '../../../assets/reactJS-logo.png';
import { APP_TITLE, NOT_EXIST } from '../../../shared/const/const.ts';
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

  if (!movie) return {};

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

  const timeSeconds = Number(Runtime.slice(0, -4));
  const hrs = Math.floor(timeSeconds / 60);
  const min = Math.floor(timeSeconds % 60);
  const time = hrs !== 0 ? `${hrs}h ${min}m` : `${min}m`;
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
