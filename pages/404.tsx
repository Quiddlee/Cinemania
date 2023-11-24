import LinkWithQuery from '@shared/ui/LinkWithQuery';
import Modal from '@shared/ui/Modal';
import GradientBackground from '@widgets/AppLayout/ui/GradientBackground';
import Header from '@widgets/Header/Header';

function Custom404() {
  return (
    <>
      <Header>
        <title>Cinemania | Not found</title>
      </Header>
      <main
        data-testid="not-found"
        className="flex h-screen items-center justify-center p-6">
        <GradientBackground />
        <Modal className="grid justify-items-center gap-4 px-8 py-10">
          <h2 className="text-2xl font-semibold text-gray-200">
            Page not found ⛔
          </h2>

          <p>We&apos;re sorry, the page you are looking for does not exist</p>

          <LinkWithQuery href="/" className="text-blue-400 underline">
            Go back
          </LinkWithQuery>
        </Modal>
      </main>
    </>
  );
}

export default Custom404;
