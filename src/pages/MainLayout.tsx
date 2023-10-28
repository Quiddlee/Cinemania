import { Component } from 'react';

import GradientBackground from './ui/GradientBackground.tsx';
import MovieList from '../features/ProductList/MovieList.tsx';
import Search from '../features/Search/Search.tsx';
import Spinner from '../shared/ui/Spinner.tsx';
import Header from '../widgets/Header/Header.tsx';
import Logo from '../widgets/Header/ui/Logo.tsx';
import TotalResults from '../widgets/Header/ui/TotalResults.tsx';
import Main from '../widgets/Main/Main.tsx';

class MainLayout extends Component {
  render() {
    return (
      <>
        <Spinner />

        <div className="relative m-auto min-h-screen">
          <GradientBackground />

          <section className="relative z-20 m-auto grid gap-2 pb-8 sm:gap-10">
            <Header>
              <Logo />
              <Search />
              <TotalResults />
            </Header>
            <Main>
              <MovieList />
            </Main>
          </section>
        </div>
      </>
    );
  }
}

export default MainLayout;
