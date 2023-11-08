import {
  createContext,
  MouseEvent,
  useCallback,
  useContext,
  useMemo,
} from 'react';

import Button from './Button.tsx';
import { IChildren } from '../types/interfaces.ts';

interface IOptionProps<TVal> {
  children: string;
  value: TVal;
}

interface ISelectProps<TVal> extends IChildren {
  handler: (value: TVal) => void;
  value: number | string;
}

interface ISelectContext {
  value: IOptionProps<string | number>['value'];
  handleSetValue: (e: MouseEvent) => void;
}

const SelectContext = createContext<ISelectContext | null>(null);

function Tabs<TVal extends string | number>({
  children,
  handler,
  value,
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
    () => ({ value, handleSetValue }),
    [handleSetValue, value],
  );

  return (
    <div className="space-x-2 rounded-full border-l border-t border-white/20 bg-white/10 p-1 text-zinc-100 shadow-2xl backdrop-blur-md backdrop-saturate-200">
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

  const isActiveOption = context?.value === value;
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

Tabs.Tab = Tab;

export default Tabs;
