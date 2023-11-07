import { ReactNode } from 'react';

import { render } from '@testing-library/react';
import { createMemoryRouter, RouterProvider } from 'react-router-dom';

import { ROUTES } from '../../../app/router.tsx';

function RenderWithRouter(
  initialEntries?: string[],
  initialIndex?: number,
  element?: ReactNode,
) {
  const routes = element ? [{ path: '/', element }] : ROUTES;

  const router = createMemoryRouter(routes, {
    initialEntries,
    initialIndex,
  });
  render(<RouterProvider router={router} />);
}

export default RenderWithRouter;
