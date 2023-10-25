import { Component } from 'react';

import Button from './ui/Button.tsx';
import Input from './ui/Input.tsx';

interface ISearchState {
  searchQuery: string;
}

class Search extends Component<object, ISearchState> {
  state = {
    searchQuery: '',
  };

  // handleSearch = () => {
  //   console.log(this.state.searchQuery);
  // };

  render() {
    return (
      <article className="flex w-1/2 min-w-fit gap-8 xl:w-1/3">
        <Input
          value={this.state.searchQuery}
          onChange={(newVal) => this.setState({ searchQuery: newVal })}
        />
        <Button /* onClick={this.handleSearch} */ />
      </article>
    );
  }
}

export default Search;
