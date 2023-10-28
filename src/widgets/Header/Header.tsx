import { Component } from 'react';

import { IChildren } from '../../shared/types/interfaces.ts';

class Header extends Component<IChildren> {
  render() {
    return (
      <header className="sticky top-0 z-10 flex w-full flex-wrap items-center justify-between gap-x-6 gap-y-4 p-4 backdrop-blur-xl sm:gap-0 sm:p-6 lg:px-12 xl:px-24">
        {this.props.children}
      </header>
    );
  }
}

export default Header;
