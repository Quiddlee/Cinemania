import { RefObject, useCallback, useRef } from 'react';

import Image from 'next/image';

import searchIcon from '@assets/search.svg';
import { urlParams } from '@customTypes/enums';
import { ENTER_KEY, ESCAPE_KEY } from '@features/Search/const/const';
import { queryUpdated } from '@features/Search/model/slice';
import {
  DEFAULT_PAGE,
  LOCAL_STORAGE_SEARCH_QUERY,
  SCROLL_TOP_DURATION,
} from '@shared/const/const';
import useAppDispatch from '@shared/hooks/useAppDispatch';
import useKey from '@shared/hooks/useKey';
import useLocalStorageState from '@shared/hooks/useLocalStorageState';
import useUrl from '@shared/hooks/useUrl';
import Button from '@shared/ui/Button';
import LocomotiveScroll from 'locomotive-scroll';

interface IMovieListProps {
  scroll: RefObject<LocomotiveScroll>;
}

function Search({ scroll }: IMovieListProps) {
  const [query, setQuery] = useLocalStorageState(
    '',
    LOCAL_STORAGE_SEARCH_QUERY,
  );
  const inputRef = useRef<HTMLInputElement>(null);
  const { setUrl } = useUrl();
  const dispatch = useAppDispatch();

  const handleSearch = useCallback(() => {
    setUrl(urlParams.PAGE, DEFAULT_PAGE);
    scroll?.current?.scrollTo('top', { duration: SCROLL_TOP_DURATION });
    dispatch(queryUpdated(query));
  }, [dispatch, query, scroll, setUrl]);

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
          <Image src={searchIcon} alt="" />
          <span>Search</span>
        </>
      </Button>
    </article>
  );
}

export default Search;
