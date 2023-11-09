import { MouseEvent, RefObject, useRef } from 'react';

import LocomotiveScroll from 'locomotive-scroll';
import { useNavigate } from 'react-router-dom';

import {
  DEFAULT_PAGE,
  PAGE_PARAM,
  SCROLL_TOP_DURATION,
} from '../../../shared/const/const.ts';
import useUrl from '../../../shared/hooks/useUrl.ts';

function useListClick(scroll: RefObject<LocomotiveScroll>) {
  const listRef = useRef<HTMLUListElement>(null);
  const navigate = useNavigate();
  const { readUrl } = useUrl();
  const currPage = Number(readUrl(PAGE_PARAM));

  function handleClick(e: MouseEvent) {
    const { target } = e;

    if (target !== listRef.current || currPage === DEFAULT_PAGE) return;

    navigate('/');
    scroll.current?.scrollTo('top', { duration: SCROLL_TOP_DURATION });
  }

  return { listRef, handleClick };
}

export default useListClick;
