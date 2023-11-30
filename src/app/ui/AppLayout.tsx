import { Outlet } from 'react-router-dom';

const AppLayout = () => (
  <main className="container m-auto h-fit max-w-6xl py-6 font-medium">
    <article className="flex h-full items-start justify-center gap-4">
      <Outlet />
    </article>
  </main>
);

export default AppLayout;
