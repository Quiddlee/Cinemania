import { Component } from 'react';

import Movie from '../../entities/movie/ui/Movie.tsx';
import { MovieList as MovieListData } from '../../shared/types/types.ts';
import {
  ISearchContext,
  SearchContext,
} from '../Search/context/SearchProvider.tsx';

interface IProductListState {
  movies: MovieListData | null;
}

class MovieList extends Component<object, IProductListState> {
  static contextType = SearchContext;

  declare context: ISearchContext;

  render() {
    const { movies } = this.context;

    if (!movies) return null;

    // TODO: add loading spinner

    return (
      <ul className="m-auto flex max-w-6xl flex-wrap items-center justify-center gap-10">
        {movies.map((movie) => (
          <Movie key={movie.imdbID} data={movie} />
        ))}
      </ul>
    );
  }
}

export default MovieList;
