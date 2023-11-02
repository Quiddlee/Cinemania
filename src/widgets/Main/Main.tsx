import { IChildren } from '../../shared/types/interfaces.ts';

function Main({ children }: IChildren) {
  return (
    <main className="relative grid grid-cols-2 gap-28 px-20">{children}</main>
  );
}

export default Main;
