import { MovieList } from '../../../shared/types/types.ts';

export enum SearchActions {
  QUERY_UPDATED = 'search/queryUpdated',
  MOVIES_LOADED = 'search/moviesLoaded',
  LOADING = 'search/loading',
}

export interface IInitialState {
  query: string;
  movies: MovieList | null;
  totalResults: number;
  isLoading: boolean;
}

export interface ISearchContext extends IInitialState {
  updateQuery: (newQuery: string) => void;
  fetchMovies: (searchQuery: string) => void;
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

export interface ILoadingAction {
  type: SearchActions.LOADING;
}

export type Action = IQueryAction | IMoviesAction | ILoadingAction;
