import { RefObject, useEffect, useRef } from 'react';

import LocomotiveScroll from 'locomotive-scroll';

function useScroll<
  TContainer extends HTMLElement,
  TScrollbar extends HTMLElement | void = void,
>() {
  const containerRef = useRef<TContainer>(null);
  const scrollRef = useRef<LocomotiveScroll>();
  const observerRef = useRef<ResizeObserver>();
  const scrollbarRef = useRef<TScrollbar>(null);

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
        multiplier: 1.6,
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

  return { containerRef, scrollRef, scrollbarRef } as {
    containerRef: RefObject<TContainer>;
    scrollRef: RefObject<LocomotiveScroll>;
    scrollbarRef: RefObject<TScrollbar>;
  };
}

export default useScroll;
