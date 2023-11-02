import { MouseEvent, useRef } from 'react';

import createRadialHover from '../lib/helpers/animateRadialHover.ts';

function useRadialHover<TContainer extends HTMLElement>() {
  const containerRef = useRef<TContainer>(null);
  const [radialHover, cleanUp] = createRadialHover();

  const handleMouseMove = (e: MouseEvent) => {
    if (containerRef.current) radialHover(containerRef.current, e);
  };

  const handleMouseOut = () => {
    if (containerRef.current) cleanUp(containerRef.current);
  };

  return { handleMouseMove, handleMouseOut, containerRef };
}

export default useRadialHover;
