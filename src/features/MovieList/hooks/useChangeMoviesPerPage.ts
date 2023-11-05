import { RefObject, useState } from 'react';

import LocomotiveScroll from 'locomotive-scroll';

import { DEFAULT_PAGE, PAGE_PARAM } from '../../../shared/const/const.ts';
import useScrollTop from '../../../shared/hooks/useScrollTop.ts';
import useUrl from '../../../shared/hooks/useUrl.ts';
import itemsPerPage from '../../../shared/types/enums.ts';
import { ItemsPerPage, MovieList } from '../../../shared/types/types.ts';

function useChangeMoviesPerPage(
  scroll: RefObject<LocomotiveScroll>,
  movies: MovieList | null,
) {
  const [moviesPerPage, setMoviesPerPage] = useState<ItemsPerPage>(
    itemsPerPage.TEN,
  );
  const { setUrl } = useUrl();
  useScrollTop(moviesPerPage, scroll, () =>
    setUrl(PAGE_PARAM, String(DEFAULT_PAGE)),
  );

  const renderMovies = movies?.slice(0, moviesPerPage) as MovieList;

  return { renderMovies, moviesPerPage, setMoviesPerPage };
}

export default useChangeMoviesPerPage;
