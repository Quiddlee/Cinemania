import { forwardRef, InputHTMLAttributes, useState } from 'react';

import eyeOff from '@assets/eye-off.svg';
import eye from '@assets/eye.svg';
import cn from '@shared/lib/helpers/cn';

const Input = forwardRef<
  HTMLInputElement,
  InputHTMLAttributes<HTMLInputElement>
>(({ className, disabled, type, ...props }, ref) => {
  const isPasswordType = type === 'password';

  const [isPasswordVisible, setIsPasswordVisible] = useState(!isPasswordType);

  const inputType = isPasswordVisible ? 'text' : 'password';

  function handleToggle() {
    setIsPasswordVisible((prevState) => !prevState);
  }

  return (
    <div className="relative">
      <input
        {...props}
        type={inputType}
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
      {isPasswordType && (
        <button
          aria-label="Password visibility toggle"
          onClick={handleToggle}
          type="button"
          className="absolute bottom-0 right-2 top-0 scale-75">
          <img src={isPasswordVisible ? eye : eyeOff} alt="" />
        </button>
      )}
    </div>
  );
});

Input.displayName = 'Input';

export default Input;
