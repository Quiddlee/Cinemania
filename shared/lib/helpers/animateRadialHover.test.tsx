import createRadialHover from '@shared/lib/helpers/animateRadialHover';
import { describe, expect, it } from 'vitest';

describe('animateRadialHover', () => {
  it('should create radial hover', async () => {
    const [animateRadialHover, cleanUp] = createRadialHover();

    expect(animateRadialHover).toBeDefined();
    expect(cleanUp).toBeDefined();
  });
});
