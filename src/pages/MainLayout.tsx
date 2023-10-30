import { useState } from 'react';

import GradientBackground from './ui/GradientBackground.tsx';
import MovieList from '../features/ProductList/MovieList.tsx';
import Search from '../features/Search/Search.tsx';
import useScroll from '../shared/hooks/useScroll.ts';
import Button from '../shared/ui/Button.tsx';
import Spinner from '../shared/ui/Spinner.tsx';
import Header from '../widgets/Header/Header.tsx';
import Logo from '../widgets/Header/ui/Logo.tsx';
import TotalResults from '../widgets/Header/ui/TotalResults.tsx';
import Main from '../widgets/Main/Main.tsx';

function MainLayout() {
  const [isError, setIsError] = useState(false);
  const containerRef = useScroll<HTMLDivElement>();

  if (isError) throw new Error('test error');

  return (
    <>
      <Spinner />

      <div ref={containerRef} className="relative m-auto min-h-screen">
        <GradientBackground />

        <section className="relative z-20 m-auto grid gap-2 pb-8 sm:gap-10">
          <Header>
            <Logo />
            <Search />
            <Button
              className="animate-fade-in"
              type="empty"
              onClick={() => setIsError(true)}>
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

export default MainLayout;
