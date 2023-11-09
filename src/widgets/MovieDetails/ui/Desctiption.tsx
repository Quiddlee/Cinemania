import { PropsWithChildren } from 'react';

function Desctiption({ children }: PropsWithChildren) {
  return (
    <p data-testid="details-description" className="mb-2">
      {children}
    </p>
  );
}

export default Desctiption;
