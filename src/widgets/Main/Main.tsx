import { IChildren } from '../../shared/types/interfaces.ts';

function Main({ children }: IChildren) {
  return <main className="relative px-6">{children}</main>;
}

export default Main;
