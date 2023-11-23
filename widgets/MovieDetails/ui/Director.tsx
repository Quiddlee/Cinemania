import { memo, PropsWithChildren } from 'react';

const Director = memo(function Director({ children }: PropsWithChildren) {
  return (
    <p>
      <span className="text-zinc-100">Directed By: </span>
      <span data-testid="details-director">{children}</span>
    </p>
  );
});

export default Director;
