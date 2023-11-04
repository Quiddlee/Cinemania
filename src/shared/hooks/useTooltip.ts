import { RefObject, useEffect, useRef } from 'react';

import LocomotiveScroll from 'locomotive-scroll';

const HIDDEN = ['invisible', 'opacity-0', '!scale-[.3]', 'text-lime-500'];

function useTooltip(scroll: RefObject<LocomotiveScroll>) {
  const tooltipRef = useRef<HTMLDivElement>(null);

  function moveTooltip(e: MouseEvent) {
    const screenCoord = document.body.getBoundingClientRect();

    if (!screenCoord) return;

    const posX = e.clientX - screenCoord.x - 130;
    const posY = e.clientY - screenCoord.y - 130;

    if (tooltipRef.current)
      tooltipRef.current.style.cssText = `
        translate: ${posX}px ${posY}px;
      `;
  }

  function showTooltip() {
    tooltipRef.current?.classList.remove(...HIDDEN);
  }

  function hideTooltip() {
    tooltipRef.current?.classList.add(...HIDDEN);
  }

  useEffect(() => {
    if (scroll.current)
      scroll.current.on('scroll', () => {
        if (tooltipRef.current) tooltipRef.current.classList.add(...HIDDEN);
      });
  }, [scroll]);

  useEffect(() => {
    document.body.addEventListener('mousemove', (e) => {
      moveTooltip(e);
    });
  }, []);

  return {
    tooltipRef,
    hideTooltip,
    showTooltip,
  };
}

export default useTooltip;
