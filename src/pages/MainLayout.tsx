import { Component } from 'react';

import LocomotiveScroll from 'locomotive-scroll';

import GradientBackground from './ui/GradientBackground.tsx';
import MovieList from '../features/ProductList/MovieList.tsx';
import Search from '../features/Search/Search.tsx';
import Button from '../shared/ui/Button.tsx';
import Spinner from '../shared/ui/Spinner.tsx';
import Header from '../widgets/Header/Header.tsx';
import Logo from '../widgets/Header/ui/Logo.tsx';
import TotalResults from '../widgets/Header/ui/TotalResults.tsx';
import Main from '../widgets/Main/Main.tsx';

interface IMainLayoutState {
  isError: boolean;
}

class MainLayout extends Component<object, IMainLayoutState> {
  state = {
    isError: false,
  };

  componentDidMount() {
    // eslint-disable-next-line no-new
    new LocomotiveScroll({
      lenisOptions: {
        duration: 0.55,
      },
    });
  }

  render() {
    if (this.state.isError) throw new Error('test error');

    return (
      <>
        <Spinner />

        <div className="relative m-auto min-h-screen">
          <GradientBackground />

          <section className="relative z-20 m-auto grid gap-2 pb-8 sm:gap-10">
            <Header>
              <Logo />
              <Search />
              <Button
                className="animate-fade-in"
                type="empty"
                onClick={() => this.setState({ isError: true })}>
                Throw error
              </Button>
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
