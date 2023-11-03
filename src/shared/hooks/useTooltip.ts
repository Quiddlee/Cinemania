import { MouseEvent, RefObject, useEffect, useRef } from 'react';

import LocomotiveScroll from 'locomotive-scroll';

const HIDDEN = ['invisible', 'opacity-0', '!duration-300', 'scale-50'];

function useTooltip(scroll: RefObject<LocomotiveScroll>) {
  const tooltipRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (scroll.current)
      scroll.current.on('scroll', () => {
        if (tooltipRef.current) tooltipRef.current.classList.add(...HIDDEN);
      });
  }, [scroll]);

  function handleMouseIn(e: MouseEvent) {
    const screenCoord = document.body.getBoundingClientRect();

    if (!screenCoord) return;

    const posX = e.clientX - screenCoord.x - 130;
    const posY = e.clientY - screenCoord.y - 130;

    if (tooltipRef.current) {
      tooltipRef.current.classList.remove(...HIDDEN);
      tooltipRef.current.style.cssText = `
        translate: ${posX}px ${posY}px;
      `;
    }
  }

  function handleMouseOut() {
    if (tooltipRef.current) tooltipRef.current.classList.add(...HIDDEN);
  }

  return { tooltipRef, handleMouseIn, handleMouseOut };
}

export default useTooltip;
