import { useCallback } from 'react';

import { useRouter } from 'next/router';

function useQueryParams() {
  const router = useRouter();

  const setQuery = useCallback(
    (key: string, value: number | string) =>
      router.push(
        {
          ...router,
          query: {
            ...router.query,
            [key]: String(value),
          },
        },
        undefined,
        { shallow: true },
      ),
    [router],
  );

  const deleteQuery = useCallback(
    (param: string) => {
      const query = { ...router.query };
      delete query[param];
      router.push({
        pathname: router.pathname,
        query,
      });
    },
    [router],
  );

  return { setQuery, deleteQuery };
}

export default useQueryParams;
