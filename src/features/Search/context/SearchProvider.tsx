import { Component, createContext } from 'react';

import { IChildren } from '../../../shared/types/interfaces.ts';
import { MovieList } from '../../../shared/types/types.ts';

interface ISearchProviderState {
  query: string;
  movies: MovieList | null;
  totalResults: number;
  isLoading: boolean;
}

export interface ISearchContext extends ISearchProviderState {
  updateQuery: (newQuery: string) => void;
  updateMovies: (newMovies: MovieList) => void;
  updateTotalResults: (newTotal: number) => void;
  updateIsLoading: (isLoading: boolean) => void;
}

export const SearchContext = createContext<ISearchContext>({
  query: '',
} as ISearchContext);

class SearchProvider extends Component<IChildren, ISearchProviderState> {
  state = {
    query: '',
    movies: null,
    totalResults: 0,
    isLoading: false,
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

  updateIsLoading = (isLoading: boolean) => {
    this.setState({ isLoading });
  };

  render() {
    const { query, movies, totalResults, isLoading } = this.state;
    const { updateQuery, updateMovies, updateTotalResults, updateIsLoading } =
      this;

    return (
      <SearchContext.Provider
        value={{
          query,
          movies,
          totalResults,
          isLoading,
          updateQuery,
          updateMovies,
          updateTotalResults,
          updateIsLoading,
        }}>
        {this.props.children}
      </SearchContext.Provider>
    );
  }
}

export default SearchProvider;
