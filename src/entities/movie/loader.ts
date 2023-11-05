import { Params } from 'react-router-dom';

import { getMovie } from './api/apiMovie.ts';

interface ILoaderParams {
  params: Params;
}

async function loader({ params }: ILoaderParams) {
  const { movieId } = params;
  if (movieId) return getMovie(movieId);
  return null;
}

export default loader;
