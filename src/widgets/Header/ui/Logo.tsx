// 👇 letter order will never change so we can use array index as a key
/* eslint-disable react/no-array-index-key */

import { useRef } from 'react';

import anime from 'animejs/lib/anime.es';

import useAnimeTimeline from '../../../shared/hooks/useAnimeTimeline.ts';
import LinkWithQuery from '../../../shared/ui/LinkWithQuery.tsx';
import { LOGO_LETTERS } from '../const/const.ts';

function Logo() {
  const popCorn = useRef<HTMLSpanElement>(null);
  const elementRef = useRef<HTMLDivElement>(null);

  useAnimeTimeline(
    {},
    [],
    {
      targets: elementRef,
      transformOrigin: ['50% 100% 0px', '50% 100% 0px'],
      translateY: [
        {
          value: [200, -30],
          duration: 300,
          easing: 'cubicBezier(0.225, 1, 0.915, 0.980)',
          endDelay: 20,
        },
        { value: 0, duration: 120, easing: 'easeInQuad' },
      ],
      scaleX: [
        { value: [0, 0.8], duration: 190, easing: 'easeInQuad' },
        { value: 0.8, duration: 300, easing: 'easeInQuad' },
        { value: 1.1, duration: 90, easing: 'easeOutQuad' },
        { value: 0.95, duration: 120, easing: 'easeOutCirc' },
        { value: 1, duration: 100, easing: 'easeOutCirc' },
      ],
      scaleY: [
        { value: [0.2, 1.3], duration: 200, easing: 'easeInSine' },
        { value: 0.7, duration: 440, easing: 'easeOutQuad' },
        { value: 1.2, duration: 100, easing: 'easeOutCirc' },
        { value: 1, duration: 100, easing: 'easeOutCirc' },
      ],
      translateZ: 0,
      delay: anime.stagger(120, { easing: 'easeInCirc' }),
      isChildren: true,
    },
    {
      targets: popCorn,
      opacity: [0, 1],
      transformOrigin: ['50% 100% 0px', '50% 100% 0px'],
      translateY: [
        { value: [-250, 0], duration: 270, easing: 'easeOutCubic' },
        { value: -10, duration: 120, easing: 'easeInQuad' },
        { value: 0, duration: 200, easing: 'easeInQuad' },
      ],
      scaleX: [
        { value: [0, 0.8], duration: 120, easing: 'easeOutQuad' },
        { value: 2, duration: 190, easing: 'easeInQuad' },
        { value: 1, duration: 120, easing: 'easeOutQuad' },
        { value: 0.9, duration: 120, easing: 'easeOutQuad' },
        { value: 1, duration: 700, easing: 'easeOutElastic' },
      ],
      scaleY: [
        { value: 2, duration: 120, easing: 'easeOutQuad' },
        { value: 0.2, duration: 190, easing: 'easeOutQuad' },
        { value: 1, duration: 120, easing: 'easeOutCirc' },
        { value: 1.2, duration: 120, easing: 'easeOutCirc' },
        { value: 1, duration: 700, easing: 'easeOutElastic' },
      ],
      translateZ: 0,
      timelineOffset: '+=100',
    },
    {
      targets: elementRef,
      transformOrigin: ['50% 100% 0px', '50% 100% 0px'],
      translateY: [
        {
          value: [0, -30],
          duration: 100,
          easing: 'cubicBezier(0.225, 1, 0.915, 0.980)',
        },
        { value: 0, duration: 120, easing: 'easeInQuad' },
      ],
      scaleX: [
        { value: 0.8, duration: 190, easing: 'easeOutQuad' },
        { value: 1.2, duration: 140, easing: 'easeOutQuad' },
        { value: 1, duration: 100, easing: 'easeOutQuad' },
      ],
      scaleY: [
        { value: 1.6, duration: 190, easing: 'easeOutQuad' },
        { value: 0.65, duration: 140, easing: 'easeOutExpo' },
        { value: 1, duration: 700, easing: 'easeOutElastic(1, .4)' },
      ],
      translateZ: 0,
      delay: anime.stagger(25),
      isChildren: true,
      timelineOffset: '-=1000',
    },
  );

  return (
    <LinkWithQuery className="mr-auto" to="/">
      <h1 className="flex font-quicksand text-3xl font-bold tracking-tighter text-lime-400 lg:text-4xl">
        <span className="z-50" ref={popCorn}>
          🍿
        </span>
        <div ref={elementRef}>
          {LOGO_LETTERS.map((letter, i) => (
            <span key={`${letter}-${i}`} className="z-10 inline-block">
              {letter}
            </span>
          ))}
        </div>
      </h1>
    </LinkWithQuery>
  );
}

export default Logo;
