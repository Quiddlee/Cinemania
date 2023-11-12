import { useEffect, useRef } from 'react';

import useAnime from '../../../shared/hooks/useAnime.tsx';
import useUrl from '../../../shared/hooks/useUrl.ts';
import { urlParams } from '../../../shared/types/enums.ts';
import useSearch from '../../Search/hooks/useSearch.ts';

function PageNum() {
  const { readUrl } = useUrl();
  const { totalResults } = useSearch();
  const moviesPerPage = Number(readUrl(urlParams.MOVIES_PER_PAGE));
  const prevCurrPage = useRef(0);
  const prevMaxPage = useRef(0);

  const currPage = Number(readUrl(urlParams.PAGE));
  const maxPage = Math.ceil(totalResults / moviesPerPage);

  const currPageRef = useAnime({
    textContent: [prevCurrPage.current, currPage],
    round: 1,
    easing: 'easeInOutExpo',
  });

  const maxPageRef = useAnime(
    {
      textContent: [prevMaxPage.current, maxPage],
      round: 1,
      easing: 'easeInOutExpo',
    },
    [maxPage],
  );

  const containerRef = useAnime<HTMLParagraphElement>({
    scale: [0, 1],
    opacity: [0, 1],
    easing: 'easeInOutElastic(1, .34)',
    duration: 1600,
    delay: 150,
  });

  useEffect(() => {
    prevCurrPage.current = currPage;
    prevMaxPage.current = maxPage;
  }, [currPage, maxPage]);

  return (
    <span
      ref={containerRef}
      style={{
        viewTransitionName: 'page',
      }}
      className="flex h-12 min-w-[125px] items-center justify-center gap-1 rounded-full border-l border-t border-white/20 bg-white/10 px-4 py-1 text-zinc-100 shadow-2xl backdrop-blur-xl backdrop-saturate-200">
      <span ref={currPageRef}>{currPage}</span> of
      <span ref={maxPageRef}>{maxPage}</span>
    </span>
  );
}

export default PageNum;
