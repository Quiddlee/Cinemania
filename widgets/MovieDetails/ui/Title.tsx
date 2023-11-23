import { memo, PropsWithChildren } from 'react';

const Title = memo(function Title({ children }: PropsWithChildren) {
  return (
    <h2
      data-testid="details-title"
      className="text-2xl font-semibold text-zinc-100">
      {children}
    </h2>
  );
});

export default Title;
