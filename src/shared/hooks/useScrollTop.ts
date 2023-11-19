/* eslint-disable react-hooks/exhaustive-deps */
import { DependencyList, RefObject, useEffect, useRef } from 'react';

import LocomotiveScroll from 'locomotive-scroll';

import { SCROLL_TOP_DURATION } from '../const/const.ts';

/**
 * Update scroll position to top when `currValue` changes.
 *
 * @param {unknown} currValue - The current value.
 * @param {RefObject<LocomotiveScroll> | undefined} scroll - The scroll reference.
 * @param {...DependencyList} deps - Additional dependencies.
 * @return {void}
 */
function useScrollTop(
  currValue: unknown,
  scroll: RefObject<LocomotiveScroll> | undefined,
  ...deps: DependencyList
) {
  const prevValueRef = useRef(currValue);

  useEffect(() => {
    if (prevValueRef.current !== currValue) {
      prevValueRef.current = currValue;
      scroll?.current?.scrollTo?.('top', { duration: SCROLL_TOP_DURATION });
    }
  }, [currValue, scroll, ...deps]);
}

export default useScrollTop;
