import { RefObject, useEffect } from 'react';

import LocomotiveScroll from 'locomotive-scroll';
import { useNavigation } from 'react-router-dom';

import useSearch from '../../../features/Search/hooks/useSearch.ts';
import { LOADING_STATE } from '../../../shared/const/const.ts';

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
