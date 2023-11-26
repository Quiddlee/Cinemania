import { ReactNode } from 'react';

import Link from 'next/link';
import { useRouter } from 'next/router';

interface ILinkWithQueryProps {
  children: ReactNode;
  href: string;
  className?: string;
}

function LinkWithQuery({
  children,
  className = '',
  href,
  ...props
}: ILinkWithQueryProps) {
  const router = useRouter();
  const { id, ...query } = router.query;

  return (
    <Link
      className={`${className} w-fit`}
      href={{
        pathname: href,
        query,
      }}
      {...props}>
      {children}
    </Link>
  );
}

export default LinkWithQuery;
