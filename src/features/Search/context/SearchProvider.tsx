import {
  createContext,
  useCallback,
  useEffect,
  useMemo,
  useReducer,
} from 'react';

import { getMovieList } from '../../../entities/movie/api/apiMovie.ts';
import {
  DEFAULT_PAGE,
  LOCAL_STORAGE_SEARCH_QUERY,
} from '../../../shared/const/const.ts';
import useUrl from '../../../shared/hooks/useUrl.ts';
import { urlParams } from '../../../shared/types/enums.ts';
import { IChildren } from '../../../shared/types/interfaces.ts';
import { MovieList } from '../../../shared/types/types.ts';
import { NO_MOVIES, NO_RESULTS } from '../const/const.ts';
import {
  Action,
  IInitialState,
  ISearchContext,
  SearchActions,
} from '../types/types.ts';

const initialState: IInitialState = {
  query: '',
  movies: null,
  totalResults: 0,
  isLoading: false,
  movieDetails: null,
};

export const SearchContext = createContext<ISearchContext>({
  query: '',
} as ISearchContext);

function reducer(state: IInitialState, action: Action): IInitialState {
  switch (action.type) {
    case SearchActions.QUERY_UPDATED:
      return { ...state, query: action.payload };

    case SearchActions.MOVIES_LOADED:
      return {
        ...state,
        movies: action.payload.movies,
        totalResults: action.payload.totalResults,
        isLoading: false,
      };

    case SearchActions.LOADING:
      return { ...state, isLoading: true };

    default:
      throw new Error('The action does not exist!');
  }
}

function SearchProvider({ children }: IChildren) {
  const [{ query, movies, totalResults, isLoading, movieDetails }, dispatch] =
    useReducer(reducer, initialState);
  const { readUrl, setUrl } = useUrl();

  const updateQuery = useCallback((newQuery: string) => {
    dispatch({ type: SearchActions.QUERY_UPDATED, payload: newQuery });
  }, []);

  const updateMovies = useCallback(
    (newMovies: MovieList, newTotalResults: number) => {
      dispatch({
        type: SearchActions.MOVIES_LOADED,
        payload: {
          movies: newMovies,
          totalResults: newTotalResults,
        },
      });
    },
    [],
  );

  const fetchMovies = useCallback(
    async (searchQuery: string, page?: number) => {
      localStorage.setItem(LOCAL_STORAGE_SEARCH_QUERY, searchQuery);

      try {
        dispatch({ type: SearchActions.LOADING });
        const res = await getMovieList(searchQuery, page);
        updateMovies(res.Search, Number(res.totalResults));
        updateQuery(searchQuery);
      } catch (e) {
        updateMovies(NO_MOVIES, NO_RESULTS);
      }
    },
    [updateMovies, updateQuery],
  );

  useEffect(() => {
    const storedQuery = localStorage.getItem(LOCAL_STORAGE_SEARCH_QUERY);
    const urlPage = Number(readUrl(urlParams.PAGE));
    const page = urlPage || DEFAULT_PAGE;

    if (!urlPage) setUrl(urlParams.PAGE, String(page));

    if (storedQuery === null) return;

    void fetchMovies(storedQuery, page);
  }, [fetchMovies, readUrl, setUrl]);

  const providerValue = useMemo(
    () => ({
      query,
      movies,
      totalResults,
      isLoading,
      updateQuery,
      fetchMovies,
      movieDetails,
    }),
    [
      fetchMovies,
      isLoading,
      movieDetails,
      movies,
      query,
      totalResults,
      updateQuery,
    ],
  );

  return (
    <SearchContext.Provider value={providerValue}>
      {children}
    </SearchContext.Provider>
  );
}

export default SearchProvider;
