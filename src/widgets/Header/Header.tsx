import { Component } from 'react';

import { IChildren } from '../../shared/types/interfaces.ts';

interface IHeaderProps extends IChildren {}

class Header extends Component<IHeaderProps> {
  render() {
    const { children } = this.props;

    return (
      <header className="flex w-full items-center justify-center p-6">
        {children}
      </header>
    );
  }
}

export default Header;
