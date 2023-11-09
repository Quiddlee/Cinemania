interface IMovieRuntime {
  time: string;
  year: string;
}

function Runtime({ time, year }: IMovieRuntime) {
  return (
    <span data-testid="details-runtime">
      {time} | {year}
    </span>
  );
}

export default Runtime;
