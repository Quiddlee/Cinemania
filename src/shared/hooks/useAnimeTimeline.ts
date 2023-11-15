/* eslint-disable react-hooks/exhaustive-deps */

import { DependencyList, useEffect, useRef } from 'react';

import { AnimeTimelineInstance } from 'animejs';
import anime from 'animejs/lib/anime.es';

import reduceAnimeTargets from '../lib/helpers/reduceAnimeTargets.ts';
import { IParams } from '../types/interfaces.ts';

/**
 * A hook to use Anime.js timeline functionality.
 *
 * @param {DependencyList} deps - An array of dependencies to watch for changes.
 * @param {IParams[]} add - Additional params to add to the timeline.
 * @returns A reference to the Anime.js timeline instance.
 */
function useAnimeTimeline(deps: DependencyList = [], ...add: IParams[]) {
  const timelineRef = useRef<AnimeTimelineInstance>();

  useEffect(() => {
    timelineRef.current = anime.timeline({});

    add.forEach((param) => {
      const { timelineOffset, isChildren, ...restParams } = param;
      const targets = reduceAnimeTargets(param, null, isChildren);

      timelineRef.current = timelineRef.current?.add(
        {
          ...restParams,
          targets,
        },
        timelineOffset,
      );
    });
  }, [...deps]);

  return timelineRef;
}

export default useAnimeTimeline;
