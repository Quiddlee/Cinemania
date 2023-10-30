import { useCallback, useEffect, useRef, useState } from 'react';

import useSearch from './hooks/useSearch.ts';
import searchIcon from '../../assets/search.svg';
import { LOCAL_STORAGE_SEARCH_QUERY } from '../../shared/const/const.ts';
import Button from '../../shared/ui/Button.tsx';

// TODO - split the component into smaller ones

function Search() {
  const [query, setQuery] = useState('');
  const inputRef = useRef<HTMLInputElement>(null);
  const { fetchMovies } = useSearch();

  const handleSearch = useCallback(
    async (newQuery: string) => {
      fetchMovies(newQuery.trim());
    },
    [fetchMovies],
  );

  const handleKeydown = useCallback(
    (e: KeyboardEvent) => {
      const isEnterPressed = e.key === 'Enter';
      const isEscPressed = e.key === 'Escape';
      const isInputFocus = document.activeElement === inputRef.current;
      const noActiveElement = document.activeElement === document.body;

      if (isEscPressed && isInputFocus) {
        inputRef.current?.blur();
      }

      if (isEnterPressed && noActiveElement) {
        inputRef.current?.focus();
        setQuery('');
        return;
      }

      if (isEnterPressed && isInputFocus) {
        void handleSearch(query);
        inputRef.current?.blur();
      }
    },
    [handleSearch, query],
  );

  useEffect(() => {
    const storedQuery = localStorage.getItem(LOCAL_STORAGE_SEARCH_QUERY);

    if (!storedQuery) return;

    setQuery(storedQuery);
    void fetchMovies(storedQuery);
  }, [fetchMovies]);

  useEffect(() => {
    document.addEventListener('keydown', handleKeydown);
    return () => document.removeEventListener('keydown', handleKeydown);
  }, [handleKeydown]);

  return (
    <article className="relative mx-auto flex w-full animate-fade-in sm:w-fit xl:w-1/3">
      <input
        ref={inputRef}
        className="peer w-full rounded-full border-l border-t border-white/20 bg-white/10 px-6 py-3 font-light text-gray-300 transition-all duration-200 hover:bg-white/20 focus:-translate-y-0.5 focus:border-transparent focus:shadow-xl focus:shadow-black/20 focus:outline-0 focus:ring focus:ring-lime-300"
        placeholder="Type to Search..."
        type="text"
        value={query}
        onChange={(e) => setQuery(e.target.value)}
      />
      <Button
        onClick={() => handleSearch(query)}
        className="absolute bottom-0 right-0 top-0 m-auto flex scale-105 items-center gap-2 active:scale-105 active:duration-75 peer-focus:-translate-y-0.5">
        <>
          <img className="z-10" src={searchIcon} alt="" />
          <span>Search</span>
        </>
      </Button>
    </article>
  );
}

export default Search;
