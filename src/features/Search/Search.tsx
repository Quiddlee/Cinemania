/* eslint-disable @typescript-eslint/no-use-before-define */

import { useCallback, useRef } from 'react';

import { ENTER_KEY, ESCAPE_KEY } from './const/const.ts';
import useSearch from './hooks/useSearch.ts';
import searchIcon from '../../assets/search.svg';
import {
  DEFAULT_PAGE,
  LOCAL_STORAGE_SEARCH_QUERY,
  PAGE_PARAM,
} from '../../shared/const/const.ts';
import useKey from '../../shared/hooks/useKey.ts';
import useLocalStorageState from '../../shared/hooks/useLocalStorageState.ts';
import useUrl from '../../shared/hooks/useUrl.ts';
import Button from '../../shared/ui/Button.tsx';

function Search() {
  const [query, setQuery] = useLocalStorageState(
    '',
    LOCAL_STORAGE_SEARCH_QUERY,
  );
  const inputRef = useRef<HTMLInputElement>(null);
  const { fetchMovies } = useSearch();
  const { setUrl } = useUrl();

  useKey(ENTER_KEY, handleEnter);
  useKey(ESCAPE_KEY, handleEscape);

  const handleSearch = useCallback(
    async (newQuery: string) => {
      setUrl(PAGE_PARAM, String(DEFAULT_PAGE));
      fetchMovies(newQuery.trim());
    },
    [fetchMovies, setUrl],
  );

  function handleEnter() {
    const isInputFocus = document.activeElement === inputRef.current;
    const noActiveElement = document.activeElement === document.body;

    if (noActiveElement) {
      inputRef.current?.focus();
      setQuery('');
      return;
    }

    if (isInputFocus) {
      void handleSearch(query);
      inputRef.current?.blur();
    }
  }

  function handleEscape() {
    const isInputFocus = document.activeElement === inputRef.current;

    if (isInputFocus) {
      inputRef.current?.blur();
    }
  }

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
        className="absolute bottom-0 right-0 top-0 m-auto flex items-center gap-2 peer-focus:-translate-y-0.5">
        <>
          <img className="z-10" src={searchIcon} alt="" />
          <span>Search</span>
        </>
      </Button>
    </article>
  );
}

export default Search;
