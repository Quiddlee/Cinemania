import chevronLeft from '../../../assets/chevron-left.svg';
import LinkWithQuery from '../../../shared/ui/LinkWithQuery.tsx';

function BackButton() {
  return (
    <LinkWithQuery to="/">
      <div className="group relative flex h-10 w-10 cursor-pointer items-center justify-center overflow-hidden rounded-full py-2">
        <div className="absolute h-full w-full rounded-full bg-neutral-300 transition-all duration-700 ease-out group-hover:scale-95" />
        <img
          src={chevronLeft}
          alt=""
          className="z-10 group-hover:-translate-x-8 group-hover:opacity-0 group-hover:transition-all group-hover:duration-500 group-hover:ease-[cubic-bezier(.26,.81,.21,.98)]"
        />
        <img
          src={chevronLeft}
          alt=""
          className="absolute z-10 translate-x-8 opacity-0 group-hover:translate-x-0 group-hover:opacity-100 group-hover:transition-all group-hover:duration-500 group-hover:ease-[cubic-bezier(.26,.81,.21,.98)]"
        />
      </div>
    </LinkWithQuery>
  );
}

export default BackButton;
