import {
  createContext,
  memo,
  MouseEvent,
  ReactNode,
  useCallback,
  useContext,
  useEffect,
  useMemo,
  useState,
} from 'react';

import Button from './Button.tsx';
import useAnime from '../hooks/useAnime.ts';
import { itemsPerPage } from '../types/enums.ts';

interface IOptionProps<TVal> {
  children: string;
  value: TVal;
}

interface ISelectProps<TVal> {
  handler: (value: TVal) => void;
  activeValue: number | string;
  children: ReactNode | ReactNode[];
}

interface ISelectContext {
  activeValue: IOptionProps<string | number>['value'];
  handleSetValue: (e: MouseEvent) => void;
}

const SelectContext = createContext<ISelectContext | null>(null);

function Tabs<TVal extends string | number>({
  children,
  handler,
  activeValue,
}: ISelectProps<TVal>) {
  const [containerRef, setContainerRef] = useState<HTMLDivElement | null>(null);

  const handleSetValue = useCallback(
    (e: MouseEvent) => {
      const target = e.target as HTMLOptionElement;
      const targetValue = target.dataset.value;
      handler(Number(targetValue) as TVal);
    },
    [handler],
  );

  const contextValue = useMemo(
    () => ({ activeValue, handleSetValue }),
    [handleSetValue, activeValue],
  );

  const containerPadding = 4;
  const containerWidth = containerRef?.offsetWidth ?? 0;
  const numOfTabs = (children as ReactNode[])?.length || 1;
  const tabSliderWidth = containerWidth / numOfTabs - containerPadding;

  const start = containerPadding;
  const middle = containerWidth / 2 - tabSliderWidth / 2;
  const end = containerWidth - tabSliderWidth - containerPadding;

  let position = start;

  if (activeValue === itemsPerPage.FIVE) position = middle;
  if (activeValue === itemsPerPage.TEN) position = end;

  const { elementRef: animateContainerRef } = useAnime<HTMLDivElement>({
    scale: [0, 1],
    opacity: [0, 1],
    easing: 'easeInOutElastic(1, .34)',
    duration: 1600,
  });

  const { elementRef: tabSliderRef } = useAnime<HTMLSpanElement>(
    {
      translateX: position,
      scaleX: [1.4, 1],
      easing: 'spring(.2, 80, 4, 0)',
    },
    [position],
  );

  useEffect(() => {
    setContainerRef(animateContainerRef.current);
  }, [animateContainerRef]);

  return (
    <div
      data-animate="tabs"
      ref={animateContainerRef}
      style={{
        viewTransitionName: 'tabs',
      }}
      className="relative w-fit overflow-hidden rounded-full border-l border-t border-white/20 bg-white/10 p-1 text-zinc-100 shadow-2xl backdrop-blur-md backdrop-saturate-200">
      <SelectContext.Provider value={contextValue}>
        <span
          ref={tabSliderRef}
          style={{
            width: tabSliderWidth,
          }}
          className="pointer-events-none absolute bottom-0 left-0 top-0 -z-10 m-auto h-[80%] rounded-full bg-lime-400"
        />
        {children}
      </SelectContext.Provider>
    </div>
  );
}

function Tab<TVal extends string | number>({
  children,
  value,
}: IOptionProps<TVal>) {
  const context = useContext(SelectContext);

  const isActiveOption = context?.activeValue === value;
  const className = isActiveOption
    ? 'text-neutral-950 font-semibold before:hover:bg-transparent'
    : '';

  return (
    <Button
      styleType="select"
      className={className}
      onClick={context?.handleSetValue}
      data-value={value}>
      {children}
    </Button>
  );
}

Tabs.Tab = memo(Tab) as typeof Tab;

export default Tabs;
