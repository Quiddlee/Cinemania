/* eslint-disable react-hooks/exhaustive-deps */
import { DependencyList, useEffect, useRef } from 'react';

import useScroll from '@entities/scroll/hooks/useScroll';

import { SCROLL_TOP_DURATION } from '../const/const';

/**
 * Update scroll position to top when `currValue` changes.
 *
 * @param {unknown} currValue - The current value.
 * @param {...DependencyList} deps - Additional dependencies.
 * @return {void}
 */
function useScrollTop(currValue: unknown, ...deps: DependencyList) {
  const { scroll } = useScroll();
  const prevValueRef = useRef(currValue);

  useEffect(() => {
    if (prevValueRef.current !== currValue) {
      prevValueRef.current = currValue;
      scroll?.scrollTo?.('top', { duration: SCROLL_TOP_DURATION });
    }
  }, [currValue, scroll, ...deps]);
}

export default useScrollTop;
