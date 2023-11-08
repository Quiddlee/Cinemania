import { http, HttpResponse } from 'msw';

import { mockMovieDetails } from './data.ts';
import { API_URL_NO_KEY } from '../../shared/const/const.ts';

const handlers = [
  http.get(`${API_URL_NO_KEY}`, ({ request }) => {
    const url = new URL(request.url);
    const movieId = url.searchParams.get('i');

    if (!movieId) {
      return new HttpResponse(null, { status: 404 });
    }

    return HttpResponse.json(mockMovieDetails);
  }),
];

export default handlers;
