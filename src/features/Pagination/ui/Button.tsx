interface IButtonProps {
  disabled: boolean;
  onClick: () => void;
  position: 'left' | 'right';
  children: string;
}

function Button({ disabled, onClick, position, children }: IButtonProps) {
  const isLeftPosition = position === 'left';
  const btnPosition = isLeftPosition
    ? 'left-0 md:-left-16'
    : 'right-0 md:-right-16';
  const arrowDirectionMain = isLeftPosition
    ? 'group-hover:-translate-x-14'
    : 'group-hover:translate-x-14';
  const arrowDirectionSecondSnooze = isLeftPosition
    ? 'translate-x-14'
    : '-translate-x-14';

  return (
    <button
      data-scroll-sticky="true"
      data-scroll-target="#main"
      className={`${btnPosition} group absolute bottom-0 top-0 my-auto h-24 w-24 animate-fade-in cursor-pointer text-neutral-200 outline-none disabled:cursor-default md:h-72 md:w-72`}
      type="button"
      disabled={disabled}
      onClick={onClick}>
      <div className="flex h-full w-full items-center justify-center transition-all duration-500 group-disabled:opacity-30">
        <div className="absolute flex h-full w-full animate-pagination-fade-in items-center justify-center rounded-full border border-lime-400/80 [transition:_background-color_0.4s_cubic-bezier(.18,.33,0,.95)_0.3s,_transform_0.3s_cubic-bezier(.18,.33,0,.95)] group-hover:scale-[0.3] group-hover:bg-lime-500 group-hover:duration-[850ms] group-active:scale-[0.25] group-active:duration-300 group-disabled:group-active:scale-[0.3]" />
        <div className="relative flex h-fit w-1/5 items-center justify-center overflow-hidden">
          <img
            className={`${arrowDirectionMain} z-10 text-5xl group-hover:opacity-0 group-hover:transition-all group-hover:duration-[850ms] group-hover:ease-[cubic-bezier(.18,.33,0,.95)]`}
            src={children}
            alt=""
          />
          <img
            className={`${arrowDirectionSecondSnooze} absolute z-10 text-5xl opacity-0 group-hover:translate-x-0 group-hover:opacity-100 group-hover:transition-all group-hover:duration-[850ms] group-hover:ease-[cubic-bezier(.18,.33,0,.95)]`}
            src={children}
            alt=""
          />
        </div>
      </div>
    </button>
  );
}

export default Button;
