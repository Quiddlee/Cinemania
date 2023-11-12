import { useEffect, useRef } from 'react';

import { AnimeParams } from 'animejs';
import anime from 'animejs/lib/anime.es.js';

interface IPrams extends Omit<AnimeParams, 'targets'> {}

interface IOptions<TElem extends HTMLElement> {
  once?: boolean;
  targetElement?: TElem | null;
}

/**
 * Applies anime.js animation to the specified element.
 *
 * @template TElem - The type of the element to be animated.
 * @param {IPrams} params - The parameters for the animation.
 * @param {IOptions<TElem>} options - The options for the animation.
 * @param {boolean} options.once - Flag indicating if the animation should only be executed once.
 * @param {TElem} options.targetElement - The target element to apply the animation.
 * Used if the component already have ref of the element that needs to be animated.
 * So simply pass this ref.current instead of defining the returned ref
 * @return {React.RefObject<TElem>} - A reference to the animated element.
 */
function useAnime<TElem extends HTMLElement>(
  params: IPrams,
  { once, targetElement }: IOptions<TElem> = {},
) {
  const elementRef = useRef<TElem>(null);
  const isOnceAnimated = useRef(false);

  useEffect(() => {
    if (once && !isOnceAnimated.current && targetElement) {
      anime({
        targets: elementRef.current ?? targetElement,
        ...params,
      });

      isOnceAnimated.current = true;
    }

    if (!once) {
      anime({
        targets: elementRef.current ?? targetElement,
        ...params,
      });
    }
  }, [once, params, targetElement]);

  return elementRef;
}

export default useAnime;
