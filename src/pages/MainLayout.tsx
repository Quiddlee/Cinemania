import { Component } from 'react';

import Header from '../widgets/Header/Header.tsx';
import Main from '../widgets/Main/Main.tsx';

class MainLayout extends Component {
  render() {
    return (
      <>
        <div className="absolute z-10 h-full w-full bg-black bg-opacity-50 backdrop-blur-[170px]" />

        <div className="relative m-auto h-screen overflow-hidden">
          <div className="container relative z-20 m-auto">
            <Header />
            <Main />
          </div>
          <div className="absolute right-72 top-0 h-1/2 w-1/3 rounded-full bg-pink-400" />
          <div className="absolute left-96 top-0 h-1/2 w-1/3 rounded-full bg-violet-500 saturate-200" />
          <div className="absolute top-2/4 h-1/4 w-1/6 rounded-full bg-cyan-700" />
          <div className="absolute -right-32 bottom-0 h-1/3 w-1/2 rounded-full bg-emerald-800" />
        </div>
      </>
    );
  }
}

export default MainLayout;
