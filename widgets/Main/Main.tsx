import { PropsWithChildren } from 'react';

function Main({ children }: PropsWithChildren) {
  return (
    <main className="relative flex px-6 [min-height:_calc(100dvh_-_120px)] lg:gap-28 lg:px-20">
      {children}
    </main>
  );
}

export default Main;
