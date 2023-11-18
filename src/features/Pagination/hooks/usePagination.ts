import { RefObject, useCallback } from 'react';

import LocomotiveScroll from 'locomotive-scroll';

import {
  DEFAULT_MOVIES_PER_PAGE,
  DEFAULT_PAGE,
} from '../../../shared/const/const.ts';
import useAppSelector from '../../../shared/hooks/useAppSelector.ts';
import useGetMovieList from '../../../shared/hooks/useGetMovieList.ts';
import useScrollTop from '../../../shared/hooks/useScrollTop.ts';
import useUrl from '../../../shared/hooks/useUrl.ts';
import selectIsFetching from '../../../shared/lib/selectors/selectIsFetching.ts';
import { urlParams } from '../../../shared/types/enums.ts';

function usePagination(scroll: RefObject<LocomotiveScroll>) {
  const { setUrl, readUrl } = useUrl();
  const isFetching = useAppSelector(selectIsFetching);
  const { totalResults } = useGetMovieList();

  const currPage = Number(readUrl(urlParams.PAGE));
  const isPrevDisabled = currPage === DEFAULT_PAGE || isFetching;
  const isNextDisabled = isFetching;
  const noPages = totalResults <= DEFAULT_MOVIES_PER_PAGE;

  useScrollTop(currPage, scroll, undefined, currPage);

  const handleNextPage = useCallback(() => {
    setUrl(urlParams.PAGE, currPage + 1);
  }, [setUrl, currPage]);

  const handlePrevPage = useCallback(() => {
    setUrl(urlParams.PAGE, currPage - 1);
  }, [currPage, setUrl]);

  return {
    handleNextPage,
    handlePrevPage,
    isPrevDisabled,
    isNextDisabled,
    noPages,
  };
}

export default usePagination;
