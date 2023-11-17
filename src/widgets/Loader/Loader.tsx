import { RefObject } from 'react';

import LocomotiveScroll from 'locomotive-scroll';
import { createPortal } from 'react-dom';

import useLoader from './hooks/useLoader.ts';

interface ILoaderProps {
  scroll: RefObject<LocomotiveScroll>;
}

function Loader({ scroll }: ILoaderProps) {
  const isFetching = useLoader(scroll);

  if (!isFetching) return null;

  return createPortal(
    <div
      data-testid="loader"
      className="pointer-events-none absolute bottom-0 left-0 right-0 top-0 z-50 m-auto flex animate-fade-in items-center justify-center bg-black/20 backdrop-blur-sm">
      <span className="loader -translate-x-5" />
    </div>,
    document.body,
  );
}

export default Loader;
