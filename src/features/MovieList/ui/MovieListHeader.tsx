import { PropsWithChildren, RefObject, useCallback } from 'react';

import LocomotiveScroll from 'locomotive-scroll';

import { DEFAULT_PAGE } from '../../../shared/const/const.ts';
import useScrollTop from '../../../shared/hooks/useScrollTop.ts';
import useUrl from '../../../shared/hooks/useUrl.ts';
import { urlParams } from '../../../shared/types/enums.ts';
import { ItemsPerPage } from '../../../shared/types/types.ts';
import Tabs from '../../../shared/ui/Tabs.tsx';

interface IMovieListHeader extends PropsWithChildren {
  scroll: RefObject<LocomotiveScroll>;
}

function MovieListHeader({ children, scroll }: IMovieListHeader) {
  const { setUrl, readUrl } = useUrl();

  const handleMoviesPerPage = useCallback(
    (value: number) => {
      setUrl({
        'movies-per-page': String(value),
        page: String(DEFAULT_PAGE),
      });
    },
    [setUrl],
  );

  const moviesPerPage = Number(readUrl(urlParams.MOVIES_PER_PAGE));

  useScrollTop(moviesPerPage, scroll);

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
