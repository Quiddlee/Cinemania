import { Component } from 'react';

import { APP_TITLE } from '../../../shared/const/const.ts';

class Logo extends Component {
  render() {
    return (
      <h1 className="flex gap-2 text-2xl font-medium text-lime-400 lg:text-3xl">
        🍿
        {APP_TITLE}
      </h1>
    );
  }
}

export default Logo;
