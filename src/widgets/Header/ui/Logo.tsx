// 👇 letter order will never change so we can use array index as a key
/* eslint-disable react/no-array-index-key */

import LinkWithQuery from '../../../shared/ui/LinkWithQuery.tsx';
import { LOGO_ANIMATION_OFFSET, LOGO_LETTERS } from '../const/const.ts';

function Logo() {
  return (
    <LinkWithQuery to="/">
      <h1 className="mr-auto flex font-quicksand font-bold tracking-tighter text-lime-400">
        {LOGO_LETTERS.map((letter, i) => (
          <span
            style={{
              animationDelay: `${String(i * LOGO_ANIMATION_OFFSET)}s`,
            }}
            key={`${letter}-${i}`}
            className="animate-springish-letter text-3xl lg:text-4xl">
            {letter}
          </span>
        ))}
      </h1>
    </LinkWithQuery>
  );
}

export default Logo;
