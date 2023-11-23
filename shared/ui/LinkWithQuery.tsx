import { ReactNode } from 'react';

import Link from 'next/link';

interface ILinkWithQueryProps {
  children: ReactNode;
  to: string;
  className?: string;
  // viewTransition?: boolean;
}

function LinkWithQuery({
  children,
  className = '',
  to,
  // viewTransition = true,
  ...props
}: ILinkWithQueryProps) {
  return (
    <Link
      className={`${className} w-fit`}
      // to={to}
      href={to}
      {...props}>
      {children}
    </Link>
  );
}

export default LinkWithQuery;
