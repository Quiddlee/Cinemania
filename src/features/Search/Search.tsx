import { Component } from 'react';

import { ISearchContext, SearchContext } from './context/SearchProvider.tsx';
import { LOCAL_STORAGE_SEARCH_QUERY } from '../../shared/const/const.ts';

interface ISearchState {
  searchQuery: string;
}

class Search extends Component<object, ISearchState> {
  static contextType = SearchContext;

  declare context: ISearchContext;

  state = {
    searchQuery: '',
  };

  componentDidMount() {
    const storedQuery = localStorage.getItem(LOCAL_STORAGE_SEARCH_QUERY);

    if (storedQuery) {
      this.setState({ searchQuery: storedQuery });
      void this.handleSearch(storedQuery);
      return;
    }

    void this.handleSearch('');
  }

  handleSearch = async (query: string) => {
    this.context.fetchMovies(query);
    localStorage.setItem(LOCAL_STORAGE_SEARCH_QUERY, query);
  };

  render() {
    return (
      <article className="relative mx-auto flex w-full sm:w-fit xl:w-1/3">
        <input
          className="peer w-full rounded-full border-l border-t border-white/20 bg-white/10 px-12 py-3 font-light text-gray-300 transition-all duration-200 hover:bg-white/20 focus:-translate-y-0.5 focus:border-transparent focus:shadow-xl focus:shadow-black/20 focus:outline-0 focus:ring focus:ring-lime-300"
          placeholder="Type to Search..."
          type="text"
          value={this.state.searchQuery}
          onChange={(e) => this.setState({ searchQuery: e.target.value })}
        />
        <button
          onClick={() => this.handleSearch(this.state.searchQuery)}
          className="absolute bottom-0 right-0 top-0 m-auto scale-105 rounded-full bg-lime-400 px-4 py-3 font-semibold text-gray-950 transition-all duration-200 hover:scale-110 focus:outline-0 focus:ring focus:ring-lime-300 focus:ring-offset-2 focus:ring-offset-black/70 active:scale-105 active:duration-75 peer-focus:-translate-y-0.5 sm:px-6"
          type="button">
          Search
        </button>
      </article>
    );
  }
}

export default Search;
