import useGetMovieList from '../../../shared/hooks/useGetMovieList.ts';

function TotalResults() {
  const movieList = useGetMovieList();

  return (
    <p className="ml-auto hidden animate-fade-in text-right text-lime-400 sm:block lg:text-lg">
      Found{' '}
      <span className="font-semibold">{movieList?.totalResults ?? 0}</span>{' '}
      movies
    </p>
  );
}

export default TotalResults;
