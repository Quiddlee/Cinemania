import { PropsWithChildren, useCallback } from 'react';

import { ItemsPerPage } from '@customTypes/types';
import useAppDispatch from '@shared/hooks/useAppDispatch';
import useAppSelector from '@shared/hooks/useAppSelector';
import useScrollTop from '@shared/hooks/useScrollTop';
import selectMoviesPerPage from '@shared/lib/selectors/selectMoviesPerPage';
import Tabs from '@shared/ui/Tabs';

import { moviesPerPageUpdated } from '../../../app/model/slice';

function MovieListHeader({ children }: PropsWithChildren) {
  const dispatch = useAppDispatch();
  const moviesPerPage = useAppSelector(selectMoviesPerPage);

  useScrollTop(moviesPerPage);

  const handleMoviesPerPage = useCallback(
    (newMoviesPerPage: number) => {
      if (newMoviesPerPage === moviesPerPage) return;

      dispatch(moviesPerPageUpdated(newMoviesPerPage));
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
