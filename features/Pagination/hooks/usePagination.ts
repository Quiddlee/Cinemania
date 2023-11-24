import { useCallback } from 'react';

import { urlParams } from '@customTypes/enums';
import { DEFAULT_PAGE, MOVIES_PER_PAGE } from '@shared/const/const';
import useAppSelector from '@shared/hooks/useAppSelector';
import useGetMovieList from '@shared/hooks/useGetMovieList';
import useScrollTop from '@shared/hooks/useScrollTop';
import useUrl from '@shared/hooks/useUrl';
import selectIsFetching from '@shared/lib/selectors/selectIsFetching';

function usePagination() {
  const { setUrl, readUrl } = useUrl();
  const isFetching = useAppSelector(selectIsFetching);
  const { totalResults } = useGetMovieList();

  const currPage = Number(readUrl(urlParams.PAGE));
  const isPrevDisabled = currPage === DEFAULT_PAGE || isFetching;
  const isNextDisabled = isFetching;
  const noPages = totalResults <= MOVIES_PER_PAGE;

  useScrollTop(currPage, currPage);

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
