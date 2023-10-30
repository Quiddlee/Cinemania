import { IChildren } from '../../shared/types/interfaces.ts';

function Header({ children }: IChildren) {
  return (
    <header
      data-scroll-sticky
      data-scroll-target="#main"
      className="sticky top-0 z-10 flex w-full flex-wrap items-center justify-between gap-x-6 gap-y-4 p-6 backdrop-blur-xl sm:gap-0 lg:h-24 lg:px-12 xl:px-20">
      {children}
    </header>
  );
}

export default Header;
