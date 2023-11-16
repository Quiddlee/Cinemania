import { isRouteErrorResponse, useRouteError } from 'react-router-dom';

import useMovie from './hooks/useMovie.ts';
import Actors from './ui/Actors.tsx';
import BackButton from './ui/BackButton.tsx';
import Description from './ui/Description.tsx';
import Director from './ui/Director.tsx';
import Genre from './ui/Genre.tsx';
import Poster from './ui/Poster.tsx';
import Rating from './ui/Rating.tsx';
import Runtime from './ui/Runtime.tsx';
import Title from './ui/Title.tsx';
import ReactLogo from '../../assets/reactJS-logo.png';
import { NOT_EXIST } from '../../shared/const/const.ts';
import useDocumentTitle from '../../shared/hooks/useDocumentTitle.ts';
import convertSecsToHrsAndMins from '../../shared/lib/helpers/convertSecsToHrsAndMins.ts';
import FallbackUi from '../../shared/ui/FallbackUi.tsx';

export function Component() {
  const { movie, isLoading } = useMovie();
  useDocumentTitle(`Cinemania | ${movie?.Title}`);

  if (isLoading || !movie) return null;

  const {
    Poster: poster,
    Title: title,
    Runtime: runtime,
    Genre: genre,
    Plot: plot,
    Year: year,
    imdbRating,
    imdbVotes,
    Director: director,
    Actors: actors,
  } = movie;

  const time = convertSecsToHrsAndMins(runtime);
  const description = `${plot.slice(0, 150)}...`;
  const safePoster = poster === NOT_EXIST ? ReactLogo : poster;

  return (
    <div
      data-testid="details-section"
      data-scroll="true"
      data-scroll-sticky="true"
      data-scroll-target="section"
      className="h-[540px] flex-1 animate-fade-in overflow-hidden rounded-5xl border-l border-t border-white/20 bg-white/10 p-2 text-neutral-200 shadow-2xl backdrop-brightness-150 backdrop-saturate-200">
      <div className="relative flex h-full saturate-200 before:absolute before:left-0 before:top-0 before:z-10 before:h-full before:w-full before:rounded-4xl before:bg-gradient-to-r before:from-zinc-950 before:to-neutral-950/70">
        <Poster poster={safePoster} title={title} />
        <article className="z-10 grid max-w-md content-start gap-4 px-8 py-8 text-zinc-400">
          <BackButton />
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

Component.displayName = 'MovieDetails';

export function ErrorBoundary() {
  const error = useRouteError();

  const errorMessage = isRouteErrorResponse(error) ? (
    <h1>
      {error.status} {error.statusText}
    </h1>
  ) : (
    <h1>{(error as Error).message}</h1>
  );

  return <FallbackUi>{errorMessage}</FallbackUi>;
}

ErrorBoundary.displayName = 'MovieDetailsErrorBoundary';
