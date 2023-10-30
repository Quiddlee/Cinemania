import { Component, createContext } from 'react';

import { getMovieList } from '../../../entities/movie/api/apiMovie.ts';
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
  updateMovies: (newMovies: MovieList, totalResults: number) => void;
  updateIsLoading: (isLoading: boolean) => void;
  fetchMovies: (searchQuery: string) => void;
}

const NO_RESULTS = 0;
const NO_MOVIES: MovieList = [];

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

  updateMovies = (newMovies: MovieList, totalResults: number) => {
    this.setState({ movies: newMovies, totalResults });
  };

  updateIsLoading = (isLoading: boolean) => {
    this.setState({ isLoading });
  };

  fetchMovies = async (searchQuery: string) => {
    try {
      this.updateIsLoading(true);
      const res = await getMovieList(searchQuery);
      this.updateMovies(res.Search, Number(res.totalResults));
    } catch (e) {
      this.updateMovies(NO_MOVIES, NO_RESULTS);
    } finally {
      this.updateIsLoading(false);
    }
  };

  render() {
    const { query, movies, totalResults, isLoading } = this.state;
    const { updateQuery, updateMovies, updateIsLoading, fetchMovies } = this;

    return (
      <SearchContext.Provider
        value={{
          query,
          movies,
          totalResults,
          isLoading,
          updateQuery,
          updateMovies,
          updateIsLoading,
          fetchMovies,
        }}>
        {this.props.children}
      </SearchContext.Provider>
    );
  }
}

export default SearchProvider;
