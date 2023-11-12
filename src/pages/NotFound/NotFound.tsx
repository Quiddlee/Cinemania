import LinkWithQuery from '../../shared/ui/LinkWithQuery.tsx';
import Modal from '../../shared/ui/Modal.tsx';
import GradientBackground from '../AppLayout/ui/GradientBackground.tsx';

function NotFound() {
  return (
    <div>
      <main className="flex h-screen items-center justify-center p-6">
        <GradientBackground />
        <Modal className="grid justify-items-center gap-4 px-8 py-10">
          <h2 className="text-2xl font-semibold text-gray-200">
            Page not found ⛔
          </h2>

          <p>We&apos;re sorry, the page you are looking for does not exist</p>

          <LinkWithQuery to="/" className="text-blue-400 underline">
            Go back
          </LinkWithQuery>
        </Modal>
      </main>
    </div>
  );
}

export default NotFound;
