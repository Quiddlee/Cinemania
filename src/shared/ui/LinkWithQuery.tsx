import { ReactNode } from 'react';

import { Link, useLocation } from 'react-router-dom';

interface ILinkWithQueryProps {
  children: ReactNode;
  to: string;
  className?: string;
}

function LinkWithQuery({
  children,
  className = '',
  to,
  ...props
}: ILinkWithQueryProps) {
  const { search } = useLocation();

  return (
    <Link className={`${className} w-fit`} to={to + search} {...props}>
      {children}
    </Link>
  );
}

export default LinkWithQuery;
