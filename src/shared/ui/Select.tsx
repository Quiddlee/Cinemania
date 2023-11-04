import {
  createContext,
  MouseEvent,
  useCallback,
  useContext,
  useMemo,
} from 'react';

import Button from './Button.tsx';
import { IChildren } from '../types/interfaces.ts';

interface IOptionProps {
  children: string;
  value: string | number;
}

interface ISelectProps<TVal> extends IChildren {
  handler: (value: TVal) => void;
  value: number | string;
}

interface ISelectContext {
  value: IOptionProps['value'];
  handleSetValue: (e: MouseEvent) => void;
}

const SelectContext = createContext<ISelectContext | null>(null);

function Select<TVal extends string | number>({
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
    <div className="absolute -top-24 space-x-2 rounded-full border-l border-t border-white/20 bg-white/10 p-1 text-zinc-100 shadow-2xl">
      <SelectContext.Provider value={contextValue}>
        {children}
      </SelectContext.Provider>
    </div>
  );
}

function Option({ children, value }: IOptionProps) {
  const context = useContext(SelectContext);

  const isActiveOption = context?.value === value;
  const activeClass = isActiveOption
    ? 'before:bg-lime-400 before:scale-100 before:opacity-100 text-neutral-950 font-semibold'
    : 'bg-transparent';
  const className = `${activeClass}`;

  return (
    <Button
      type="select"
      className={className}
      onClick={context?.handleSetValue}
      data-value={value}>
      {children}
    </Button>
  );
}

Select.Option = Option;

export default Select;
