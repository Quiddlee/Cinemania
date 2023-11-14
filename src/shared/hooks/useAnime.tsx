/* eslint-disable react-hooks/exhaustive-deps */

import { DependencyList, useEffect, useRef } from 'react';

import { AnimeParams } from 'animejs';
import anime from 'animejs/lib/anime.es.js';

type Params = Omit<AnimeParams, 'targets'>;

/**
 * Applies anime.js animation to the element using the specified parameters and dependencies.
 *
 * @template TElem - The type of the HTML element to animate.
 * @param {Params} params - The parameters used to configure the animation.
 * @param {DependencyList} [deps=[]] - The list of dependencies that trigger the animation when changed.
 * @return {React.MutableRefObject<TElem>} The reference to the HTML element being animated.
 */
function useAnime<TElem extends HTMLElement>(
  params: Params,
  deps: DependencyList = [],
) {
  const elementRef = useRef<TElem>(null);

  useEffect(() => {
    anime({
      targets: elementRef.current,
      ...params,
    });
  }, [...deps]);

  return elementRef;
}

export default useAnime;
