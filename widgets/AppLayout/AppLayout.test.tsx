import { screen } from '@testing-library/react';

import renderWithRouter from '@test/helpers/RenderWithRouter';
import Logo from '@widgets/Header/ui/Logo';
import { describe, expect, it } from 'vitest';

import Custom404 from '../../pages/404';

describe('App', () => {
  it('should render the logo', () => {
    renderWithRouter(<Logo />);

    expect(screen.getByRole('heading', { level: 1 })).toBeInTheDocument();
  });

  it('should display 404 page when navigating to an invalid route', () => {
    renderWithRouter(<Custom404 />);

    expect(screen.getByTestId('not-found')).toBeInTheDocument();
  });
});
