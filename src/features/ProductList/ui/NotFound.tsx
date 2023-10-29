import { Component, createRef, MouseEvent } from 'react';

import createRadialHover from '../../../shared/lib/helpers/animateRadialHover.ts';

class NotFound extends Component {
  movieRef = createRef<HTMLDivElement>();

  radialHover;

  cleanUp;

  constructor(props: NonNullable<unknown>) {
    super(props);

    [this.radialHover, this.cleanUp] = createRadialHover();
  }

  handleMouseMove = (e: MouseEvent) => {
    if (this.movieRef.current) this.radialHover(this.movieRef.current, e);
  };

  handleMouseOut = () => {
    if (this.movieRef.current) this.cleanUp(this.movieRef.current);
  };

  render() {
    return (
      <article className="mx-auto w-fit animate-springish overflow-hidden rounded-[2rem] border-l border-t border-white/20 bg-white/10 text-center text-gray-400 backdrop-saturate-150">
        <div
          ref={this.movieRef}
          onMouseMove={this.handleMouseMove}
          onMouseOut={this.handleMouseOut}
          onBlur={this.handleMouseOut}
          className="h-full w-full px-6 py-10">
          <span className="text-2xl font-semibold text-gray-200">
            No Movies Found. 🥺
          </span>
          <p className="mt-2">You&apos;re search did not match any movies.</p>
          <p>Please try again. 👉👈</p>
        </div>
      </article>
    );
  }
}

export default NotFound;
