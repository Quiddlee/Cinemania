/* eslint-disable react-hooks/exhaustive-deps */
import { DependencyList, RefObject, useEffect, useRef } from 'react';

import LocomotiveScroll from 'locomotive-scroll';

import useUrl from './useUrl.ts';
import { PAGE_PARAM } from '../const/const.ts';

function useScrollTop(
  scroll: RefObject<LocomotiveScroll> | undefined,
  ...deps: DependencyList
) {
  const { readUrl } = useUrl();
  const prevPageRef = useRef(readUrl(PAGE_PARAM));

  useEffect(() => {
    const currPage = readUrl(PAGE_PARAM) as string;

    if (prevPageRef.current !== currPage) {
      prevPageRef.current = currPage;
      scroll?.current?.scrollTo('top', { duration: 100 });
    }
  }, [scroll, ...deps]);
}

export default useScrollTop;
