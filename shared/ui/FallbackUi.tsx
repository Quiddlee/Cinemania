import { PropsWithChildren } from 'react';

import Modal from '@shared/ui/Modal';

import LinkWithQuery from './LinkWithQuery';

function FallbackUi({ children }: PropsWithChildren) {
  return (
    <div
      data-scroll="true"
      data-scroll-sticky="true"
      data-scroll-target="section"
      className="flex h-screen items-center justify-center p-6">
      <Modal className="grid justify-items-center gap-4 px-8 py-10">
        <h2 className="mb-2 text-2xl font-semibold text-gray-200">
          Something went wrong 😱
        </h2>
        {children}
        <p>If you faced any issues, please contact our support team</p>
        <div className="flex gap-4 text-blue-400 underline">
          <p>cinemania-help@gmail.com</p>
          <LinkWithQuery href="/">Go back</LinkWithQuery>
        </div>
      </Modal>
    </div>
  );
}

export default FallbackUi;
