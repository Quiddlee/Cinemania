import { FC, PropsWithChildren } from 'react';

import cn from '@shared/lib/helpers/cn';

const Error: FC<PropsWithChildren> = ({ children }) => (
  <span
    className={cn('h-6 text-sm text-red-900', {
      'opacity-100': children,
    })}>
    {children}
  </span>
);

export default Error;
