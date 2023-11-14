import { RefObject, useEffect } from 'react';

import LocomotiveScroll from 'locomotive-scroll';
import { useNavigation } from 'react-router-dom';

import useSearch from '../../../features/Search/hooks/useSearch.ts';
import { LOADING_STATE } from '../../../shared/const/const.ts';

/**
 * A custom hook that checks if the loader or the search is currently loading.
 *
 * @param {RefObject<LocomotiveScroll>} scrollRef - The reference to the scroll component.
 * @return {boolean} isLoading - A boolean indicating if the loader is loading.
 */
function useLoader(scrollRef: RefObject<LocomotiveScroll>) {
  const navigation = useNavigation();
  const { isLoading: searchIsLoading } = useSearch();

  useEffect(() => {
    const scroll = scrollRef.current;
    scroll?.stop();
    return () => void scroll?.start();
  }, [scrollRef]);

  const loaderIsLoading = navigation.state === LOADING_STATE;
  const isLoading = searchIsLoading || loaderIsLoading;

  return isLoading;
}

export default useLoader;
