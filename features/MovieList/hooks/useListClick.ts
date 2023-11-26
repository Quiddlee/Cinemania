import { MouseEvent, useRef } from 'react';

import { urlParams } from '@customTypes/enums';
import useScroll from '@entities/scroll/hooks/useScroll';
import { DEFAULT_PAGE, SCROLL_TOP_DURATION } from '@shared/const/const';
import useUrl from '@shared/hooks/useUrl';

/**
 * Closes the details section on list click.
 *
 * @return obj - An object containing the list reference and the click handler.
 * @return {RefObject<HTMLUListElement>} obj.listRef - A reference to the list element.
 * @return {(e: MouseEvent) => void} obj.handleClick - A function to handle the click event.
 * */
function useListClick() {
  const { scroll } = useScroll();
  const listRef = useRef<HTMLUListElement>(null);
  const { readUrl } = useUrl();

  function handleClick(e: MouseEvent) {
    const { target } = e;
    const currPage = Number(readUrl(urlParams.PAGE));

    if (target !== listRef.current || currPage === DEFAULT_PAGE) return;

    scroll?.scrollTo('top', { duration: SCROLL_TOP_DURATION });
  }

  return { listRef, handleClick };
}

export default useListClick;
