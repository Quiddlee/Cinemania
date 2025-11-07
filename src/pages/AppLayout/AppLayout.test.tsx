import { screen } from '@testing-library/react';
import { describe, it } from 'vitest';

import renderWithRouter from '../../test/helpers/RenderWithRouter.tsx';
import Logo from '../../widgets/Header/ui/Logo.tsx';

describe('App', () => {
  it('should render the logo', () => {
    renderWithRouter(<Logo />);

    expect(screen.getByRole('heading', { level: 1 })).toBeInTheDocument();
  });

  it('should display 404 page when navigating to an invalid route', () => {
    renderWithRouter(null, ['test/not-found']);

    expect(screen.getByTestId('not-found')).toBeInTheDocument();
  });
});
