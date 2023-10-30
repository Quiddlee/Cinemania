import useSearch from '../../../features/Search/hooks/useSearch.ts';

function TotalResults() {
  const { totalResults } = useSearch();

  return (
    <p className="ml-auto hidden animate-fade-in text-right text-lime-400 sm:block lg:text-lg">
      Found <span className="font-semibold">{totalResults}</span> movies
    </p>
  );
}

export default TotalResults;
