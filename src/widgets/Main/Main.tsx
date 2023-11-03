import { IChildren } from '../../shared/types/interfaces.ts';

function Main({ children }: IChildren) {
  return <main className="relative flex gap-28 px-20">{children}</main>;
}

export default Main;
