import { FormHTMLAttributes, forwardRef } from 'react';

import cn from '@shared/lib/helpers/cn';

const Form = forwardRef<HTMLFormElement, FormHTMLAttributes<HTMLFormElement>>(
  ({ children, className, ...props }, ref) => (
    <form
      {...props}
      ref={ref}
      noValidate
      className={cn(
        'grid w-96 gap-2 rounded-md border border-zinc-800 p-6',
        className,
      )}>
      {children}
    </form>
  ),
);

Form.displayName = 'Form';

export default Form;
