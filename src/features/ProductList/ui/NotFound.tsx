import { Component } from 'react';

import Modal from '../../../shared/ui/Modal.tsx';

class NotFound extends Component {
  render() {
    return (
      <Modal>
        <span className="text-2xl font-semibold text-gray-200">
          No Movies Found. 🥺
        </span>
        <p className="mt-2">You&apos;re search did not match any movies.</p>
        <p>Please try again. 👉👈</p>
      </Modal>
    );
  }
}

export default NotFound;
