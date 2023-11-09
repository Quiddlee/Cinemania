import { RefObject, useCallback, useEffect, useRef } from 'react';

import LocomotiveScroll from 'locomotive-scroll';

import getElementMouseCoord from '../lib/helpers/getElementMouseCoord.ts';

const HIDDEN = ['invisible', 'opacity-0', '!scale-[.3]'];
const ELEMENT_POSITION_OFFSET = 120;

function useTooltip(scroll: RefObject<LocomotiveScroll>) {
  const tooltipRef = useRef<HTMLDivElement>(null);

  const moveTooltip = useCallback((e: MouseEvent) => {
    const { posX, posY } = getElementMouseCoord(document.body, e);

    const pointerX = posX - ELEMENT_POSITION_OFFSET;
    const pointerY = posY - ELEMENT_POSITION_OFFSET;

    if (tooltipRef.current)
      tooltipRef.current.style.translate = `${pointerX}px ${pointerY}px`;
  }, []);

  const showTooltip = useCallback(() => {
    tooltipRef.current?.classList.remove(...HIDDEN);
  }, []);

  const hideTooltip = useCallback(() => {
    tooltipRef.current?.classList.add(...HIDDEN);
  }, []);

  useEffect(() => {
    scroll.current?.on?.(
      'scroll',
      () => tooltipRef.current?.classList.add(...HIDDEN),
    );
  }, [scroll]);

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
