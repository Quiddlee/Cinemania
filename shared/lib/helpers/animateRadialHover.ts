import { MouseEvent as ReactMouseEvent } from 'react';

import colors from 'tailwindcss/colors';

import getElementMouseCoord from './getElementMouseCoord';

type AnimationFn = (
  elem: HTMLElement,
  evt: MouseEvent | ReactMouseEvent,
) => void;

type CleanUpFn = (elem: HTMLElement) => void;

type RadialHover = [AnimationFn, CleanUpFn];

const THRESHOLD = 700;
const ANIMATION_DURATION = 450;
let isEnd = false;
let animationFrameId: number;
let pointerX = 0;
let pointerY = 0;

function animate(
  currTimeStamp: number,
  startTimeStamp: number,
  elem: HTMLElement,
) {
  const animationProgress =
    (currTimeStamp - startTimeStamp) / ANIMATION_DURATION;
  const value = Math.sin((animationProgress * Math.PI) / 2);

  if (animationProgress < 1) {
    elem.style.background = `radial-gradient(circle at ${pointerX}px ${pointerY}px, rgb(112, 26, 117, 0.5) 0%, ${
      colors.transparent
    } ${value * THRESHOLD}px)`;
    animationFrameId = requestAnimationFrame((t) =>
      animate(t, startTimeStamp, elem),
    );
  }

  if (animationProgress >= 1) {
    elem.style.background = `radial-gradient(circle at ${pointerX}px ${pointerY}px, rgb(112, 26, 117, 0.5) 0%, ${colors.transparent} ${THRESHOLD}px)`;
    isEnd = true;
  }
}

function animateRadialHover(
  elem: HTMLElement,
  e: MouseEvent | ReactMouseEvent,
) {
  const { posX, posY } = getElementMouseCoord(elem, e);
  const startTimeStamp = performance.now();
  pointerX = posX;
  pointerY = posY;

  if (isEnd) {
    elem.style.background = `radial-gradient(circle at ${posX}px ${posY}px, rgb(112, 26, 117, 0.5) 0%, ${colors.transparent} ${THRESHOLD}px)`;
    return;
  }

  if (!animationFrameId)
    animationFrameId = requestAnimationFrame(() =>
      animate(startTimeStamp, startTimeStamp, elem),
    );
}

function cleanUp(elem: HTMLElement) {
  cancelAnimationFrame(animationFrameId);
  animationFrameId = 0;
  elem.style.background = '';
  isEnd = false;
}

function createRadialHover(): RadialHover {
  return [animateRadialHover, cleanUp];
}

export default createRadialHover;
