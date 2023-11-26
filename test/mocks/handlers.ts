import { loadEnvConfig } from '@next/env';

import { delay, http, HttpResponse } from 'msw';

import { mockMovieDetails, mockMovieDetailsNoPoster, mockMovies } from './data';
import { NO_POSTER_QUERY_TEST_CASE } from '../const/const';

const projectDir = process.cwd();
loadEnvConfig(projectDir);

const handlers = [
  http.get(`${process.env.NEXT_PUBLIC_API_URL}`, async ({ request }) => {
    await delay();

    const url = new URL(request.url);
    const movieId = url.searchParams.get('i');

    if (movieId === NO_POSTER_QUERY_TEST_CASE) {
      return HttpResponse.json(mockMovieDetailsNoPoster);
    }

    if (movieId) {
      return HttpResponse.json(mockMovieDetails);
    }

    if (!movieId) {
      return HttpResponse.json(mockMovies);
    }

    return new HttpResponse(null, { status: 404 });
  }),
];

export default handlers;
