import { useContext } from 'react';

import { SmoothScrollContext } from '@entities/scroll/context/smoothScroll';

function useScroll() {
  const context = useContext(SmoothScrollContext);

  if (context === undefined)
    throw new Error('The scroll context is used outside the provider!');

  return context;
}

export default useScroll;
