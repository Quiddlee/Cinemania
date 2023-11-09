import { useCallback } from 'react';

import { useSearchParams } from 'react-router-dom';

/*
TODO - add default params
{
  [PAGE_PARAM]: String(DEFAULT_PAGE),
  [MOVIES_PER_PAGE_PARAM]: String(DEFAULT_MOVIES_PER_PAGE),
}
 */

function useUrl() {
  const [searchParams, setSearchParams] = useSearchParams();

  const readUrl = useCallback(
    <TQuery extends string>(query: string) =>
      searchParams.get(query) as TQuery | null,
    [searchParams],
  );

  const setUrl = useCallback(
    (query: string, value: string) => {
      searchParams.set(query, value);
      setSearchParams(searchParams);
    },
    [searchParams, setSearchParams],
  );

  return { readUrl, setUrl };
}

export default useUrl;
