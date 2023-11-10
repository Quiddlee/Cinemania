import { memo, PropsWithChildren } from 'react';

const Genre = memo(function Genre({ children }: PropsWithChildren) {
  return <span data-testid="details-genre">{children}</span>;
});

export default Genre;
