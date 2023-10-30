import { memo } from 'react';

import { IChildren } from '../types/interfaces.ts';

const buttonTypes = {
  filled:
    'rounded-full bg-lime-400 px-4 py-3 font-semibold text-gray-950 transition-all duration-200 hover:scale-110 focus:outline-0 focus:ring focus:ring-lime-300 focus:ring-offset-2 focus:ring-offset-black/70 sm:px-6',
  empty:
    'border border-lime-300 rounded-full px-4 py-3 font-semibold text-lime-300 transition-all duration-200 hover:bg-lime-200/30 focus:outline-0 focus:ring focus:ring-lime-300 focus:ring-offset-2 focus:ring-offset-black/70 sm:px-6',
};

interface IButtonProps extends IChildren {
  onClick?: () => void;
  type?: keyof typeof buttonTypes;
  className?: string;
}

const Button = memo(function Button({
  type = 'filled',
  onClick,
  className = '',
  children,
}: IButtonProps) {
  return (
    <button
      onClick={onClick}
      className={`${buttonTypes[type]} ${className}`}
      type="button">
      {children}
    </button>
  );
});

export default Button;
