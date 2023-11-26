import {
  ButtonHTMLAttributes,
  createContext,
  memo,
  MouseEvent,
  ReactNode,
  useCallback,
  useContext,
  useMemo,
} from 'react';

import useAnime from '@shared/hooks/useAnime';
import useTabs from '@shared/hooks/useTabs';
import Button from '@shared/ui/Button';

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
  handleSetValue: ButtonHTMLAttributes<HTMLButtonElement>['onClick'];
}

const SelectContext = createContext<ISelectContext | null>(null);

function Tabs<TVal extends string | number>({
  children,
  handler,
  activeValue,
}: ISelectProps<TVal>) {
  const { position, containerRef, tabSliderWidth } = useTabs(
    Number(activeValue),
    (children as ReactNode[])?.length || 1,
  );

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

  useAnime({
    targets: containerRef,
    scale: [0, 1],
    opacity: [0, 1],
    easing: 'easeInOutElastic(1, .34)',
    translateZ: 0,
    duration: 1600,
  });

  const { elementRef: tabSliderRef } = useAnime<HTMLSpanElement>(
    {
      translateX: position,
      translateZ: 0,
      scaleX: [1.4, 1],
      easing: 'spring(.2, 80, 4, 0)',
    },
    [position],
  );

  return (
    <div
      data-animate="tabs"
      ref={containerRef}
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
