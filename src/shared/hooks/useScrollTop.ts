/* eslint-disable react-hooks/exhaustive-deps */
import { DependencyList, RefObject, useEffect, useRef } from 'react';

import LocomotiveScroll from 'locomotive-scroll';

import { SCROLL_TOP_DURATION } from '../const/const.ts';

function useScrollTop(
  currValue: unknown,
  scroll: RefObject<LocomotiveScroll> | undefined,
  callback?: () => void,
  ...deps: DependencyList
) {
  const prevValueRef = useRef(currValue);

  useEffect(() => {
    if (prevValueRef.current !== currValue) {
      prevValueRef.current = currValue;
      scroll?.current?.scrollTo?.('top', { duration: SCROLL_TOP_DURATION });
      callback?.();
    }
  }, [currValue, scroll, ...deps]);
}

export default useScrollTop;
