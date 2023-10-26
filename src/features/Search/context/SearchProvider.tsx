import { Component, createContext } from 'react';

import { IChildren } from '../../../shared/types/interfaces.ts';
import { MovieList } from '../../../shared/types/types.ts';

interface ISearchProviderState {
  query: string;
  movies: MovieList | null;
  totalResults: number;
}

export interface ISearchContext extends ISearchProviderState {
  updateQuery: (newQuery: string) => void;
  updateMovies: (newMovies: MovieList) => void;
  updateTotalResults: (newTotal: number) => void;
}

export const SearchContext = createContext<ISearchContext>({
  query: '',
} as ISearchContext);

class SearchProvider extends Component<IChildren, ISearchProviderState> {
  state = {
    query: '',
    movies: null,
    totalResults: 0,
  };

  updateQuery = (newQuery: string) => {
    this.setState({ query: newQuery });
  };

  updateMovies = (newMovies: MovieList) => {
    this.setState({ movies: newMovies });
  };

  updateTotalResults = (newTotal: number) => {
    this.setState({ totalResults: newTotal });
  };

  render() {
    const { query, movies, totalResults } = this.state;
    const { updateQuery, updateMovies, updateTotalResults } = this;

    return (
      <SearchContext.Provider
        value={{
          query,
          movies,
          totalResults,
          updateQuery,
          updateMovies,
          updateTotalResults,
        }}>
        {this.props.children}
      </SearchContext.Provider>
    );
  }
}

export default SearchProvider;
