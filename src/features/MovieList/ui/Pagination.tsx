import { useCallback } from 'react';

import { DEFAULT_PAGE, PAGE_PARAM } from '../../../shared/const/const.ts';
import useUrl from '../../../shared/hooks/useUrl.ts';
import Button from '../../../shared/ui/Button.tsx';
import useSearch from '../../Search/hooks/useSearch.ts';

function Pagination() {
  const { setUrl, readUrl } = useUrl();
  const { fetchMovies, query } = useSearch();

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
    <article className="flex items-center justify-center gap-4">
      <Button disabled={isPrevDisabled} onClick={handlePrevPage}>
        Prev
      </Button>
      <Button onClick={handleNextPage}>Next</Button>
    </article>
  );
}

export default Pagination;
