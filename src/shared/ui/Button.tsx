import { ButtonHTMLAttributes, forwardRef } from 'react';

import cn from '@shared/lib/helpers/cn';

const buttonVariants = {
  filled:
    'flex text-sm h-10 w-20 items-center justify-center rounded-md bg-zinc-100 px-4 py-2 text-zinc-950 transition-all hover:bg-zinc-300',
} as const;

type ButtonVariants = keyof typeof buttonVariants;

type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement> & {
  submit?: boolean;
  styleVariant?: ButtonVariants;
};

const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  (
    {
      submit = false,
      className,
      children,
      styleVariant = 'filled',
      disabled,
      ...props
    },
    ref,
  ) => (
    <button
      {...props}
      ref={ref}
      type={submit ? 'submit' : 'button'}
      className={cn(buttonVariants[styleVariant], className, {
        'opacity-30': disabled,
        'pointer-events-none': disabled,
      })}>
      {children}
    </button>
  ),
);

Button.displayName = 'Button';

export default Button;
