import { Component, createContext } from 'react';

import { IChildren } from '../../../shared/types/interfaces.ts';
import { MovieList } from '../../../shared/types/types.ts';

interface ISearchProviderState {
  query: string;
  movies: MovieList | null;
}

export interface ISearchContext extends ISearchProviderState {
  updateQuery: (newQuery: string) => void;
  updateMovies: (newMovies: MovieList) => void;
}

export const SearchContext = createContext<ISearchContext>({
  query: '',
} as ISearchContext);

class SearchProvider extends Component<IChildren, ISearchProviderState> {
  state = {
    query: '',
    movies: null,
  };

  updateQuery = (newQuery: string) => {
    this.setState({ query: newQuery });
  };

  updateMovies = async (newMovies: MovieList) => {
    this.setState({ movies: newMovies });
  };

  render() {
    const { query, movies } = this.state;
    const { updateQuery, updateMovies } = this;

    return (
      <SearchContext.Provider
        value={{
          query,
          movies,
          updateQuery,
          updateMovies,
        }}>
        {this.props.children}
      </SearchContext.Provider>
    );
  }
}

export default SearchProvider;
