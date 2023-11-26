import { PropsWithChildren, useCallback } from 'react';

import { urlParams } from '@customTypes/enums';
import { ItemsPerPage } from '@customTypes/types';
import useScrollTop from '@shared/hooks/useScrollTop';
import useUrl from '@shared/hooks/useUrl';
import Tabs from '@shared/ui/Tabs';

function MovieListHeader({ children }: PropsWithChildren) {
  const { readUrl, setUrl } = useUrl();
  const moviesPerPage = Number(readUrl(urlParams.MOVIES_PER_PAGE));

  useScrollTop(moviesPerPage);

  const handleMoviesPerPage = useCallback(
    (newMoviesPerPage: number) => {
      if (newMoviesPerPage !== moviesPerPage)
        setUrl(urlParams.MOVIES_PER_PAGE, newMoviesPerPage);
    },
    [moviesPerPage, setUrl],
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
