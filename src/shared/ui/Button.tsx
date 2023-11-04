import { memo, MouseEvent } from 'react';

import { IChildren } from '../types/interfaces.ts';

const buttonTypes = {
  filled:
    'disabled:opacity-20 disabled:hover:bg-lime-400 disabled:hover:scale-100 disabled:active:scale-100 rounded-full bg-lime-400 px-4 py-3 font-semibold text-gray-950 transition-all duration-200 hover:scale-110 focus:outline-0 focus:ring focus:ring-lime-300 focus:ring-offset-2 focus:ring-offset-black/70 sm:px-6 active:scale-100 active:duration-75',
  empty:
    'disabled:opacity-20 disabled:hover:bg-lime-400 disabled:hover:scale-100 disabled:active:scale-100 border border-lime-300 rounded-full px-4 py-3 font-semibold text-lime-300 transition-all duration-200 hover:bg-lime-200/30 focus:outline-0 focus:ring focus:ring-lime-300 focus:ring-offset-2 focus:ring-offset-black/70 sm:px-6',
  select:
    'rounded-full relative py-2 px-4 transition-all before:top-0 before:pointer-events-none before:absolute before:left-0 before:right-0 before:-z-10 before:m-auto before:h-full before:w-full before:scale-75 before:rounded-full before:bg-lime-400/50 before:opacity-0 before:transition-all hover:before:scale-100 hover:before:opacity-100 duration-250 w-[111.7px]',
};

interface IButtonProps extends IChildren {
  onClick?: (e: MouseEvent<HTMLButtonElement>) => void;
  type?: keyof typeof buttonTypes;
  className?: string;
  disabled?: boolean;
}

const Button = memo(function Button({
  type = 'filled',
  onClick,
  className = '',
  disabled = false,
  children,
  ...props
}: IButtonProps) {
  return (
    <button
      {...props}
      disabled={disabled}
      onClick={(e) => onClick?.(e)}
      className={`${buttonTypes[type]} ${className}`}
      type="button">
      {children}
    </button>
  );
});

export default Button;
