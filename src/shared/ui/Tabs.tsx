import {
  createContext,
  memo,
  MouseEvent,
  PropsWithChildren,
  useCallback,
  useContext,
  useMemo,
} from 'react';

import Button from './Button.tsx';

interface IOptionProps<TVal> {
  children: string;
  value: TVal;
}

interface ISelectProps<TVal> extends PropsWithChildren {
  handler: (value: TVal) => void;
  activeValue: number | string;
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

  return (
    <div
      style={{
        viewTransitionName: `tab-${activeValue}`,
      }}
      className="space-x-2 rounded-full border-l border-t border-white/20 bg-white/10 p-1 text-zinc-100 shadow-2xl backdrop-blur-md backdrop-saturate-200">
      <SelectContext.Provider value={contextValue}>
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
    ? 'before:bg-lime-400 before:scale-100 before:opacity-100 text-neutral-950 font-semibold'
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
