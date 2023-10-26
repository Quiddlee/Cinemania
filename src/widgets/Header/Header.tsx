import { Component } from 'react';

import Logo from './ui/Logo.tsx';
import TotalResults from './ui/TotalResults.tsx';
import Search from '../../features/Search/Search.tsx';

class Header extends Component {
  render() {
    return (
      <header className="sticky top-0 z-10 flex w-full items-center justify-between gap-6 px-6 py-6 backdrop-blur-xl sm:gap-0 lg:px-12 xl:px-24">
        <Logo />
        <Search />
        <TotalResults />
      </header>
    );
  }
}

export default Header;
