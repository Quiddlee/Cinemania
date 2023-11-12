import { delay, http, HttpResponse } from 'msw';

import { mockMovieDetails, mockMovieDetailsNoPoster } from './data.ts';
import { API_URL_NO_KEY } from '../../shared/const/const.ts';
import { NO_POSTER_QUERY_TEST_CASE } from '../const/const.ts';

const handlers = [
  http.get(`${API_URL_NO_KEY}`, async ({ request }) => {
    await delay();

    const url = new URL(request.url);
    const movieId = url.searchParams.get('i');

    if (!movieId) {
      return new HttpResponse(null, { status: 404 });
    }

    if (movieId === NO_POSTER_QUERY_TEST_CASE) {
      return HttpResponse.json(mockMovieDetailsNoPoster);
    }

    return HttpResponse.json(mockMovieDetails);
  }),
];

export default handlers;
