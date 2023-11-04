import useMovie from './hooks/useMovie.ts';
import BackButton from './ui/BackButton.tsx';

function MovieDetails() {
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
      data-scroll="true"
      data-scroll-sticky="true"
      data-scroll-target="section"
      className="h-[540px] flex-1 animate-fade-in overflow-hidden rounded-5xl border-l border-t border-white/20 bg-white/10 p-2 text-neutral-200 shadow-2xl backdrop-brightness-150 backdrop-saturate-200">
      <div className="relative flex h-full saturate-200 before:absolute before:left-0 before:top-0 before:z-10 before:h-full before:w-full before:rounded-4xl before:bg-gradient-to-r before:from-zinc-950 before:to-neutral-950/70">
        <img
          className="absolute h-full w-full rounded-4xl object-cover"
          src={poster}
          alt={`The poster of ${title} film`}
        />
        <article className="z-10 grid max-w-md content-start gap-4 px-8 py-8 text-zinc-400">
          <BackButton />
          <h2 className="text-2xl font-semibold text-zinc-100">{title}</h2>
          <span>
            {time} | {year}
          </span>
          <span>{genre}</span>
          <span>
            ⭐{imdbRating}/10 | 🍿{imdbVotes}
          </span>
          <p className="mb-2">{description}</p>
          <p>
            <span className="text-zinc-100">Directed By: </span>
            <span>{director}</span>
          </p>
          <p>
            <span className="text-zinc-100">Cast: </span>
            <span>{actors}</span>
          </p>
        </article>
      </div>
    </div>
  );
}

export default MovieDetails;
