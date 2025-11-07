import useRadialHover from '../hooks/useRadialHover.ts';
import { IChildren } from '../types/interfaces.ts';

interface IModalProps extends IChildren {
  className?: string;
}

function Modal({ className = '', children }: IModalProps) {
  const {
    handleMouseOut,
    handleMouseMove,
    containerRef: modalRef,
  } = useRadialHover<HTMLDivElement>();

  return (
    <article className="m-auto h-fit w-fit animate-springish self-center overflow-hidden rounded-4xl border-l border-t border-white/20 bg-white/10 text-center text-gray-400 shadow-md backdrop-blur-3xl backdrop-saturate-150">
      <div
        ref={modalRef}
        onMouseMove={handleMouseMove}
        onMouseLeave={handleMouseOut}
        onBlur={handleMouseOut}
        className={`h-full w-full px-2 py-8 md:px-6 md:py-10 ${className}`}>
        {children}
      </div>
    </article>
  );
}

export default Modal;
