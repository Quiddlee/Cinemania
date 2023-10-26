import { Component } from 'react';

import {
  ISearchContext,
  SearchContext,
} from '../../../features/Search/context/SearchProvider.tsx';

class TotalResults extends Component {
  static contextType = SearchContext;

  declare context: ISearchContext;

  render() {
    return (
      <p className="hidden text-lime-400 sm:block lg:text-lg">
        Found <span className="font-semibold">{this.context.totalResults}</span>{' '}
        total results
      </p>
    );
  }
}

export default TotalResults;
