import { useCallback } from 'react';

import { useRouter } from 'next/router';

import { UrlParams } from '@customTypes/types';
import { QUERY_PARAMS_INIT } from '@shared/const/const';
import useQueryParams from '@shared/hooks/useQueryParams';

type SetUrl = {
  (query: UrlParams, value: string | number): void;
  (multipleQueriesAndValues: Partial<Record<UrlParams, string | number>>): void; // used for multiple queries at once (to avoid multiple renders and to update history only once for proper history navigation)
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
  const router = useRouter();
  const { setQuery, deleteQuery } = useQueryParams();

  const readUrl: ReadUrl = useCallback(
    (queryKey: UrlParams) =>
      (router.query[queryKey as keyof typeof router] as string) ??
      QUERY_PARAMS_INIT[queryKey],
    [router],
  );

  const setUrl: SetUrl = useCallback(
    (
      query: UrlParams | Partial<Record<UrlParams, string | number>>,
      value?: string | number,
    ) => {
      if (typeof query === 'object') {
        Object.entries(query).forEach(([queryKey, queryValue]) => {
          if (queryValue === '') {
            deleteQuery(queryKey);
            return;
          }
          void setQuery(queryKey, queryValue);
        });
      }

      if (typeof query !== 'object' && value) {
        void setQuery(query, value);
      }
    },
    [deleteQuery, setQuery],
  );

  return { readUrl, setUrl };
}

export default useUrl;
