import { FC, FormHTMLAttributes } from 'react';

import cn from '@shared/lib/helpers/cn';

const Form: FC<FormHTMLAttributes<HTMLFormElement>> = ({
  children,
  className,
}) => (
  <form
    className={cn(
      'grid w-96 gap-6 rounded-md border border-zinc-800 p-6',
      className,
    )}>
    {children}
  </form>
);

export default Form;
