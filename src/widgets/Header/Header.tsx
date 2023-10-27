import { Component } from 'react';

import Logo from './ui/Logo.tsx';
import TotalResults from './ui/TotalResults.tsx';
import Search from '../../features/Search/Search.tsx';

class Header extends Component {
  render() {
    return (
      <header className="sticky top-0 z-10 flex w-full flex-wrap items-center justify-between gap-x-6 gap-y-4 p-4 backdrop-blur-xl sm:gap-0 sm:p-6 lg:px-12 xl:px-24">
        <Logo />
        <Search />
        <TotalResults />
      </header>
    );
  }
}

export default Header;
