import { Component } from 'react';

import { createPortal } from 'react-dom';

import {
  ISearchContext,
  SearchContext,
} from '../../features/Search/context/SearchProvider.tsx';

class Spinner extends Component {
  static contextType = SearchContext;

  declare context: ISearchContext;

  render() {
    if (!this.context.isLoading) return null;

    return createPortal(
      <div className="absolute bottom-0 left-0 right-0 top-0 z-50 m-auto flex animate-fade-in items-center justify-center bg-black/20 backdrop-blur-sm">
        <span className="loader -translate-x-5" />
      </div>,
      document.body,
    );
  }
}

export default Spinner;
