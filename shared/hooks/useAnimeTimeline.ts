/* eslint-disable react-hooks/exhaustive-deps */

import { DependencyList, useEffect, useRef } from 'react';

import { IParams } from '@customTypes/interfaces';
import { AnimeTarget } from '@customTypes/types';
import reduceAnimeTargets from '@shared/lib/helpers/reduceAnimeTargets';
import anime, { AnimeTimelineInstance } from 'animejs';

interface IOptions {
  set?: { targets: AnimeTarget; values: { [key: string]: number } }[];
}

/**
 * A hook to use Anime.js timeline functionality.
 *
 * @param {IOptions} options - anime options.
 * @param {DependencyList} deps - An array of dependencies to watch for changes.
 * @param {IParams[]} add - Additional params to add to the timeline.
 * @returns A reference to the Anime.js timeline instance.
 */
function useAnimeTimeline(
  options: IOptions = {},
  deps: DependencyList = [],
  ...add: IParams[]
) {
  const timelineRef = useRef<AnimeTimelineInstance>();

  useEffect(() => {
    options.set?.forEach((opt) => {
      const targets = reduceAnimeTargets(opt);
      anime.set(targets, opt.values);
    });

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
