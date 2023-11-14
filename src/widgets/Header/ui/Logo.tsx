// 👇 letter order will never change so we can use array index as a key
/* eslint-disable react/no-array-index-key */

import { useEffect, useRef } from 'react';

import anime from 'animejs/lib/anime.es.js';

import LinkWithQuery from '../../../shared/ui/LinkWithQuery.tsx';
import { LOGO_ANIMATION_OFFSET, LOGO_LETTERS } from '../const/const.ts';

function Logo() {
  const popCorn = useRef<HTMLSpanElement>(null);
  const elementRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    anime
      .timeline({
        targets: popCorn.current,
      })
      .add({
        translateY: [-250, 0],
        opacity: [0, 1],
        scale: [2, 1],
        translateZ: 0,
        rotate: [anime.random(-30, 30), 0],
        easing: 'easeOutElastic',
        duration: 1100,
      })
      .add(
        {
          targets: elementRef.current?.children,
          translateY: [-120, 0],
          opacity: [0, 1],
          scale: [2, 1],
          translateZ: 0,
          delay: anime.stagger(80, { easing: 'easeInCirc' }),
          duration: 900,
        },
        '-=500',
      );
  }, []);

  return (
    <LinkWithQuery className="mr-auto" to="/">
      <h1 className="flex font-quicksand text-3xl font-bold tracking-tighter text-lime-400 lg:text-4xl">
        <span className="z-50" ref={popCorn}>
          🍿
        </span>
        <div ref={elementRef}>
          {LOGO_LETTERS.map((letter, i) => (
            <span
              style={{
                animationDelay: `${String(i * LOGO_ANIMATION_OFFSET)}s`,
                transform: `translateX(${-33 * (i * 1.3)})`,
              }}
              key={`${letter}-${i}`}
              className="z-10 inline-block">
              {letter}
            </span>
          ))}
        </div>
      </h1>
    </LinkWithQuery>
  );
}

export default Logo;
