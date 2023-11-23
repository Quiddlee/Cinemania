import { memo, PropsWithChildren } from 'react';

const Actors = memo(function Actors({ children }: PropsWithChildren) {
  return (
    <p>
      <span className="text-zinc-100">Cast: </span>
      <span data-testid="details-cast">{children}</span>
    </p>
  );
});

export default Actors;
