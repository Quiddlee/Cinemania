import { API_URL, QUERY_FALLBACK } from '../../../shared/const/const.ts';
import { ApiErrorResponse, ApiResponse } from '../../../shared/types/types.ts';

async function getMovieList(query: string): Promise<ApiResponse> {
  const response = await fetch(`${API_URL}&s=${query || QUERY_FALLBACK}`);

  if (!response.ok) throw new Error('Something went wrong fetching movies!');

  const data = (await response.json()) as ApiResponse | ApiErrorResponse;

  if (data.Response === 'False') throw new Error(data.Error);

  return data;
}

export default getMovieList;
