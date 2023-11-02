import { IChildren } from '../../shared/types/interfaces.ts';

function Main({ children }: IChildren) {
  return <main className="relative grid grid-cols-2 px-6">{children}</main>;
}

export default Main;
