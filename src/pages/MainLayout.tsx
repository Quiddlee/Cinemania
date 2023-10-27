import { Component } from 'react';

import GradientBackground from './ui/GradientBackground.tsx';
import MovieList from '../features/ProductList/MovieList.tsx';
import Spinner from '../shared/ui/Spinner.tsx';
import Header from '../widgets/Header/Header.tsx';
import Main from '../widgets/Main/Main.tsx';

class MainLayout extends Component {
  render() {
    return (
      <>
        <Spinner />

        <div className="relative m-auto min-h-screen">
          <GradientBackground />

          <div className="relative z-20 m-auto grid gap-2 pb-8 sm:gap-10">
            <Header />
            <Main>
              <MovieList />
            </Main>
          </div>
        </div>
      </>
    );
  }
}

export default MainLayout;
