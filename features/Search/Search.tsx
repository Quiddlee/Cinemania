import { useCallback, useRef, useState } from 'react';

import Image from 'next/image';

import searchIcon from '@assets/search.svg';
import { urlParams } from '@customTypes/enums';
import useScroll from '@entities/scroll/hooks/useScroll';
import { ENTER_KEY, ESCAPE_KEY } from '@features/Search/const/const';
import {
  DEFAULT_PAGE,
  QUERY_FALLBACK,
  SCROLL_TOP_DURATION,
} from '@shared/const/const';
import useKey from '@shared/hooks/useKey';
import useUrl from '@shared/hooks/useUrl';
import Button from '@shared/ui/Button';

function Search() {
  const { scroll } = useScroll();
  const { setUrl, readUrl } = useUrl();
  const [query, setQuery] = useState(() => {
    const searchQuery = readUrl(urlParams.SEARCH);
    if (searchQuery === QUERY_FALLBACK) return '';
    return searchQuery;
  });
  const inputRef = useRef<HTMLInputElement>(null);

  const handleSearch = useCallback(() => {
    setUrl({
      [urlParams.PAGE]: DEFAULT_PAGE,
      [urlParams.SEARCH]: query,
    });
    scroll?.scrollTo('top', { duration: SCROLL_TOP_DURATION });
    localStorage.setItem('searchQuery', query);
  }, [query, scroll, setUrl]);

  function handleEnter() {
    const isInputFocus = document.activeElement === inputRef.current;
    const noActiveElement = document.activeElement === document.body;

    if (noActiveElement) {
      inputRef.current?.focus();
      setQuery('');
      return;
    }

    if (isInputFocus) {
      handleSearch();
      inputRef.current?.blur();
    }
  }

  function handleEscape() {
    const isInputFocus = document.activeElement === inputRef.current;

    if (isInputFocus) {
      inputRef.current?.blur();
    }
  }

  useKey(ENTER_KEY, handleEnter);
  useKey(ESCAPE_KEY, handleEscape);

  return (
    <article className="relative mx-auto flex w-full animate-fade-in sm:w-fit xl:w-1/3">
      <input
        data-testid="search-input"
        ref={inputRef}
        className="peer w-full rounded-full border-l border-t border-white/20 bg-white/10 px-6 py-3 font-light text-zinc-100 transition-all duration-200 hover:bg-white/20 focus:-translate-y-0.5 focus:border-transparent focus:shadow-xl focus:shadow-black/20 focus:outline-0 focus:ring focus:ring-lime-300"
        placeholder="Type to Search..."
        type="text"
        value={query}
        onChange={(e) => setQuery(e.target.value)}
      />
      <Button
        onClick={handleSearch}
        className="absolute bottom-0 right-0 top-0 m-auto flex items-center gap-2 peer-focus:-translate-y-0.5">
        <>
          <Image width="0" height="0" sizes="100vw" src={searchIcon} alt="" />
          <span>Search</span>
        </>
      </Button>
    </article>
  );
}

export default Search;
