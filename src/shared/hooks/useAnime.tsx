/* eslint-disable react-hooks/exhaustive-deps */

import { DependencyList, useEffect, useRef, useState } from 'react';

import { AnimeParams } from 'animejs';
import anime from 'animejs/lib/anime.es.js';
import deepEqual from 'deep-equal';

interface IPrams extends Omit<AnimeParams, 'targets'> {}

/**
 * Applies anime.js animation to the element using the specified parameters and dependencies.
 *
 * @template TElem - The type of the HTML element to animate.
 * @param {IPrams} params - The parameters used to configure the animation.
 * @param {DependencyList} [deps=[]] - The list of dependencies that trigger the animation when changed.
 * For example if you want to trigger the animation on some state change.
 * However the useAnime hook is able to determine if your params object properties is changed between renders
 * @return {React.MutableRefObject<TElem | null>} The reference to the HTML element being animated.
 */
function useAnime<TElem extends HTMLElement>(
  params: IPrams,
  deps: DependencyList = [],
) {
  const elementRef = useRef<TElem>(null);
  const [paramsCache, setParamsCache] = useState(params);

  useEffect(() => {
    const isEqual = deepEqual(params, paramsCache, { strict: true });
    if (!isEqual) setParamsCache(params);
  }, [params]);

  useEffect(() => {
    anime({
      targets: elementRef.current,
      ...paramsCache,
    });
  }, [...deps, paramsCache]);

  return elementRef;
}

export default useAnime;
