import { useCallback } from 'react';

import { useSearchParams } from 'react-router-dom';

import { QUERY_PARAMS_INIT } from '../const/const.ts';
import { UrlParams } from '../types/types.ts';

type SetUrl = {
  (query: UrlParams, value: string | number): void;
  (multipleQueriesAndValues: Record<UrlParams, string | number>): void; // used for multiple queries at once (to avoid multiple renders and to update history only once for proper history navigation)
};

type ReadUrl = (query: UrlParams) => string;

/**
 * Returns an object with two methods, `readUrl` and `setUrl`, that can be used to read and set URL parameters.
 *
 * @return obj
 * @return {ReadUrl} obj.readUrl - A function that takes a query parameter and returns its value from the URL.
 * @return {SetUrl} obj.setUrl - A function that takes a query parameter and its value and sets it in the URL.
 */
function useUrl() {
  const [searchParams, setSearchParams] = useSearchParams(QUERY_PARAMS_INIT);

  const readUrl: ReadUrl = useCallback(
    (query: UrlParams) => searchParams.get(query) as string,
    [searchParams],
  );

  const setUrl: SetUrl = useCallback(
    (
      query: UrlParams | Record<UrlParams, string | number>,
      value?: string | number,
    ) => {
      if (typeof query === 'object') {
        Object.entries(query).forEach(([queryKey, queryValue]) =>
          searchParams.set(queryKey, String(queryValue)),
        );
      }

      if (typeof query !== 'object' && value) {
        searchParams.set(query, String(value));
      }

      setSearchParams(searchParams);
    },
    [searchParams, setSearchParams],
  );

  return { readUrl, setUrl };
}

export default useUrl;
