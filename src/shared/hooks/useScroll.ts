import { MutableRefObject, RefObject, useEffect, useRef } from 'react';

import LocomotiveScroll from 'locomotive-scroll';

// TODO - change return value from array to object

function useScroll<
  TContainer extends HTMLElement,
  TScrollbar extends HTMLElement,
>() {
  const containerRef = useRef<TContainer>();
  const scrollRef = useRef<LocomotiveScroll>();
  const observerRef = useRef<ResizeObserver>();
  const scrollbarRef = useRef<TScrollbar>();

  useEffect(() => {
    if (containerRef.current) {
      containerRef.current.setAttribute('data-Scroll-container', 'true');

      scrollRef.current = new LocomotiveScroll({
        el: containerRef.current,
        smooth: true,
        smartphone: {
          smooth: true,
        },
        touchMultiplier: 6,
        lerp: 0.2,
        scrollbarContainer: scrollbarRef.current ?? false,
      });

      observerRef.current = new ResizeObserver(
        () => scrollRef.current?.update(),
      );
      observerRef.current.observe(containerRef.current);
    }

    return () => {
      scrollRef.current?.destroy();
      observerRef.current?.disconnect();
    };
  }, []);

  return [containerRef, scrollRef, scrollbarRef] as [
    MutableRefObject<TContainer>,
    RefObject<LocomotiveScroll>,
    MutableRefObject<TScrollbar>,
  ];
}

export default useScroll;
