import { useEffect, useRef } from 'react';

import { itemsPerPage } from '../types/enums.ts';

function useTabs(activeValue: number, numOfTabs: number) {
  const tabSliderWidth = useRef(0);
  const containerRef = useRef<HTMLDivElement>(null);
  const containerWidth = useRef(0);
  const containerPadding = useRef(6);

  const halfContainer = containerWidth.current / 2;
  const halfTabsSlider = tabSliderWidth.current / 2;

  const start = containerPadding.current;
  const middle = halfContainer - halfTabsSlider;
  const end =
    containerWidth.current - tabSliderWidth.current - containerPadding.current;

  let position = start;
  if (activeValue === itemsPerPage.FIVE) position = middle;
  if (activeValue === itemsPerPage.TEN) position = end;

  useEffect(() => {
    containerWidth.current = containerRef.current?.offsetWidth ?? 0;
    tabSliderWidth.current =
      containerWidth.current / numOfTabs - containerPadding.current;
  }, [numOfTabs]);

  return { position, containerRef, tabSliderWidth };
}

export default useTabs;
