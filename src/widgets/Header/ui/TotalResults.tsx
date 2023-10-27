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
      <p className="hidden min-w-[206px] text-lime-400 sm:block lg:text-lg">
        Found <span className="font-semibold">{this.context.totalResults}</span>{' '}
        movies
      </p>
    );
  }
}

export default TotalResults;
