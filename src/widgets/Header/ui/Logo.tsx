import { LOGO_LETTERS } from '../const/const.ts';

function Logo() {
  return (
    <h1 className="mr-auto flex font-quicksand font-bold tracking-tighter text-lime-400">
      {LOGO_LETTERS.map((letter, i) => (
        <span
          style={{
            animationDelay: `${String(i * 0.02)}s`,
          }}
          // 👇 letter order will never change so we can use array index as a key
          /* eslint-disable-next-line react/no-array-index-key */
          key={`${letter}-${i}`}
          className="animate-springish-letter text-3xl lg:text-4xl">
          {letter}
        </span>
      ))}
    </h1>
  );
}

export default Logo;
