import { RefObject, useEffect } from 'react';

import LocomotiveScroll from 'locomotive-scroll';

import useAppSelector from '../../../shared/hooks/useAppSelector';
import selectIsFetchingDetails from '../../../shared/lib/selectors/selectIsFetchingDetails';
import selectIsFetchingMain from '../../../shared/lib/selectors/selectIsFetchingMain';

/**
 * A custom hook that checks if the loader or the search is currently loading.
 *
 * @param {RefObject<LocomotiveScroll>} scrollRef - The reference to the scroll component.
 * @return {boolean} isLoading - A boolean indicating if the loader is loading.
 */
function useLoader(scrollRef: RefObject<LocomotiveScroll>) {
  const isFetchingMain = useAppSelector(selectIsFetchingMain);
  const isFetchingDetails = useAppSelector(selectIsFetchingDetails);

  const isFetching = isFetchingDetails || isFetchingMain;

  useEffect(() => {
    const scroll = scrollRef.current;
    scroll?.stop();
    return () => void scroll?.start();
  }, [scrollRef]);

  return isFetching;
}

export default useLoader;
