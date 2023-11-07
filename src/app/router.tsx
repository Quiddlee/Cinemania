import { createHashRouter } from 'react-router-dom';

import loader from '../entities/movie/loader.ts';
import AppLayout from '../pages/AppLayout/AppLayout.tsx';
import MovieDetails from '../widgets/MovieDetails/MovieDetails.tsx';

export const ROUTES = [
  {
    element: <AppLayout />,
    path: '/',
    children: [
      {
        element: <MovieDetails />,
        path: ':movieId',
        loader,
      },
    ],
  },
];

const router = createHashRouter(ROUTES);

export default router;
