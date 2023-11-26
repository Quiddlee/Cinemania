import { useCallback, useEffect, useRef } from 'react';

import useScroll from '@entities/scroll/hooks/useScroll';
import useAnime from '@shared/hooks/useAnime';
import getElementMouseCoord from '@shared/lib/helpers/getElementMouseCoord';

const ELEMENT_POSITION_OFFSET = 120;

/**
 * Floating tooltip bubble following the mouse.
 * The tooltip is displayed when the element is hovered and follows the mouse movement.
 *
 * @return {Object} obj - An object containing the tooltip reference, hideTooltip function, and showTooltip function.
 * @return {HTMLDivElement} obj.tooltipRef - The ref with the tooltip element.
 * @return {() => void} obj.hideTooltip - Function that is used to hide the tooltip. For example on mouseLeave event.
 * @return {() => void} obj.showTooltip - Function that is used to show the tooltip. For example on mouseEnter event.
 */
function useTooltip() {
  const tooltipRef = useRef<HTMLDivElement>(null);
  const { scroll } = useScroll();

  const { animation: showTooltipAnimation } = useAnime({
    targets: tooltipRef,
    scale: [0, 1],
    opacity: [0, 1],
    translateZ: 0,
    duration: 1200,
  });

  const { animation: hideTooltipAnimation } = useAnime({
    targets: tooltipRef,
    scale: [1, 0],
    opacity: [1, 0],
    translateZ: 0,
    duration: 1200,
  });

  const moveTooltip = useCallback(
    (e: MouseEvent) => {
      const { posX, posY } = getElementMouseCoord(document.body, e);

      const pointerX = posX - ELEMENT_POSITION_OFFSET;
      const pointerY = posY - ELEMENT_POSITION_OFFSET;

      if (tooltipRef.current)
        tooltipRef.current.style.translate = `${pointerX}px ${pointerY}px`;
    },
    [tooltipRef],
  );

  const showTooltip = useCallback(() => {
    showTooltipAnimation.current?.restart();
  }, [showTooltipAnimation]);

  const hideTooltip = useCallback(() => {
    hideTooltipAnimation.current?.restart();
  }, [hideTooltipAnimation]);

  useEffect(() => {
    scroll?.on?.('scroll', () => {
      const isVisible =
        tooltipRef.current &&
        getComputedStyle(tooltipRef.current).opacity === '1';

      if (isVisible) hideTooltipAnimation.current?.restart();
    });
  }, [scroll, hideTooltipAnimation]);

  useEffect(() => {
    document.addEventListener('mousemove', moveTooltip);
    return () => document.removeEventListener('mousemove', moveTooltip);
  }, [moveTooltip]);

  return {
    tooltipRef,
    hideTooltip,
    showTooltip,
  };
}

export default useTooltip;
