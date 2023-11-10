import { RefObject, useCallback } from 'react';

import LocomotiveScroll from 'locomotive-scroll';

import { DEFAULT_PAGE, PAGE_PARAM } from '../../../shared/const/const.ts';
import useScrollTop from '../../../shared/hooks/useScrollTop.ts';
import useUrl from '../../../shared/hooks/useUrl.ts';
import useSearch from '../../Search/hooks/useSearch.ts';

function usePagination(scroll: RefObject<LocomotiveScroll>) {
  const { setUrl, readUrl } = useUrl();
  const { fetchMovies, query, isLoading, totalResults } = useSearch();

  const currPage = Number(readUrl(PAGE_PARAM));
  const isPrevDisabled = currPage === 1 || isLoading;
  const isNextDisabled = isLoading;
  const isPage = Boolean(currPage);
  const noPages = totalResults <= 10;

  useScrollTop(currPage, scroll, undefined, currPage);

  const handleNextPage = useCallback(() => {
    const newPage = currPage + 1;

    setUrl(PAGE_PARAM, isPage ? String(newPage) : String(DEFAULT_PAGE));

    fetchMovies(query, newPage);
  }, [isPage, setUrl, fetchMovies, query, currPage]);

  const handlePrevPage = useCallback(() => {
    if (!isPage || currPage === 1) return;

    const newPage = currPage - 1;

    setUrl(PAGE_PARAM, String(newPage));
    fetchMovies(query, newPage);
  }, [isPage, currPage, setUrl, fetchMovies, query]);

  return {
    handleNextPage,
    handlePrevPage,
    isPrevDisabled,
    isNextDisabled,
    noPages,
  };
}

export default usePagination;
