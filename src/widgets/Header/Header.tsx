import { Component } from 'react';

import { IChildren } from '../../shared/types/interfaces.ts';

class Header extends Component<IChildren> {
  render() {
    return (
      <header className="sticky top-0 z-10 flex h-24 w-full flex-wrap items-center justify-between gap-x-6 gap-y-4 p-6 backdrop-blur-xl sm:gap-0 lg:px-12 xl:px-20">
        {this.props.children}
      </header>
    );
  }
}

export default Header;
