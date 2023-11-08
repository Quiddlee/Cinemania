import { RefObject, useEffect, useRef } from 'react';

import LocomotiveScroll from 'locomotive-scroll';

import getElementMouseCoord from '../lib/helpers/getElementMouseCoord.ts';

const HIDDEN = ['invisible', 'opacity-0', '!scale-[.3]'];
const ELEMENT_POSITION_OFFSET = 120;

function useTooltip(scroll: RefObject<LocomotiveScroll>) {
  const tooltipRef = useRef<HTMLDivElement>(null);

  function moveTooltip(e: MouseEvent) {
    const { posX, posY } = getElementMouseCoord(document.body, e);

    const pointerX = posX - ELEMENT_POSITION_OFFSET;
    const pointerY = posY - ELEMENT_POSITION_OFFSET;

    if (tooltipRef.current)
      tooltipRef.current.style.translate = `${pointerX}px ${pointerY}px`;
  }

  function showTooltip() {
    tooltipRef.current?.classList.remove(...HIDDEN);
  }

  function hideTooltip() {
    tooltipRef.current?.classList.add(...HIDDEN);
  }

  useEffect(() => {
    scroll.current?.on?.(
      'scroll',
      () => tooltipRef.current?.classList.add(...HIDDEN),
    );
  }, [scroll]);

  useEffect(() => {
    document.addEventListener('mousemove', moveTooltip);
    return () => document.removeEventListener('mousemove', moveTooltip);
  }, []);

  return {
    tooltipRef,
    hideTooltip,
    showTooltip,
  };
}

export default useTooltip;
