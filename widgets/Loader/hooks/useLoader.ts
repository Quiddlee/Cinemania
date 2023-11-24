import { useEffect } from 'react';

import useScroll from '@entities/scroll/hooks/useScroll';
import selectIsFetching from '@shared/lib/selectors/selectIsFetching';

import useAppSelector from '../../../shared/hooks/useAppSelector';

/**
 * A custom hook that checks if the loader or the search is currently loading.
 *
 * @return {boolean} isLoading - A boolean indicating if the loader is loading.
 */
function useLoader() {
  const { scroll } = useScroll();
  const isFetching = useAppSelector(selectIsFetching);

  useEffect(() => {
    scroll?.stop();
    return () => void scroll?.start();
  }, [scroll]);

  return isFetching;
}

export default useLoader;
