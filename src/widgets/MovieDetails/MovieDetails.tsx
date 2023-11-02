import { useEffect, useState } from 'react';

import ReactLogo from '../../assets/reactJS-logo.png';
import { getMovie } from '../../entities/movie/api/apiMovie.ts';
import { MOVIE_PARAM, NOT_EXIST } from '../../shared/const/const.ts';
import useUrl from '../../shared/hooks/useUrl.ts';
import { ApiMovieResponse } from '../../shared/types/types.ts';

// TODO - encapsulate useEffect

function MovieDetails() {
  const { readUrl } = useUrl();
  const [movie, setMovie] = useState<ApiMovieResponse | null>(null);

  useEffect(() => {
    async function fetchMovies() {
      const id = readUrl(MOVIE_PARAM);

      if (id) {
        const movieData = await getMovie(id);
        setMovie(movieData);
      }
    }

    void fetchMovies();
  }, [readUrl]);

  if (movie === null) return null;

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

  const hrs = Math.floor(Number(Runtime.slice(0, -4)) / 60);
  const min = Math.floor(Number(Runtime.slice(0, -4)) % 60);
  const time = `${hrs}h ${min}m`;
  const description = `${Plot.slice(0, 150)}...`;
  const poster = Poster === NOT_EXIST ? ReactLogo : Poster;

  return (
    <div className="overflow-hidden rounded-5xl border-l border-t border-white/20 bg-white/10 p-2 text-neutral-200 shadow-2xl backdrop-saturate-200 [height:_calc(100dvh_-_200px)]">
      <div className="relative flex h-full before:absolute before:left-0 before:top-0 before:z-10 before:h-full before:w-full before:rounded-4xl before:bg-gradient-to-r before:from-neutral-950 before:to-neutral-950/75">
        <img
          className="absolute h-full w-full rounded-4xl object-cover"
          src={poster}
          alt={`The poster of ${Title} film`}
        />
        <article className="z-10 grid max-w-md content-start gap-4 px-12 py-14 text-zinc-500">
          <h2 className="text-2xl font-semibold text-zinc-100">{Title}</h2>
          <span>
            {time} | {Year}
          </span>
          <span>{Genre}</span>
          <span>
            ⭐{imdbRating}/10 | 🎟️{imdbVotes}
          </span>
          <p className="mb-2">{description}</p>
          <p>
            <span className="text-zinc-100">Directed By: </span>
            <span>{Director}</span>
          </p>
          <p>
            <span className="text-zinc-100">Cast: </span>
            <span>{Actors}</span>
          </p>
        </article>
      </div>
    </div>
  );
}

export default MovieDetails;
