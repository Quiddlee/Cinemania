/* eslint-disable react-hooks/exhaustive-deps */

import { DependencyList, RefObject, useEffect, useRef } from 'react';

import { AnimeInstance, AnimeParams } from 'animejs';
import anime from 'animejs/lib/anime.es.js';

type AnimeTarget =
  | HTMLElement
  | SVGElement
  | NodeList
  | RefObject<HTMLElement>
  | null;

interface IParams extends Omit<AnimeParams, 'targets'> {
  targets?: AnimeTarget;
}

/**
 * Applies anime.js animation to the element using the specified parameters and dependencies.
 *
 * @template TElem - The type of the HTML element to animate.
 * @param {AnimeParams} params - The parameters used to configure the animation.
 * @param {DependencyList} [deps=[]] - The list of dependencies that trigger the animation when changed.
 * @return {React.MutableRefObject<TElem>} The reference to the HTML element being animated.
 * You can also pass the targets param to params object, if your component already have ref to an element that needs to be animated
 */
function useAnime<T extends AnimeParams['targets']>(
  params: IParams,
  deps: DependencyList = [],
) {
  const elementRef = useRef<T>(null);
  const animeRef = useRef<AnimeInstance>();

  useEffect(() => {
    const targets =
      elementRef.current ||
      (params.targets as unknown as RefObject<T>)?.current ||
      params.targets;

    animeRef.current = anime({
      ...params,
      targets,
    });
  }, [...deps]);

  return { elementRef, animation: animeRef };
}

export default useAnime;
