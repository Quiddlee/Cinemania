import { Component } from 'react';

import Search from '../../features/Search/Search.tsx';

class Header extends Component {
  render() {
    return (
      <header className="flex w-full items-center justify-center p-5">
        <Search />
      </header>
    );
  }
}

export default Header;
