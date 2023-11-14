import { ReactNode } from 'react';

import {
  Link,
  useLocation,
  unstable_useViewTransitionState as useViewTransitionState,
} from 'react-router-dom';

interface ILinkWithQueryProps {
  children: ReactNode;
  to: string;
  className?: string;
  viewTransition?: boolean;
}

function LinkWithQuery({
  children,
  className = '',
  to,
  viewTransition = true,
  ...props
}: ILinkWithQueryProps) {
  const { search } = useLocation();
  useViewTransitionState(to + search);

  return (
    <Link
      className={`${className} w-fit`}
      to={to + search}
      {...props}
      unstable_viewTransition={viewTransition}>
      {children}
    </Link>
  );
}

export default LinkWithQuery;
