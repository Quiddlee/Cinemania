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
      className="pointer-events-none invisible absolute left-0 top-0 flex h-28 w-28 items-center justify-center rounded-full bg-lime-400 p-6 text-center text-sm font-bold text-zinc-950 opacity-0 [transition:_translate_1600ms_cubic-bezier(.08,.9,.21,.98),_transform_1000ms_cubic-bezier(.13,.66,0,.95),_opacity_250ms,_visibility_250ms]">
      {children}
    </div>,
    document.body,
  );
}

export default Tooltip;
