/* eslint-disable react-hooks/exhaustive-deps */
import { DependencyList, RefObject, useEffect } from 'react';

import LocomotiveScroll from 'locomotive-scroll';

function useScrollTop(
  scroll: RefObject<LocomotiveScroll>,
  ...deps: DependencyList
) {
  useEffect(() => {
    scroll.current?.scrollTo('top', { duration: 100 });
  }, [scroll, ...deps]);
}

export default useScrollTop;
