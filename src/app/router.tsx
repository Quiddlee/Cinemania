import { createBrowserRouter } from 'react-router-dom';

import loader from '../entities/movie/loader.ts';
import AppLayout from '../pages/AppLayout.tsx';
import MovieDetails from '../widgets/MovieDetails/MovieDetails.tsx';

const router = createBrowserRouter([
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
]);

export default router;
