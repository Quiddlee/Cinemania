import { useCallback } from 'react';

import Button from './ui/Button.tsx';
import arrowLeft from '../../assets/arrow-left.svg';
import arrowRight from '../../assets/arrow-right.svg';
import { DEFAULT_PAGE, PAGE_PARAM } from '../../shared/const/const.ts';
import useUrl from '../../shared/hooks/useUrl.ts';
import useSearch from '../Search/hooks/useSearch.ts';

function Pagination() {
  const { setUrl, readUrl } = useUrl();
  const { fetchMovies, query, isLoading } = useSearch();

  const currPage = Number(readUrl(PAGE_PARAM));
  const isPrevDisabled = currPage === 1;
  const isPage = Boolean(currPage);

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

  return (
    <div className="absolute h-screen w-screen">
      <Button
        position="left"
        disabled={isPrevDisabled || isLoading}
        onClick={handlePrevPage}>
        {arrowLeft}
      </Button>
      <Button position="right" disabled={isLoading} onClick={handleNextPage}>
        {arrowRight}
      </Button>
    </div>
  );
}

export default Pagination;
