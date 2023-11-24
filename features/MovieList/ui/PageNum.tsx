import { useEffect, useRef } from 'react';

import { urlParams } from '@customTypes/enums';
import useAnime from '@shared/hooks/useAnime';
import useAppSelector from '@shared/hooks/useAppSelector';
import useGetMovieList from '@shared/hooks/useGetMovieList';
import useUrl from '@shared/hooks/useUrl';
import selectMoviesPerPage from '@shared/lib/selectors/selectMoviesPerPage';

function PageNum() {
  const { readUrl } = useUrl();
  const { totalResults } = useGetMovieList();
  const moviesPerPage = useAppSelector(selectMoviesPerPage);
  const prevMaxPage = useRef(0);

  const currPage = Number(readUrl(urlParams.PAGE));
  const maxPage = Math.ceil(totalResults / moviesPerPage);

  const { elementRef: currPageRef } = useAnime<HTMLSpanElement>({
    textContent: [0, currPage],
    round: 1,
    easing: 'easeInOutExpo',
    delay: 500,
  });

  const { elementRef: maxPageRef } = useAnime<HTMLSpanElement>(
    {
      textContent: [prevMaxPage.current, maxPage],
      round: 1,
      easing: 'easeInOutExpo',
    },
    [maxPage],
  );

  const { elementRef: containerRef } = useAnime<HTMLParagraphElement>({
    scale: [0, 1],
    opacity: [0, 1],
    easing: 'easeInOutElastic(1, .34)',
    duration: 1600,
    delay: 150,
  });

  useEffect(() => {
    prevMaxPage.current = maxPage;
  }, [maxPage]);

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
