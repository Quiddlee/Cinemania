import { Component } from 'react';

import { ISearchContext, SearchContext } from './context/SearchProvider.tsx';
import Button from './ui/Button.tsx';
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
      <article className="relative flex w-fit xl:w-1/3">
        <input
          className="peer w-full rounded-full border-l border-t border-white/20 bg-white/10 px-12 py-3 font-light text-gray-300 transition-all duration-200 hover:bg-white/20 focus:-translate-y-0.5 focus:border-transparent focus:outline-0 focus:ring focus:ring-lime-300"
          placeholder="Type to Search..."
          type="text"
          value={this.state.searchQuery}
          onChange={(e) => this.setState({ searchQuery: e.target.value })}
        />
        <Button onClick={() => this.handleSearch(this.state.searchQuery)} />
      </article>
    );
  }
}

export default Search;
