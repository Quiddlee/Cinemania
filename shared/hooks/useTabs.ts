import { useEffect, useRef, useState } from 'react';

import { itemsPerPage } from '../types/enums';

/**
 * Sets the position of a slider tab based on the active value and number of tabs.
 * @param {number} activeValue - The active value representing the current tab.
 * @param {number} numOfTabs - The number of tabs.
 * @return {Object} obj An object containing the position, container reference, and tab slider width.
 * @return {number} obj.position - The new position of the tab slider
 * @return {RefObject<HTMLDivElement>} obj.containerRef - Ref with the container
 * @return {RefObject<number>} obj.tabSliderWidth - Ref with cached width of the tab slider
 */
function useTabs(activeValue: number, numOfTabs: number) {
  const [tabSliderWidth, setTabSliderWidth] = useState(0);
  const containerRef = useRef<HTMLDivElement>(null);
  const containerWidth = useRef(0);
  const containerPadding = useRef(6);

  const halfContainer = containerWidth.current / 2;
  const halfTabsSlider = tabSliderWidth / 2;

  const start = containerPadding.current;
  const middle = halfContainer - halfTabsSlider;
  const end =
    containerWidth.current - tabSliderWidth - containerPadding.current;

  let position = start;
  if (activeValue === itemsPerPage.FIVE) position = middle;
  if (activeValue === itemsPerPage.TEN) position = end;

  useEffect(() => {
    containerWidth.current = containerRef.current?.offsetWidth ?? 0;
    setTabSliderWidth(
      containerWidth.current / numOfTabs - containerPadding.current,
    );
  }, [numOfTabs]);

  return { position, containerRef, tabSliderWidth };
}

export default useTabs;
