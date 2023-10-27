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
      <article className="mx-auto w-fit animate-fade-in overflow-hidden rounded-[2rem] border-l border-t border-white/20 bg-white/10 text-center text-gray-400 backdrop-saturate-150">
        <div
          ref={this.movieRef}
          onMouseMove={this.handleMouseMove}
          onMouseOut={this.handleMouseOut}
          onBlur={this.handleMouseOut}
          className="h-full w-full px-6 py-10">
          <span className="animate-[fade-in_.5s_cubic-bezier(0.86,_0,_0.07,_1)_.2s_both] text-2xl font-semibold text-gray-200">
            No Movies Found. 🥺
          </span>
          <p className="mt-2 animate-[fade-in_.5s_cubic-bezier(0.86,_0,_0.07,_1)_.4s_both]">
            You&apos;re search did not match any movies.
          </p>
          <p className="animate-[fade-in_.7s_cubic-bezier(0.86,_0,_0.07,_1)_.6s_both]">
            Please try again. 👉👈
          </p>
        </div>
      </article>
    );
  }
}

export default NotFound;
