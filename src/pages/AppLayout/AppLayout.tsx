import { Outlet } from 'react-router-dom';

import GradientBackground from './ui/GradientBackground.tsx';
import Movie from '../../entities/movie/ui/Movie.tsx';
import MovieList from '../../features/MovieList/MovieList.tsx';
import MovieListHeader from '../../features/MovieList/ui/MovieListHeader.tsx';
import PageNum from '../../features/MovieList/ui/PageNum.tsx';
import Pagination from '../../features/Pagination/Pagination.tsx';
import SearchProvider from '../../features/Search/context/SearchProvider.tsx';
import Search from '../../features/Search/Search.tsx';
import useScroll from '../../shared/hooks/useScroll.ts';
import useTooltip from '../../shared/hooks/useTooltip.ts';
import Tooltip from '../../shared/ui/Tooltip.tsx';
import Header from '../../widgets/Header/Header.tsx';
import Logo from '../../widgets/Header/ui/Logo.tsx';
import TotalResults from '../../widgets/Header/ui/TotalResults.tsx';
import Loader from '../../widgets/Loader/Loader.tsx';
import Main from '../../widgets/Main/Main.tsx';

function AppLayout() {
  const { containerRef, scrollRef } = useScroll<HTMLDivElement>();
  const { tooltipRef, hideTooltip, showTooltip } = useTooltip(scrollRef);

  return (
    <SearchProvider>
      <div
        id="section"
        data-scroll-section="true"
        ref={containerRef}
        className="relative m-auto min-h-screen">
        <section className="relative z-20 m-auto grid min-h-screen gap-2 pb-8 sm:gap-10">
          <Tooltip innerRef={tooltipRef}>Click for details</Tooltip>
          <Loader scroll={scrollRef} />
          <GradientBackground />
          <Header>
            <Logo />
            <Search scroll={scrollRef} />
            <TotalResults />
          </Header>
          <Main>
            <MovieList
              scroll={scrollRef}
              render={(movie, i) => (
                <Movie
                  onMouseMove={showTooltip}
                  onMouseOut={hideTooltip}
                  key={movie.imdbID}
                  data={movie}
                  delay={i}
                />
              )}>
              <MovieListHeader scroll={scrollRef}>
                <PageNum />
              </MovieListHeader>
            </MovieList>
            <Outlet />
          </Main>
          <Pagination scroll={scrollRef} />
        </section>
      </div>
    </SearchProvider>
  );
}

export default AppLayout;
