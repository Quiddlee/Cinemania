import { MouseEvent, RefObject, useCallback, useRef } from 'react';

import LocomotiveScroll from 'locomotive-scroll';
import { useNavigate } from 'react-router-dom';

import {
  DEFAULT_MOVIES_PER_PAGE,
  DEFAULT_PAGE,
  MOVIES_PER_PAGE_PARAM,
  PAGE_PARAM,
  SCROLL_TOP_DURATION,
} from '../../../shared/const/const.ts';
import useScrollTop from '../../../shared/hooks/useScrollTop.ts';
import useTooltip from '../../../shared/hooks/useTooltip.ts';
import useUrl from '../../../shared/hooks/useUrl.ts';
import { MovieList } from '../../../shared/types/types.ts';
import useSearch from '../../Search/hooks/useSearch.ts';

function useMovieList(scroll: RefObject<LocomotiveScroll>) {
  const listRef = useRef<HTMLUListElement>(null);
  const navigate = useNavigate();
  const { movies, isLoading } = useSearch();

  const { tooltipRef, hideTooltip, showTooltip } = useTooltip(scroll);
  const { readUrl, setUrl } = useUrl();

  const moviesPerPage = Number(
    readUrl(MOVIES_PER_PAGE_PARAM) || DEFAULT_MOVIES_PER_PAGE,
  );
  const isNoMovies = !movies?.length;
  const currPage = Number(readUrl(PAGE_PARAM));
  const renderMovies = movies?.slice(0, moviesPerPage) as MovieList;

  useScrollTop(moviesPerPage, scroll, () =>
    setUrl(PAGE_PARAM, String(DEFAULT_PAGE)),
  );
  useScrollTop(currPage, scroll, undefined, movies);

  const handleMoviesPerPage = useCallback(
    (value: number) => {
      setUrl(MOVIES_PER_PAGE_PARAM, String(value));
    },
    [setUrl],
  );

  function handleClick(e: MouseEvent) {
    const { target } = e;

    if (target !== listRef.current) return;

    navigate('/');
    scroll.current?.scrollTo('top', { duration: SCROLL_TOP_DURATION });
  }

  return {
    isLoading,
    moviesPerPage,
    hideTooltip,
    showTooltip,
    tooltipRef,
    listRef,
    navigate,
    handleClick,
    renderMovies,
    isNoMovies,
    handleMoviesPerPage,
  };
}

export default useMovieList;
