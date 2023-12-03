import { forwardRef, InputHTMLAttributes } from 'react';

import cn from '@shared/lib/helpers/cn';

const Checkbox = forwardRef<
  HTMLInputElement,
  InputHTMLAttributes<HTMLInputElement>
>(({ className, ...props }, ref) => (
  <input ref={ref} {...props} type="checkbox" className={cn(className)} />
));

Checkbox.displayName = 'Checkbox';

export default Checkbox;
