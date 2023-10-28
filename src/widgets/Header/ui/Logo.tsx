import { Component } from 'react';

import { APP_TITLE } from '../../../shared/const/const.ts';

class Logo extends Component {
  render() {
    return (
      <h1 className="flex gap-2 text-2xl font-medium text-lime-400 lg:text-3xl">
        <div className="flex">
          {['🍿', ...APP_TITLE.split('')].map((letter, i) => (
            <span
              style={{
                animationDelay: `${String(i * 0.024)}s`,
              }}
              /* eslint-disable-next-line react/no-array-index-key */
              key={`${letter}-${i}`}
              className="animate-springish-letter">
              {letter}
            </span>
          ))}
        </div>
      </h1>
    );
  }
}

export default Logo;
