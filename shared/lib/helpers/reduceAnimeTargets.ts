import { RefObject } from 'react';

import { IParams } from '../../types/interfaces';
import { AnimeTarget } from '../../types/types';

/**
 * Reduces the list of Anime.js targets based on the provided parameters.
 *
 * @template {AnimeTarget} T - Generic elementRef
 * @param {IParams} params - The parameters for reducing the anime targets.
 * @param {RefObject<T> | null} elementRef - The reference to the anime target element.
 * @param {boolean} isChildren - Indicates whether to consider the children of the anime target element.
 *
 * @returns {T | T[] | null} - The reduced anime target(s).
 */
function reduceAnimeTargets<T extends AnimeTarget>(
  params: IParams,
  elementRef: RefObject<T> | null = null,
  isChildren: boolean = false,
) {
  let { targets } = params;

  if (elementRef?.current) {
    targets = elementRef.current;

    if (isChildren && 'children' in elementRef.current) {
      targets = elementRef.current?.children;
    }
  }

  if (params?.targets && 'current' in params.targets) {
    targets = params.targets.current;

    if (isChildren) {
      targets = params.targets.current?.children;
    }
  }

  return targets as AnimeTarget;
}

export default reduceAnimeTargets;
