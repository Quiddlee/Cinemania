import { useEffect, useState } from 'react';

import { useRouter } from 'next/router';

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
  const [loading, setLoading] = useState(false);
  const router = useRouter();

  const isLoading = isFetching || loading;

  useEffect(() => {
    const handleStart = () => setLoading(true);
    const handleComplete = () => setLoading(false);

    router.events.on('routeChangeStart', handleStart);
    router.events.on('routeChangeComplete', handleComplete);
    router.events.on('routeChangeError', handleComplete);

    return () => {
      router.events.off('routeChangeStart', handleStart);
      router.events.off('routeChangeComplete', handleComplete);
      router.events.off('routeChangeError', handleComplete);
    };
  }, [router.asPath, router.events]);

  useEffect(() => {
    scroll?.stop();
    return () => void scroll?.start();
  }, [scroll]);

  return isLoading;
}

export default useLoader;
