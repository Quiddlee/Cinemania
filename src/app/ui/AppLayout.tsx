import { Outlet } from 'react-router-dom';

const AppLayout = () => (
  <main className="container m-auto h-screen max-w-6xl pt-6 font-medium">
    <article className="flex justify-center gap-4">
      <Outlet />
    </article>
  </main>
);

export default AppLayout;
