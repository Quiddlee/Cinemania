import { ReactNode } from 'react';

import { Link, useLocation } from 'react-router-dom';

interface ILinkWithQueryProps {
  children: ReactNode;
  to: string;
}

function LinkWithQuery({ children, to, ...props }: ILinkWithQueryProps) {
  const { search } = useLocation();

  return (
    <Link to={to + search} {...props}>
      {children}
    </Link>
  );
}

export default LinkWithQuery;
