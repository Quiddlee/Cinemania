import { useLoaderData } from 'react-router-dom';

import ReactLogo from '../../assets/reactJS-logo.png';
import { NOT_EXIST } from '../../shared/const/const.ts';
import { ApiMovieResponse } from '../../shared/types/types.ts';

function MovieDetails() {
  const movie = useLoaderData() as ApiMovieResponse;

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

  const timeSeconds = Number(Runtime.slice(0, -4));
  const hrs = Math.floor(timeSeconds / 60);
  const min = Math.floor(timeSeconds % 60);
  const time = hrs !== 0 ? `${hrs}h ${min}m` : `${min}m`;
  const description = `${Plot.slice(0, 150)}...`;
  const poster = Poster === NOT_EXIST ? ReactLogo : Poster;

  return (
    <div className="animate-fade-in overflow-hidden rounded-5xl border-l border-t border-white/20 bg-white/10 p-2 text-neutral-200 shadow-2xl backdrop-saturate-200 [height:_calc(100dvh_-_200px)]">
      <div className="relative flex h-full before:absolute before:left-0 before:top-0 before:z-10 before:h-full before:w-full before:rounded-4xl before:bg-gradient-to-r before:from-neutral-950 before:to-neutral-950/75">
        <img
          className="absolute h-full w-full rounded-4xl object-cover"
          src={poster}
          alt={`The poster of ${Title} film`}
        />
        <article className="z-10 grid max-w-md content-start gap-4 px-12 py-14 text-zinc-400">
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
