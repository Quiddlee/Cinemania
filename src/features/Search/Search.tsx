import { Component } from 'react';

import Input from './ui/Input.tsx';

class Search extends Component {
  render() {
    return (
      <article className="w-1/2 min-w-fit xl:w-1/3">
        <Input />
      </article>
    );
  }
}

export default Search;
