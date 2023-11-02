import { useCallback } from 'react';

import GradientBackground from './ui/GradientBackground.tsx';
import MovieList from '../features/MovieList/MovieList.tsx';
import Pagination from '../features/Pagination/Pagination.tsx';
import Search from '../features/Search/Search.tsx';
import useScroll from '../shared/hooks/useScroll.ts';
import Spinner from '../shared/ui/Spinner.tsx';
import Header from '../widgets/Header/Header.tsx';
import Logo from '../widgets/Header/ui/Logo.tsx';
import TotalResults from '../widgets/Header/ui/TotalResults.tsx';
import Main from '../widgets/Main/Main.tsx';

function MainLayout() {
  const [containerRef, scrollRef] = useScroll<HTMLDivElement>();

  const handleScrollTop = useCallback(
    function handleScrollTop() {
      if (scrollRef.current)
        scrollRef.current.scrollTo('top', { duration: 100 });
    },
    [scrollRef],
  );

  return (
    <>
      <Spinner />
      <div ref={containerRef} className="relative m-auto min-h-screen">
        <GradientBackground />
        <section className="relative z-20 m-auto grid gap-2 pb-8 sm:gap-10">
          <Header>
            <Logo />
            <Search />
            <TotalResults />
          </Header>
          <Main>
            <MovieList onScrollTop={handleScrollTop} />
            <Pagination />
          </Main>
        </section>
      </div>
    </>
  );
}

export default MainLayout;
