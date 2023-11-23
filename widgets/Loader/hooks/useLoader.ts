import { useEffect } from 'react';

import useScroll from '@entities/scroll/hooks/useScroll';

import useAppSelector from '../../../shared/hooks/useAppSelector';
import selectIsFetchingDetails from '../../../shared/lib/selectors/selectIsFetchingDetails';
import selectIsFetchingMain from '../../../shared/lib/selectors/selectIsFetchingMain';

/**
 * A custom hook that checks if the loader or the search is currently loading.
 *
 * @return {boolean} isLoading - A boolean indicating if the loader is loading.
 */
function useLoader() {
  const { scroll } = useScroll();
  const isFetchingMain = useAppSelector(selectIsFetchingMain);
  const isFetchingDetails = useAppSelector(selectIsFetchingDetails);

  const isFetching = isFetchingDetails || isFetchingMain;

  useEffect(() => {
    scroll?.stop();
    return () => void scroll?.start();
  }, [scroll]);

  return isFetching;
}

export default useLoader;
