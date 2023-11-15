import { delay, http, HttpResponse } from 'msw';

import { mockMovieDetails, mockMovieDetailsNoPoster } from './data.ts';
import { NO_POSTER_QUERY_TEST_CASE } from '../const/const.ts';

const handlers = [
  http.get(`${import.meta.env.VITE_API_URL}`, async ({ request }) => {
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
