import { PropsWithChildren } from 'react';

import useMovie from './hooks/useMovie.ts';
import Actors from './ui/Actors.tsx';
import Description from './ui/Description.tsx';
import Director from './ui/Director.tsx';
import Genre from './ui/Genre.tsx';
import Poster from './ui/Poster.tsx';
import Rating from './ui/Rating.tsx';
import Runtime from './ui/Runtime.tsx';
import Title from './ui/Title.tsx';

function MovieDetails({ children }: PropsWithChildren) {
  const {
    description,
    imdbRating,
    imdbVotes,
    poster,
    time,
    actors,
    director,
    genre,
    title,
    year,
  } = useMovie();

  return (
    <div
      data-testid="details-section"
      data-scroll="true"
      data-scroll-sticky="true"
      data-scroll-target="section"
      className="h-[540px] flex-1 animate-fade-in overflow-hidden rounded-5xl border-l border-t border-white/20 bg-white/10 p-2 text-neutral-200 shadow-2xl backdrop-brightness-150 backdrop-saturate-200">
      <div className="relative flex h-full saturate-200 before:absolute before:left-0 before:top-0 before:z-10 before:h-full before:w-full before:rounded-4xl before:bg-gradient-to-r before:from-zinc-950 before:to-neutral-950/70">
        <Poster poster={poster} title={title} />
        <article className="z-10 grid max-w-md content-start gap-4 px-8 py-8 text-zinc-400">
          {children}
          <Title>{title}</Title>
          <Runtime year={year} time={time} />
          <Genre>{genre}</Genre>
          <Rating rating={imdbRating} votes={imdbVotes} />
          <Description>{description}</Description>
          <Director>{director}</Director>
          <Actors>{actors}</Actors>
        </article>
      </div>
    </div>
  );
}

export default MovieDetails;
