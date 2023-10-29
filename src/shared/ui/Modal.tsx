import { Component, createRef, MouseEvent } from 'react';

import createRadialHover from '../lib/helpers/animateRadialHover.ts';
import { IChildren } from '../types/interfaces.ts';

interface IModalProps extends IChildren {
  className?: string;
}

class Modal extends Component<IModalProps> {
  modalRef = createRef<HTMLDivElement>();

  radialHover;

  cleanUp;

  constructor(props: IModalProps) {
    super(props);

    [this.radialHover, this.cleanUp] = createRadialHover();
  }

  handleMouseMove = (e: MouseEvent) => {
    if (this.modalRef.current) this.radialHover(this.modalRef.current, e);
  };

  handleMouseOut = () => {
    if (this.modalRef.current) this.cleanUp(this.modalRef.current);
  };

  render() {
    return (
      <article className="mx-auto w-fit animate-springish overflow-hidden rounded-[2rem] border-l border-t border-white/20 bg-white/10 text-center text-gray-400 backdrop-saturate-150">
        <div
          ref={this.modalRef}
          onMouseMove={this.handleMouseMove}
          onMouseOut={this.handleMouseOut}
          onBlur={this.handleMouseOut}
          className={`h-full w-full px-6 py-10 ${this.props.className ?? ''} `}>
          {this.props.children}
        </div>
      </article>
    );
  }
}

export default Modal;
