import { MouseEvent, useRef } from 'react';

import createRadialHover from '../lib/helpers/animateRadialHover.ts';
import { IChildren } from '../types/interfaces.ts';

interface IModalProps extends IChildren {
  className?: string;
}

function Modal({ className = '', children }: IModalProps) {
  const modalRef = useRef<HTMLDivElement>(null);

  const [radialHover, cleanUp] = createRadialHover();

  const handleMouseMove = (e: MouseEvent) => {
    if (modalRef.current) radialHover(modalRef.current, e);
  };

  const handleMouseOut = () => {
    if (modalRef.current) cleanUp(modalRef.current);
  };

  return (
    <article className="mx-auto w-fit animate-springish overflow-hidden rounded-[2rem] border-l border-t border-white/20 bg-white/10 text-center text-gray-400 backdrop-saturate-150">
      <div
        ref={modalRef}
        onMouseMove={handleMouseMove}
        onMouseOut={handleMouseOut}
        onBlur={handleMouseOut}
        className={`h-full w-full px-2 py-8 md:px-6 md:py-10 ${className}`}>
        {children}
      </div>
    </article>
  );
}

export default Modal;
