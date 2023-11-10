import { createHashRouter, RouteObject } from 'react-router-dom';

import loader from '../entities/movie/loader.ts';
import AppLayout from '../pages/AppLayout/AppLayout.tsx';

export const ROUTES: RouteObject[] = [
  {
    element: <AppLayout />,
    path: '/',
    children: [
      {
        lazy: () => import('../widgets/MovieDetails/MovieDetails.tsx'),
        path: ':movieId',
        loader,
      },
    ],
  },
];

const router = createHashRouter(ROUTES);

export default router;
