import { ReactNode, RefObject } from 'react';

import { createPortal } from 'react-dom';

interface ITooltipProps {
  innerRef: RefObject<HTMLDivElement>;
  children: ReactNode;
}

function Tooltip({ innerRef, children }: ITooltipProps) {
  return createPortal(
    <div
      style={{
        translate: '1000px 1000px',
      }}
      ref={innerRef}
      className="pointer-events-none absolute left-0 top-0 flex h-28 w-28 items-center justify-center rounded-full bg-lime-400 p-6 text-center text-sm font-bold text-zinc-950 [transition:_translate_1500ms_cubic-bezier(.08,.9,.21,.98)]">
      {children}
    </div>,
    document.body,
  );
}

export default Tooltip;
