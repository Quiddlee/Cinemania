import { createHashRouter, RouteObject } from 'react-router-dom';

import loader from '../entities/movie/loader.ts';
import AppLayout from '../pages/AppLayout/AppLayout.tsx';
import NotFound from '../pages/NotFound/NotFound.tsx';

export const ROUTES: RouteObject[] = [
  {
    path: '/',
    element: <AppLayout />,
    errorElement: <NotFound />,
    children: [
      {
        path: ':movieId',
        lazy: () => import('../widgets/MovieDetails/MovieDetails.tsx'),
        loader,
      },
    ],
  },
];

const router = createHashRouter(ROUTES);

export default router;
