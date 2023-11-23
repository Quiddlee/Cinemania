import { MouseEvent, RefObject, useRef } from 'react';

import { urlParams } from '@customTypes/enums';
import { DEFAULT_PAGE, SCROLL_TOP_DURATION } from '@shared/const/const';
import useUrl from '@shared/hooks/useUrl';
import LocomotiveScroll from 'locomotive-scroll';

/**
 * Closes the details section on list click.
 *
 * @param {RefObject<LocomotiveScroll>} scroll - A reference to the scroll container. Used to scroll to the top of the page
 * @return obj - An object containing the list reference and the click handler.
 * @return {RefObject<HTMLUListElement>} obj.listRef - A reference to the list element.
 * @return {(e: MouseEvent) => void} obj.handleClick - A function to handle the click event.
 * */
function useListClick(scroll: RefObject<LocomotiveScroll>) {
  const listRef = useRef<HTMLUListElement>(null);
  const { readUrl } = useUrl();

  function handleClick(e: MouseEvent) {
    const { target } = e;
    const currPage = Number(readUrl(urlParams.PAGE));

    if (target !== listRef.current || currPage === DEFAULT_PAGE) return;

    scroll.current?.scrollTo('top', { duration: SCROLL_TOP_DURATION });
  }

  return { listRef, handleClick };
}

export default useListClick;
