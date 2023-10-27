import { Component } from 'react';

import { ISearchContext, SearchContext } from './context/SearchProvider.tsx';
import Button from './ui/Button.tsx';
import Input from './ui/Input.tsx';

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
    void this.handleSearch();
  }

  handleSearch = async () => {
    this.context.fetchMovies(this.state.searchQuery);
  };

  render() {
    return (
      <article className="relative flex w-fit xl:w-1/3">
        <Input
          value={this.state.searchQuery}
          onChange={(newVal) => this.setState({ searchQuery: newVal })}
        />
        <Button onClick={this.handleSearch} />
      </article>
    );
  }
}

export default Search;
