import { movieApi } from '@entities/movie/api/movieApi';
import { getRunningQueriesThunk } from '@shared/api/rootApi';
import {
  DEFAULT_PAGE,
  MOVIES_PER_PAGE,
  QUERY_FALLBACK,
} from '@shared/const/const';
import { GetServerSidePropsContext } from 'next';

import { wrapper } from '../app/store/store';

export const getServerSideProps = wrapper.getServerSideProps(
  (store) =>
    async ({
      query: { page, search, moviesPerPage },
    }: GetServerSidePropsContext) => {
      store.dispatch(
        movieApi.endpoints.getMovieList.initiate({
          query: (search as string) || QUERY_FALLBACK,
          page: (page as string) || String(DEFAULT_PAGE),
          moviesPerPage: Number(moviesPerPage) || MOVIES_PER_PAGE,
        }),
      );

      await Promise.all(store.dispatch(getRunningQueriesThunk()));

      return { props: {} };
    },
);

function Index() {
  return null;
}

export default Index;
