import React, {
  createContext,
  PropsWithChildren,
  RefObject,
  useEffect,
  useMemo,
  useRef,
  useState,
} from 'react';

import LocomotiveScroll, { InstanceOptions } from 'locomotive-scroll';

interface ISmoothScrollProviderProps extends PropsWithChildren {
  options: InstanceOptions;
}

interface ISmoothScrollContext {
  scroll: null | LocomotiveScroll;
  containerRef: RefObject<HTMLDivElement>;
}

export const SmoothScrollContext = createContext<ISmoothScrollContext>({
  scroll: null,
} as ISmoothScrollContext);

function SmoothScrollProvider({
  children,
  options,
}: ISmoothScrollProviderProps) {
  const [scroll, setScroll] = useState<LocomotiveScroll | null>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  const value = useMemo(() => ({ scroll, containerRef }), [scroll]);

  useEffect(() => {
    let locoScroll: LocomotiveScroll;
    let containerObserver: ResizeObserver;
    const { current: scrollContainer } = containerRef;

    if (!scroll && scrollContainer) {
      (async () => {
        try {
          const SmoothScroll = (await import('locomotive-scroll')).default;
          locoScroll = new SmoothScroll({
            el: scrollContainer,
            ...options,
          });

          containerObserver = new ResizeObserver(() => locoScroll.update());
          containerObserver.observe(scrollContainer);
          setScroll(locoScroll);
        } catch (e) {
          // if the error was caught that means, the test environment is used
        }
      })();
    }

    return () => {
      locoScroll?.destroy();
      containerObserver?.disconnect();
    };
  }, [options, scroll]);

  return (
    <SmoothScrollContext.Provider value={value}>
      {children}
    </SmoothScrollContext.Provider>
  );
}

SmoothScrollContext.displayName = 'SmoothScrollContext';
SmoothScrollProvider.displayName = 'SmoothScrollProvider';

export default SmoothScrollProvider;
