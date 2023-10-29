import { MouseEvent } from 'react';

import colors from 'tailwindcss/colors';

type AnimationFn = (elem: HTMLElement, evt: MouseEvent) => void;

type CleanUpFn = (elem: HTMLElement) => void;

type RadialHover = [AnimationFn, CleanUpFn];

function animateRadialHover(elem: HTMLElement, evt: MouseEvent) {
  const rect = elem.getBoundingClientRect();

  if (rect) {
    const pointerX = evt.clientX - rect.left;
    const pointerY = evt.clientY - rect.top;

    elem.style.background = `radial-gradient(circle at ${pointerX}px ${pointerY}px, rgb(112, 26, 117, 0.5) 0%, ${colors.transparent} 160px)`;
  }
}

function cleanUp(elem: HTMLElement) {
  elem.style.background = '';
}

function createRadialHover(): RadialHover {
  return [animateRadialHover, cleanUp];
}

export default createRadialHover;
