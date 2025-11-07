import { IInitialState } from '../../../features/Search/types/types.ts';
import rootApi from '../../../shared/api/rootApi.ts';
import { QUERY_FALLBACK } from '../../../shared/const/const.ts';
import {
  ApiErrorResponse,
  ApiMovieListResponse,
  ApiMovieResponse,
} from '../../../shared/types/types.ts';

interface IMovieListParams {
  query: IInitialState['query'];
  page: string;
  moviesPerPage: number;
}

export const movieApi = rootApi.injectEndpoints({
  endpoints: (build) => ({
    getMovieList: build.query<ApiMovieListResponse, IMovieListParams>({
      query: ({ query, page, moviesPerPage }) =>
        `?apikey=${import.meta.env.VITE_API_KEY}&s=${
          query || QUERY_FALLBACK || moviesPerPage
        }&page=${page}`,
    }),

    getMovie: build.query<ApiErrorResponse | ApiMovieResponse, string>({
      query: (id) => `?apikey=${import.meta.env.VITE_API_KEY}&i=${id}`,
    }),
  }),
});

export const { useGetMovieListQuery, useGetMovieQuery } = movieApi;
