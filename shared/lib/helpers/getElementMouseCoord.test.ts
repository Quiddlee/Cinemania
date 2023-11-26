import getElementMouseCoord from '@shared/lib/helpers/getElementMouseCoord';
import { describe, expect, it } from 'vitest';

const mockElem = document.createElement('div');

describe('getElementMouseCoord', () => {
  it('should return mouse coordinates in the document', async () => {
    const { posX, posY } = getElementMouseCoord(
      mockElem,
      new MouseEvent('mousemove', { clientX: 50, clientY: 150 }),
    );

    expect(posX).toBeDefined();
    expect(posY).toBeDefined();
  });

  it('should properly calculate mouse coordinates in the document', async () => {
    const mockCoords = { clientX: 999, clientY: 999 };

    const { posX, posY } = getElementMouseCoord(
      mockElem,
      new MouseEvent('mousemove', { clientX: 999, clientY: 999 }),
    );

    const elemBCR = mockElem.getBoundingClientRect();

    const testPosX = mockCoords.clientX - elemBCR.x;
    const testPosY = mockCoords.clientY - elemBCR.y;

    expect(posX).toBe(testPosX);
    expect(posY).toBe(testPosY);
  });
});
