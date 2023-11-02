import { RefObject, useEffect, useRef } from 'react';

import LocomotiveScroll from 'locomotive-scroll';

function useScroll<TContainer extends HTMLElement>() {
  const containerRef = useRef<TContainer>(null);
  const scrollRef = useRef<LocomotiveScroll>();
  const observerRef = useRef<ResizeObserver>();

  useEffect(() => {
    if (containerRef.current) {
      containerRef.current.setAttribute('data-scroll-container', 'true');

      scrollRef.current = new LocomotiveScroll({
        el: containerRef.current,
        smooth: true,
        lerp: 0.2,
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

  return [containerRef, scrollRef] as [
    RefObject<TContainer>,
    RefObject<LocomotiveScroll>,
  ];
}

export default useScroll;
