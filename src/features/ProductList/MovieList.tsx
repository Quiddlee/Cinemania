import { Component } from 'react';

import NotFound from './ui/NotFound.tsx';
import Movie from '../../entities/movie/ui/Movie.tsx';
import { MovieList as MovieListData } from '../../shared/types/types.ts';
import {
  ISearchContext,
  SearchContext,
} from '../Search/context/SearchProvider.tsx';

interface IMovieListState {
  movies: MovieListData | null;
}

class MovieList extends Component<object, IMovieListState> {
  static contextType = SearchContext;

  declare context: ISearchContext;

  render() {
    const { movies, isLoading } = this.context;
    const isNoMovies = !movies?.length;

    if (isNoMovies && !isLoading) return <NotFound />;
    if (isNoMovies) return null;

    return (
      <ul className="m-auto flex max-w-6xl flex-wrap items-center justify-center gap-6 last:m-auto sm:gap-10">
        {movies.map((movie, i) => (
          <Movie key={movie.imdbID} data={movie} delay={i} />
        ))}
      </ul>
    );
  }
}

export default MovieList;
