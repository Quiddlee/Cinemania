import { RefObject, useCallback, useEffect, useRef } from 'react';

import anime from 'animejs/lib/anime.es.js';
import LocomotiveScroll from 'locomotive-scroll';

import useAnime from './useAnime.ts';
import getElementMouseCoord from '../lib/helpers/getElementMouseCoord.ts';

const ELEMENT_POSITION_OFFSET = 120;

function useTooltip(scroll: RefObject<LocomotiveScroll>) {
  const tooltipRef = useRef<HTMLDivElement>(null);

  const { animation: showTooltipAnimation } = useAnime<HTMLDivElement>({
    targets: tooltipRef,
    scale: [0, 1],
    opacity: [0, 1],
    duration: 1200,
  });

  const { animation: hideTooltipAnimation } = useAnime({
    targets: tooltipRef,
    scale: [1, 0],
    opacity: [1, 0],
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
    scroll.current?.on?.('scroll', () => {
      if (anime.running.length === 0) hideTooltipAnimation.current?.restart();
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
