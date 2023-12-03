import { FC, PropsWithChildren } from 'react';

import { Link, useNavigate } from 'react-router-dom';

const className = 'text-sm text-zinc-100 hover:text-zinc-200 hover:underline';

type LinkButtonProps = PropsWithChildren & {
  to: string;
};

const LinkButton: FC<LinkButtonProps> = ({ children, to }) => {
  const navigate = useNavigate();
  const isGoBack = to === '-1';

  if (isGoBack) {
    return (
      <button className={className} type="button" onClick={() => navigate(-1)}>
        {children}
      </button>
    );
  }

  return (
    <Link to={to} className={className}>
      {children}
    </Link>
  );
};

export default LinkButton;
