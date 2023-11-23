import Movie from '@entities/movie/ui/Movie';
import MovieList from '@features/MovieList/MovieList';
import MovieListHeader from '@features/MovieList/ui/MovieListHeader';
import PageNum from '@features/MovieList/ui/PageNum';
import Pagination from '@features/Pagination/Pagination';
import Search from '@features/Search/Search';
import useScroll from '@shared/hooks/useScroll';
import useTooltip from '@shared/hooks/useTooltip';
import Tooltip from '@shared/ui/Tooltip';
import Header from '@widgets/Header/Header';
import Logo from '@widgets/Header/ui/Logo';
import TotalResults from '@widgets/Header/ui/TotalResults';
import Loader from '@widgets/Loader/Loader';
import Main from '@widgets/Main/Main';

import GradientBackground from './ui/GradientBackground';

function AppLayout() {
  const { containerRef, scrollRef } = useScroll<HTMLDivElement>();
  const { tooltipRef, showTooltip, hideTooltip } = useTooltip(scrollRef);

  return (
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
          {/* <Outlet /> */}
        </Main>
        <Pagination scroll={scrollRef} />
      </section>
    </div>
  );
}

export default AppLayout;
