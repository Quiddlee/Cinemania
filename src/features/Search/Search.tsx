import { Component, createRef } from 'react';

import { ISearchContext, SearchContext } from './context/SearchProvider.tsx';
import searchIcon from '../../assets/search.svg';
import { LOCAL_STORAGE_SEARCH_QUERY } from '../../shared/const/const.ts';

interface ISearchState {
  searchQuery: string;
}

class Search extends Component<object, ISearchState> {
  static contextType = SearchContext;

  declare context: ISearchContext;

  inputRef = createRef<HTMLInputElement>();

  state = {
    searchQuery: '',
  };

  componentDidMount() {
    document.addEventListener('keydown', this.handleKeydown);

    const storedQuery = localStorage.getItem(LOCAL_STORAGE_SEARCH_QUERY);

    if (storedQuery) {
      this.setState({ searchQuery: storedQuery });
      void this.handleSearch(storedQuery);
      return;
    }

    void this.handleSearch('');
  }

  componentWillUnmount() {
    document.removeEventListener('keydown', this.handleKeydown);
  }

  handleKeydown = (e: KeyboardEvent) => {
    const isEnterPressed = e.key === 'Enter';
    const isEscPressed = e.key === 'Escape';
    const isInputFocus = document.activeElement === this.inputRef.current;
    const noActiveElement = document.activeElement === document.body;

    if (isEscPressed && isInputFocus) {
      this.inputRef.current?.blur();
    }

    if (isEnterPressed && noActiveElement) {
      this.inputRef.current?.focus();
      this.setState({ searchQuery: '' });
      return;
    }

    if (isEnterPressed && isInputFocus) {
      void this.handleSearch(this.state.searchQuery);
      this.inputRef.current?.blur();
    }
  };

  handleSearch = async (query: string) => {
    this.context.fetchMovies(query.trim());
    localStorage.setItem(LOCAL_STORAGE_SEARCH_QUERY, query.trim());
  };

  render() {
    return (
      <article className="animation-delay relative mx-auto flex w-full animate-fade-in sm:w-fit xl:w-1/3">
        <input
          ref={this.inputRef}
          className="peer w-full rounded-full border-l border-t border-white/20 bg-white/10 px-6 py-3 font-light text-gray-300 transition-all duration-200 hover:bg-white/20 focus:-translate-y-0.5 focus:border-transparent focus:shadow-xl focus:shadow-black/20 focus:outline-0 focus:ring focus:ring-lime-300"
          placeholder="Type to Search..."
          type="text"
          value={this.state.searchQuery}
          onChange={(e) => this.setState({ searchQuery: e.target.value })}
        />
        <button
          onClick={() => this.handleSearch(this.state.searchQuery)}
          className="absolute bottom-0 right-0 top-0 m-auto flex scale-105 items-center gap-2 rounded-full bg-lime-400 px-4 py-3 font-semibold text-gray-950 transition-all duration-200 hover:scale-110 focus:outline-0 focus:ring focus:ring-lime-300 focus:ring-offset-2 focus:ring-offset-black/70 active:scale-105 active:duration-75 peer-focus:-translate-y-0.5 sm:px-6"
          type="button">
          <img className="z-10" src={searchIcon} alt="" />
          <span>Search</span>
        </button>
      </article>
    );
  }
}

export default Search;
