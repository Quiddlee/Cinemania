import { forwardRef, InputHTMLAttributes } from 'react';

import cn from '@shared/lib/helpers/cn';

const Input = forwardRef<
  HTMLInputElement,
  InputHTMLAttributes<HTMLInputElement>
>(({ className, disabled, ...props }, ref) => (
  <input
    {...props}
    ref={ref}
    disabled={disabled}
    className={cn(
      'h-10 w-full rounded-md border border-zinc-800 bg-neutral-950 px-3 py-2 text-sm text-zinc-100 placeholder-zinc-500 transition-all duration-200 focus:outline-none focus:ring focus:ring-zinc-50 focus:ring-offset-2 focus:ring-offset-zinc-950',
      className,
      {
        'opacity-40': disabled,
      },
    )}
  />
));

Input.displayName = 'Input';

export default Input;
