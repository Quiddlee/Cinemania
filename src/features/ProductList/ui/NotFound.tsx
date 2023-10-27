import { Component, createRef, MouseEvent } from 'react';

import colors from 'tailwindcss/colors';

class NotFound extends Component {
  movieRef = createRef<HTMLDivElement>();

  handleMouseMove = (e: MouseEvent<HTMLDivElement>) => {
    const rect = this.movieRef.current?.getBoundingClientRect();

    if (rect) {
      const pointerX = e.clientX - rect.left;
      const pointerY = e.clientY - rect.top;

      if (this.movieRef.current)
        this.movieRef.current.style.background = `radial-gradient(circle at ${pointerX}px ${pointerY}px, rgb(112, 26, 117, 0.5) 0%, ${colors.transparent} 160px)`;
    }
  };

  handleMouseOut = () => {
    if (this.movieRef.current) this.movieRef.current.style.background = '';
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
