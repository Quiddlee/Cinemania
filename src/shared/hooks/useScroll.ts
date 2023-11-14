import { RefObject, useEffect, useRef } from 'react';

import LocomotiveScroll from 'locomotive-scroll';

function useScroll<TContainer extends HTMLElement>() {
  const containerRef = useRef<TContainer>(null);
  const scrollRef = useRef<LocomotiveScroll>();
  const observerRef = useRef<ResizeObserver>();

  useEffect(() => {
    if (containerRef.current && LocomotiveScroll) {
      containerRef.current.setAttribute('data-Scroll-container', 'true');

      try {
        scrollRef.current = new LocomotiveScroll({
          el: containerRef.current,
          smooth: true,
          smartphone: {
            smooth: true,
          },
          touchMultiplier: 6,
          lerp: 0.2,
          multiplier: 1.6,
        });
      } catch (e) {
        // if the error is caught that means the test environment is used
        observerRef.current?.disconnect?.();
      }

      observerRef.current = new ResizeObserver(
        () => scrollRef.current?.update(),
      );
      observerRef.current.observe(containerRef.current);
    }

    return () => {
      scrollRef.current?.destroy();
      observerRef.current?.disconnect();
    };
  }, [containerRef]);

  return { containerRef, scrollRef } as {
    containerRef: RefObject<TContainer>;
    scrollRef: RefObject<LocomotiveScroll>;
  };
}

export default useScroll;
