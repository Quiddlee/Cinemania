import { memo } from 'react';

interface IMovieRuntime {
  time: string;
  year: string;
}

const Runtime = memo(function Runtime({ time, year }: IMovieRuntime) {
  return (
    <span data-testid="details-runtime">
      {time} | {year}
    </span>
  );
});

export default Runtime;
