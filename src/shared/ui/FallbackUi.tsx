import { Component } from 'react';

import Modal from './Modal.tsx';

class FallbackUi extends Component {
  render() {
    return (
      <main className="flex h-screen items-center justify-center p-6">
        <Modal className="px-8 py-10">
          <h2 className="mb-2 text-2xl font-semibold text-gray-200">
            Something went really wrong 😱
          </h2>
          <p>If you faced any issues, please contact our support team</p>
          <a className="block text-blue-400" href="/#">
            cinemania-help@gmail.com
          </a>
        </Modal>
      </main>
    );
  }
}

export default FallbackUi;
