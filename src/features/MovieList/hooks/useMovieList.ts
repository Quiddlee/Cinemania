import { MouseEvent, RefObject, useRef } from 'react';

import LocomotiveScroll from 'locomotive-scroll';
import { useNavigate } from 'react-router-dom';

import useChangeMoviesPerPage from './useChangeMoviesPerPage.ts';
import {
  PAGE_PARAM,
  SCROLL_TOP_DURATION,
} from '../../../shared/const/const.ts';
import useScrollTop from '../../../shared/hooks/useScrollTop.ts';
import useTooltip from '../../../shared/hooks/useTooltip.ts';
import useUrl from '../../../shared/hooks/useUrl.ts';
import useSearch from '../../Search/hooks/useSearch.ts';

function useMovieList(scroll: RefObject<LocomotiveScroll>) {
  const listRef = useRef<HTMLUListElement>(null);
  const navigate = useNavigate();

  const { movies, isLoading, totalResults } = useSearch();
  const { tooltipRef, hideTooltip, showTooltip } = useTooltip(scroll);
  const { readUrl } = useUrl();

  const { renderMovies, moviesPerPage, setMoviesPerPage } =
    useChangeMoviesPerPage(scroll, movies);
  useScrollTop(readUrl(PAGE_PARAM), scroll, undefined, movies);

  const isNoMovies = !movies?.length;
  const currPage = Number(readUrl(PAGE_PARAM));
  const maxPage = Math.ceil(totalResults / moviesPerPage);

  function handleClick(e: MouseEvent) {
    const { target } = e;

    if (target !== listRef.current) return;

    navigate('/');
    scroll.current?.scrollTo('top', { duration: SCROLL_TOP_DURATION });
  }

  return {
    currPage,
    maxPage,
    moviesPerPage,
    setMoviesPerPage,
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
