import { PropsWithChildren } from 'react';

import { Poppins } from 'next/font/google';
import Head from 'next/head';

import Movie from '@entities/movie/ui/Movie';
import useScroll from '@entities/scroll/hooks/useScroll';
import MovieList from '@features/MovieList/MovieList';
import MovieListHeader from '@features/MovieList/ui/MovieListHeader';
import PageNum from '@features/MovieList/ui/PageNum';
import Pagination from '@features/Pagination/Pagination';
import Search from '@features/Search/Search';
import { APP_TITLE } from '@shared/const/const';
import useTooltip from '@shared/hooks/useTooltip';
import Tooltip from '@shared/ui/Tooltip';
import GradientBackground from '@widgets/AppLayout/ui/GradientBackground';
import Header from '@widgets/Header/Header';
import Logo from '@widgets/Header/ui/Logo';
import TotalResults from '@widgets/Header/ui/TotalResults';
import Loader from '@widgets/Loader/Loader';
import Main from '@widgets/Main/Main';

const poppins = Poppins({
  subsets: ['latin'],
  weight: '500',
});

function AppLayout({ children }: PropsWithChildren) {
  const { containerRef } = useScroll();
  const { tooltipRef, showTooltip, hideTooltip } = useTooltip();

  return (
    <>
      <Head>
        <title>{APP_TITLE}</title>
        <link rel="icon" href="./pop-corn.svg" />
      </Head>
      <Tooltip innerRef={tooltipRef}>Click for details</Tooltip>
      <div
        id="section"
        data-scroll-section="true"
        ref={containerRef}
        className={`${poppins.className} relative m-auto min-h-screen`}>
        <section className="relative z-20 m-auto grid min-h-screen gap-2 pb-8 sm:gap-10">
          <Loader />
          <GradientBackground />
          <Header>
            <Logo />
            <Search />
            <TotalResults />
          </Header>
          <Main>
            <MovieList
              render={(movie, i) => (
                <Movie
                  onMouseMove={showTooltip}
                  onMouseOut={hideTooltip}
                  key={movie.imdbID}
                  data={movie}
                  delay={i}
                />
              )}>
              <MovieListHeader>
                <PageNum />
              </MovieListHeader>
            </MovieList>
            {children}
          </Main>
          <Pagination />
        </section>
      </div>
    </>
  );
}

export default AppLayout;
