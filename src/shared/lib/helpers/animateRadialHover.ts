import { MouseEvent } from 'react';

import colors from 'tailwindcss/colors';

import getElementMouseCoord from './getElementMouseCoord.ts';

type AnimationFn = (elem: HTMLElement, evt: MouseEvent) => void;

type CleanUpFn = (elem: HTMLElement) => void;

type RadialHover = [AnimationFn, CleanUpFn];

function animateRadialHover(elem: HTMLElement, e: MouseEvent) {
  const { posX, posY } = getElementMouseCoord(elem, e);

  elem.style.background = `radial-gradient(circle at ${posX}px ${posY}px, rgb(112, 26, 117, 0.5) 0%, ${colors.transparent} 160px)`;
}

function cleanUp(elem: HTMLElement) {
  elem.style.background = '';
}

function createRadialHover(): RadialHover {
  return [animateRadialHover, cleanUp];
}

export default createRadialHover;
