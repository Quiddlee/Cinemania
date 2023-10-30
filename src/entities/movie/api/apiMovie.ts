import { API_URL, QUERY_FALLBACK } from '../../../shared/const/const.ts';
import {
  ApiErrorResponse,
  ApiMovieListResponse,
  ApiMovieResponse,
} from '../../../shared/types/types.ts';

export async function getMovieList(
  query: string,
): Promise<ApiMovieListResponse> {
  const response = await fetch(`${API_URL}&s=${query || QUERY_FALLBACK}`);

  if (!response.ok) throw new Error('Something went wrong fetching movies!');

  const data = (await response.json()) as
    | ApiMovieListResponse
    | ApiErrorResponse;

  if (data.Response === 'False') throw new Error(data.Error);

  return data;
}

export async function getMovie(id: string) {
  const response = await fetch(`${API_URL}&i=${id}`);

  if (!response.ok) throw new Error('Something went wrong fetching movies!');

  const data = (await response.json()) as ApiMovieResponse | ApiErrorResponse;

  if (data.Response === 'False') throw new Error(data.Error);

  return data;
}
