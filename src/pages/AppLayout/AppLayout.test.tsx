import { screen } from '@testing-library/react';
import { describe, it } from 'vitest';

import renderWithRouter from '../../test/helpers/RenderWithRouter.tsx';

describe('App', () => {
  it('Renders the app', async () => {
    // 1. arrange
    renderWithRouter();
    // 2. act
    // 3. expect
    expect(screen.getByRole('heading', { level: 1 })).toBeInTheDocument();
  });
});
