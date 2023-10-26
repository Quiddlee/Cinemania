import { Component } from 'react';

import { IChildren } from '../../shared/types/interfaces.ts';

class Main extends Component<IChildren> {
  render() {
    const { children } = this.props;

    return <main className="relative">{children}</main>;
  }
}

export default Main;
