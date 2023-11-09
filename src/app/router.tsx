import { createHashRouter } from 'react-router-dom';

import loader from '../entities/movie/loader.ts';
import AppLayout from '../pages/AppLayout/AppLayout.tsx';
import MovieDetails from '../widgets/MovieDetails/MovieDetails.tsx';
import BackButton from '../widgets/MovieDetails/ui/BackButton.tsx';

export const ROUTES = [
  {
    element: <AppLayout />,
    path: '/',
    children: [
      {
        element: (
          <MovieDetails>
            <BackButton />
          </MovieDetails>
        ),
        path: ':movieId',
        loader,
      },
    ],
  },
];

const router = createHashRouter(ROUTES);

export default router;
