import { IChildren } from '../../shared/types/interfaces.ts';

function Main({ children }: IChildren) {
  return (
    <main className="relative flex px-6 lg:gap-28 lg:px-20">{children}</main>
  );
}

export default Main;
