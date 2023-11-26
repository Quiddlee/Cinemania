import { PropsWithChildren, RefObject } from 'react';

import { Quicksand } from 'next/font/google';

interface ITooltipProps extends PropsWithChildren {
  innerRef: RefObject<HTMLDivElement>;
}

const quickSand = Quicksand({
  subsets: ['latin'],
  weight: '700',
});

function Tooltip({ innerRef, children }: ITooltipProps) {
  return (
    <div
      style={{
        translate: '1000px 1000px',
      }}
      ref={innerRef}
      className={`${quickSand.className} pointer-events-none absolute left-0 top-0 z-30 flex h-28 w-28 items-center justify-center rounded-full bg-lime-400 p-6 text-center text-sm font-bold text-zinc-950 shadow-md [transition:_translate_1500ms_cubic-bezier(.08,.9,.21,.98)]`}>
      {children}
    </div>
  );
}

export default Tooltip;
