import { RefObject, useEffect, useRef, useState } from 'react';

import LocomotiveScroll from 'locomotive-scroll';

import { DEFAULT_PAGE, PAGE_PARAM } from '../../../shared/const/const.ts';
import useScrollTop from '../../../shared/hooks/useScrollTop.ts';
import useTooltip from '../../../shared/hooks/useTooltip.ts';
import useUrl from '../../../shared/hooks/useUrl.ts';
import itemsPerPage from '../../../shared/types/enums.ts';
import { ItemsPerPage } from '../../../shared/types/types.ts';
import useSearch from '../../Search/hooks/useSearch.ts';

function useMovieList(scroll: RefObject<LocomotiveScroll>) {
  const [moviesNum, setMoviesNum] = useState<ItemsPerPage>(itemsPerPage.TEN);
  const { setUrl } = useUrl();
  const prevNum = useRef<number>(moviesNum);

  const { movies, isLoading } = useSearch();
  const { tooltipRef, hideTooltip, showTooltip } = useTooltip(scroll);
  useScrollTop(scroll, movies);

  useEffect(() => {
    if (prevNum.current !== moviesNum) {
      setUrl(PAGE_PARAM, String(DEFAULT_PAGE));
      prevNum.current = moviesNum;
    }
  }, [moviesNum, setUrl]);

  return {
    moviesNum,
    setMoviesNum,
    isLoading,
    movies,
    tooltipRef,
    hideTooltip,
    showTooltip,
    scroll,
  };
}

export default useMovieList;
