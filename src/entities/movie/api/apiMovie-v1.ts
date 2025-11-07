import { DEFAULT_PAGE, QUERY_FALLBACK } from '../../../shared/const/const.ts';
import {
  ApiErrorResponse,
  ApiMovieListResponse,
  ApiMovieResponse,
} from '../../../shared/types/types.ts';

export async function getMovieList(
  query: string,
  page: number = DEFAULT_PAGE,
): Promise<ApiMovieListResponse> {
  const response = await fetch(
    `${import.meta.env.VITE_API_URL}?apikey=${import.meta.env.VITE_API_KEY}&s=${
      query || QUERY_FALLBACK
    }&page=${page}`,
  );

  if (!response.ok) throw new Error('Something went wrong fetching movies!');

  const data = (await response.json()) as
    | ApiMovieListResponse
    | ApiErrorResponse;

  if (data.Response === 'False') throw new Error(data.Error);

  return data;
}

export async function getMovie(id: string) {
  const response = await fetch(
    `${import.meta.env.VITE_API_URL}?apikey=${
      import.meta.env.VITE_API_KEY
    }&i=${id}`,
  );

  if (!response.ok) throw new Error('Something went wrong fetching movies!');

  const data = (await response.json()) as ApiMovieResponse | ApiErrorResponse;

  if (data.Response === 'False') throw new Error(data.Error);

  return data;
}
