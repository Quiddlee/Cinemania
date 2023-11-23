import { RefObject, useCallback } from 'react';

import { urlParams } from '@customTypes/enums';
import { DEFAULT_PAGE, MOVIES_PER_PAGE } from '@shared/const/const';
import useAppSelector from '@shared/hooks/useAppSelector';
import useGetMovieList from '@shared/hooks/useGetMovieList';
import useScrollTop from '@shared/hooks/useScrollTop';
import useUrl from '@shared/hooks/useUrl';
import selectIsFetchingDetails from '@shared/lib/selectors/selectIsFetchingDetails';
import selectIsFetchingMain from '@shared/lib/selectors/selectIsFetchingMain';
import LocomotiveScroll from 'locomotive-scroll';

function usePagination(scroll: RefObject<LocomotiveScroll>) {
  const { setUrl, readUrl } = useUrl();
  const isFetchingMain = useAppSelector(selectIsFetchingMain);
  const isFetchingDetails = useAppSelector(selectIsFetchingDetails);
  const { totalResults } = useGetMovieList();

  const isFetching = isFetchingDetails || isFetchingMain;
  const currPage = Number(readUrl(urlParams.PAGE));
  const isPrevDisabled = currPage === DEFAULT_PAGE || isFetching;
  const isNextDisabled = isFetching;
  const noPages = totalResults <= MOVIES_PER_PAGE;

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
