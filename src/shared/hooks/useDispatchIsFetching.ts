import { useEffect } from 'react';

import useAppDispatch from './useAppDispatch.ts';
import { dataFetchedMainPage } from '../../app/model/slice.ts';

/**
 * Dispatches the `dataFetched` action with the given `isFetching` value.
 *
 * @param {boolean} isFetching - A boolean value indicating whether data is being fetched.
 * @return {void}
 */
function useDispatchIsFetching(isFetching: boolean) {
  const dispatch = useAppDispatch();
  useEffect(() => {
    dispatch(dataFetchedMainPage(isFetching));
  }, [dispatch, isFetching]);
}

export default useDispatchIsFetching;
