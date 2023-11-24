import { movieApi } from '@entities/movie/api/movieApi';
import { getRunningQueriesThunk } from '@shared/api/rootApi';
import MovieDetails from '@widgets/MovieDetails/MovieDetails';
import { GetServerSidePropsContext } from 'next';

import { wrapper } from '../app/store/store';

export const getServerSideProps = wrapper.getServerSideProps(
  (store) =>
    async ({ params }: GetServerSidePropsContext) => {
      const id = params?.id;

      if (id) {
        store.dispatch(movieApi.endpoints.getMovie.initiate(id as string));
        await Promise.all(store.dispatch(getRunningQueriesThunk()));
      }

      return { props: {} };
    },
);

function Details() {
  return <MovieDetails />;
}

export default Details;
