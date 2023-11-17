import { useEffect } from 'react';

import useAppDispatch from './useAppDispatch.ts';
import useAppSelector from './useAppSelector.ts';
import useUrl from './useUrl.ts';
import { dataFetched } from '../../app/model/slice.ts';
import { useGetMovieListQuery } from '../../entities/movie/api/movieApi.ts';
import selectSearchQuery from '../../features/Search/lib/selectors/selectSearchQuery.ts';
import { urlParams } from '../types/enums.ts';

/**
 * Retrieves a list of movies using the `useGetMovieListQuery` hook.
 *
 * @returns The list of movies fetched using the `useGetMovieListQuery` hook.
 */
function useGetMovieList() {
  const { readUrl } = useUrl();
  const dispatch = useAppDispatch();

  const query = useAppSelector(selectSearchQuery);
  const page = readUrl(urlParams.PAGE);

  const { data: movieList, isFetching } = useGetMovieListQuery({
    page,
    query,
  });

  useEffect(() => {
    dispatch(dataFetched(isFetching));
  }, [dispatch, isFetching]);

  return movieList;
}

export default useGetMovieList;
