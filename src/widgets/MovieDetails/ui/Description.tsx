import { memo, PropsWithChildren } from 'react';

const Description = memo(function Description({ children }: PropsWithChildren) {
  return (
    <p data-testid="details-description" className="mb-2">
      {children}
    </p>
  );
});

export default Description;
