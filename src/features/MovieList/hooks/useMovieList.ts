import { MouseEvent, RefObject, useEffect, useRef, useState } from 'react';

import LocomotiveScroll from 'locomotive-scroll';
import { useNavigate } from 'react-router-dom';

import {
  DEFAULT_PAGE,
  PAGE_PARAM,
  SCROLL_TOP_DURATION,
} from '../../../shared/const/const.ts';
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
  const listRef = useRef<HTMLUListElement>(null);
  const navigate = useNavigate();

  const { movies, isLoading } = useSearch();
  const { tooltipRef, hideTooltip, showTooltip } = useTooltip(scroll);
  useScrollTop(scroll, movies);

  const renderMovies = movies?.slice(0, moviesNum);
  const isNoMovies = !movies?.length;

  useEffect(() => {
    if (prevNum.current !== moviesNum) {
      scroll?.current?.scrollTo('top', { duration: SCROLL_TOP_DURATION });
      setUrl(PAGE_PARAM, String(DEFAULT_PAGE));
      prevNum.current = moviesNum;
    }
  }, [moviesNum, scroll, setUrl]);

  function handleClick(e: MouseEvent) {
    const { target } = e;

    if (target !== listRef.current) return;

    navigate('/');
    scroll.current?.scrollTo('top', { duration: SCROLL_TOP_DURATION });
  }

  return {
    moviesNum,
    setMoviesNum,
    isLoading,
    movies,
    tooltipRef,
    hideTooltip,
    showTooltip,
    listRef,
    navigate,
    handleClick,
    renderMovies,
    isNoMovies,
  };
}

export default useMovieList;
