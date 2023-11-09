import { PropsWithChildren } from 'react';

function Genre({ children }: PropsWithChildren) {
  return <span data-testid="details-genre">{children}</span>;
}

export default Genre;
