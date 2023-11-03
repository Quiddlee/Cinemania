import { ReactNode, RefObject } from 'react';

import { createPortal } from 'react-dom';

interface ITooltipProps {
  innerRef: RefObject<HTMLDivElement>;
  children: ReactNode;
}

function Tooltip({ innerRef, children }: ITooltipProps) {
  return createPortal(
    <div
      ref={innerRef}
      className="pointer-events-none invisible absolute left-0 top-0 flex h-28 w-28 scale-50 items-center justify-center rounded-full bg-lime-500 p-6 text-center text-sm font-bold text-zinc-100 opacity-0 transition-all duration-[1200ms] ease-[cubic-bezier(.13,.66,0,.95)]">
      {children}
    </div>,
    document.body,
  );
}

export default Tooltip;
