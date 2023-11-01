import NotFound from './ui/NotFound.tsx';
import Movie from '../../entities/movie/ui/Movie.tsx';
import useSearch from '../Search/hooks/useSearch.ts';

function MovieList() {
  const { movies, isLoading } = useSearch();

  const isNoMovies = !movies?.length;

  if (isNoMovies && !isLoading) return <NotFound />;
  if (isNoMovies) return null;

  return (
    <ul className="m-auto mb-8 flex max-w-6xl animate-fade-in flex-wrap items-center justify-center gap-6 last:m-auto sm:gap-10">
      {movies.map((movie, i) => (
        <Movie key={movie.imdbID} data={movie} delay={i} />
      ))}
    </ul>
  );
}

export default MovieList;
