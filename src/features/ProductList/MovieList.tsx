import { Component } from 'react';

import Movie from '../../entities/movie/ui/Movie.tsx';
import { MovieList as MovieListData } from '../../shared/types/types.ts';
import Spinner from '../../shared/ui/Spinner.tsx';
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

    if (!movies || isLoading) return <Spinner />;

    return (
      <ul className="m-auto flex max-w-6xl flex-wrap items-center justify-center gap-6 last:m-auto sm:gap-10">
        {movies.map((movie) => (
          <Movie key={movie.imdbID} data={movie} />
        ))}
      </ul>
    );
  }
}

export default MovieList;
