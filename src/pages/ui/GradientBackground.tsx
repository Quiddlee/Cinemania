import { Component } from 'react';

class GradientBackground extends Component {
  render() {
    return (
      <>
        <div className="absolute z-10 h-full w-full bg-black bg-opacity-50 backdrop-blur-[170px] backdrop-saturate-150" />

        <div className="absolute left-1/2 h-1/3 w-1/2 rounded-full bg-pink-300" />
        <div className="absolute right-1/2 top-0 h-1/4 w-1/3 rounded-full bg-violet-400 saturate-200" />
        <div className="absolute right-2/3 top-2/4 h-1/4 w-1/5 rounded-full bg-blue-400 saturate-200" />
        <div className="absolute bottom-1/4 left-1/2 h-1/5 w-1/5 rounded-full bg-emerald-300" />
        <div className="absolute bottom-0 right-0 h-1/3 w-1/2 rounded-l-full bg-emerald-800" />
      </>
    );
  }
}

export default GradientBackground;
