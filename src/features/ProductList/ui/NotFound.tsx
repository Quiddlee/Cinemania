import { Component } from 'react';

class NotFound extends Component {
  render() {
    return (
      <article className="mx-auto w-fit rounded-[2rem] border-l border-t border-white/20 bg-white/10 px-6 py-10 text-center text-gray-400 backdrop-saturate-150">
        <span className="animate-[fade-in_.5s_cubic-bezier(0.86,_0,_0.07,_1)] text-2xl font-semibold text-gray-200">
          No Movies Found. 🥺
        </span>
        <p className="mt-2 animate-[fade-in_.5s_cubic-bezier(0.86,_0,_0.07,_1)_.2s_both]">
          You&apos;re search did not match any movies.
        </p>
        <p className="animate-[fade-in_.7s_cubic-bezier(0.86,_0,_0.07,_1)_.4s_both]">
          Please try again. 👉👈
        </p>
      </article>
    );
  }
}

export default NotFound;
