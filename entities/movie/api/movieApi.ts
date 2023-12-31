import {
  ApiErrorResponse,
  ApiMovieListResponse,
  ApiMovieResponse,
} from '@customTypes/types';
import { IInitialState } from '@features/Search/types/types';
import rootApi from '@shared/api/rootApi';
import { QUERY_FALLBACK } from '@shared/const/const';

interface IMovieListParams {
  query: IInitialState['query'];
  page: string;
  moviesPerPage: number;
}

export const movieApi = rootApi.injectEndpoints({
  endpoints: (build) => ({
    getMovieList: build.query<ApiMovieListResponse, IMovieListParams>({
      query: ({ query, page, moviesPerPage }) =>
        `?apikey=${process.env.NEXT_PUBLIC_API_KEY}&s=${
          query || QUERY_FALLBACK || moviesPerPage
        }&page=${page}`,
    }),

    getMovie: build.query<ApiErrorResponse | ApiMovieResponse, string>({
      query: (id) => `?apikey=${process.env.NEXT_PUBLIC_API_KEY}&i=${id}`,
    }),
  }),
});

export const { useGetMovieListQuery, useGetMovieQuery } = movieApi;
