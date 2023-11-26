import ReactLogo from '@assets/reactJS-logo.png';
import { NOT_EXIST } from '@shared/const/const';
import useDocumentTitle from '@shared/hooks/useDocumentTitle';
import useGetMovie from '@shared/hooks/useGetMovie';
import convertSecsToHrsAndMins from '@shared/lib/helpers/convertSecsToHrsAndMins';
import Actors from '@widgets/MovieDetails/ui/Actors';
import BackButton from '@widgets/MovieDetails/ui/BackButton';
import Description from '@widgets/MovieDetails/ui/Description';
import Director from '@widgets/MovieDetails/ui/Director';
import Genre from '@widgets/MovieDetails/ui/Genre';
import Poster from '@widgets/MovieDetails/ui/Poster';
import Rating from '@widgets/MovieDetails/ui/Rating';
import Runtime from '@widgets/MovieDetails/ui/Runtime';
import Title from '@widgets/MovieDetails/ui/Title';

import Custom404 from '../../pages/404';

function MovieDetails() {
  const movie = useGetMovie();
  useDocumentTitle(`Cinemania | ${movie?.Title}`);

  if (!movie) return <Custom404 />;

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
      className="h-[75vh] flex-1 animate-fade-in overflow-hidden rounded-5xl border-l border-t border-white/20 bg-white/10 p-2 text-neutral-200 shadow-2xl backdrop-brightness-150 backdrop-saturate-200">
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

export default MovieDetails;
