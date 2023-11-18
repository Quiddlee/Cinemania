import { PropsWithChildren, RefObject, useCallback } from 'react';

import LocomotiveScroll from 'locomotive-scroll';

import { moviesPerPageUpdated } from '../../../app/model/slice.ts';
import useAppDispatch from '../../../shared/hooks/useAppDispatch.ts';
import useAppSelector from '../../../shared/hooks/useAppSelector.ts';
import useScrollTop from '../../../shared/hooks/useScrollTop.ts';
import selectMoviesPerPage from '../../../shared/lib/selectors/selectMoviesPerPage.ts';
import { ItemsPerPage } from '../../../shared/types/types.ts';
import Tabs from '../../../shared/ui/Tabs.tsx';

interface IMovieListHeader extends PropsWithChildren {
  scroll: RefObject<LocomotiveScroll>;
}

function MovieListHeader({ children, scroll }: IMovieListHeader) {
  const dispatch = useAppDispatch();
  const moviesPerPage = useAppSelector(selectMoviesPerPage);

  useScrollTop(moviesPerPage, scroll);

  const handleMoviesPerPage = useCallback(
    (newMoviesPerPage: number) => {
      if (newMoviesPerPage === moviesPerPage) return;

      dispatch(moviesPerPageUpdated(newMoviesPerPage));

      // TODO - change dispatch to url state
      // setUrl({
      //   'movies-per-page': newMoviesPerPage,
      //   page: DEFAULT_PAGE,
      // });
    },
    [dispatch, moviesPerPage],
  );

  return (
    <header
      data-scroll="true"
      data-scroll-sticky="true"
      data-scroll-target="section"
      className="absolute -top-24 z-10 flex items-center justify-center gap-4">
      <Tabs<ItemsPerPage>
        handler={handleMoviesPerPage}
        activeValue={moviesPerPage}>
        <Tabs.Tab<ItemsPerPage> value={3}>03 movies</Tabs.Tab>
        <Tabs.Tab<ItemsPerPage> value={5}>05 movies</Tabs.Tab>
        <Tabs.Tab<ItemsPerPage> value={10}>10 movies</Tabs.Tab>
      </Tabs>
      {children}
    </header>
  );
}

export default MovieListHeader;
