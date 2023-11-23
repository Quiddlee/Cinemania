import { RefObject, useEffect, useRef } from 'react';

/**
 * Hook for using Locomotive Scroll.
 *
 * @template TContainer - The type of the container element.
 * @returns obj - An object containing `containerRef` and `scrollRef` as React Ref Objects.
 * @returns obj.containerRef {TContainer} - ref with the container element that scroll is attached to.
 * @returns obj.scrollRef {LocomotiveScroll} - ref with the locomotive scroll instance.
 */
function useScroll<TContainer extends HTMLElement>() {
  const containerRef = useRef<TContainer>(null);
  const scrollRef = useRef<LocomotiveScroll>();
  const observerRef = useRef<ResizeObserver>();

  useEffect(() => {
    async function initScroll() {
      if (containerRef.current) {
        containerRef.current.setAttribute('data-Scroll-container', 'true');

        try {
          const LocomotiveScroll = (await import('locomotive-scroll')).default;

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

        setTimeout(() => {
          scrollRef.current?.update();
        }, 500);
      }
    }

    void initScroll();

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
