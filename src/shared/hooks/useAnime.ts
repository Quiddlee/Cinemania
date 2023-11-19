/* eslint-disable react-hooks/exhaustive-deps */

import { DependencyList, useEffect, useRef } from 'react';

import { AnimeInstance } from 'animejs';
import anime from 'animejs/lib/anime.es.js';

import reduceAnimeTargets from '../lib/helpers/reduceAnimeTargets.ts';
import { IParams } from '../types/interfaces.ts';
import { AnimeTarget } from '../types/types.ts';

/**
 * Applies anime.js animation to the element using the specified parameters and dependencies.
 *
 * @template TElem - The type of the HTML element to animate.
 * @param {AnimeParams} params - The parameters used to configure the animation.
 * @param {DependencyList} [deps=[]] - The list of dependencies that trigger the animation when changed.
 * @param isChildren
 * @return {React.MutableRefObject<TElem>} The reference to the HTML element being animated.
 * You can also pass the targets param to params object, if your component already have ref to an element that needs to be animated
 */
function useAnime<T extends AnimeTarget>(
  params: IParams,
  deps: DependencyList = [],
  isChildren: boolean = false,
) {
  const elementRef = useRef<T>(null);
  const animeRef = useRef<AnimeInstance>();

  useEffect(() => {
    const targets = reduceAnimeTargets<T>(params, elementRef, isChildren);

    animeRef.current = anime({
      ...params,
      targets,
    });
  }, [...deps]);

  return { elementRef, animation: animeRef };
}

export default useAnime;
