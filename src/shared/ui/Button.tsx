import { ButtonHTMLAttributes, memo } from 'react';

import useSearch from '../../features/Search/hooks/useSearch.ts';
import cn from '../lib/helpers/cn.ts';

const buttonTypes = {
  filled:
    'disabled:hover:bg-lime-400 rounded-full bg-lime-400 px-4 py-3 font-semibold text-gray-950 transition-all duration-200 hover:scale-110 focus:outline-0 focus:ring focus:ring-lime-300 focus:ring-offset-2 focus:ring-offset-black/70 sm:px-6 active:scale-100 active:duration-75',
  empty:
    'disabled:hover:bg-lime-400  disabled:active:scale-100 border border-lime-300 rounded-full px-4 py-3 font-semibold text-lime-300 transition-all duration-200 hover:bg-lime-200/30 focus:outline-0 focus:ring focus:ring-lime-300 focus:ring-offset-2 focus:ring-offset-black/70 sm:px-6',
  select:
    'rounded-full relative py-2 px-4 transition-all before:top-0 before:pointer-events-none before:absolute before:left-0 before:right-0 before:-z-10 before:m-auto before:h-full before:w-full before:scale-75 before:rounded-full before:bg-white/20 before:opacity-0 before:transition-all hover:before:scale-100 hover:before:opacity-100 duration-250 w-[112px]',
};

interface IButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  styleType?: keyof typeof buttonTypes;
}

const Button = memo(function Button({
  styleType = 'filled',
  children,
  className,
  disabled,
  ...props
}: IButtonProps) {
  const { isLoading } = useSearch();
  const isDisabled = disabled || isLoading;

  return (
    <button
      {...props}
      disabled={isDisabled}
      className={cn(buttonTypes[styleType], className, {
        'opacity-20': isDisabled,
        'scale-100': isDisabled,
        'pointer-events-none': isDisabled,
        'duration-1000': isDisabled,
      })}
      type="button">
      {children}
    </button>
  );
});

export default Button;
