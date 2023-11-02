import { ApiMovieResponse, MovieList } from '../../../shared/types/types.ts';

export enum SearchActions {
  QUERY_UPDATED = 'search/queryUpdated',
  MOVIES_LOADED = 'search/moviesLoaded',
  LOADING = 'search/loading',
  MOVIE_DETAILS_UPDATED = 'searc/movieDetailsUpdated',
}

export interface IInitialState {
  query: string;
  movies: MovieList | null;
  movieDetails: ApiMovieResponse | null;
  totalResults: number;
  isLoading: boolean;
}

export interface ISearchContext extends IInitialState {
  updateQuery: (newQuery: string) => void;
  fetchMovies: (searchQuery: string, page?: number) => void;
  fetchMovie: () => void;
}

export interface IQueryAction {
  type: SearchActions.QUERY_UPDATED;
  payload: string;
}

export interface IMoviesAction {
  type: SearchActions.MOVIES_LOADED;
  payload: {
    movies: MovieList | null;
    totalResults: number;
  };
}

export interface IMoviesDetailsAction {
  type: SearchActions.MOVIE_DETAILS_UPDATED;
  payload: ApiMovieResponse | null;
}

export interface ILoadingAction {
  type: SearchActions.LOADING;
}

export type Action =
  | IQueryAction
  | IMoviesAction
  | ILoadingAction
  | IMoviesDetailsAction;
