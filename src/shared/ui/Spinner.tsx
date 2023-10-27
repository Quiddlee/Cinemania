import { Component } from 'react';

import { createPortal } from 'react-dom';

class Spinner extends Component {
  render() {
    return createPortal(
      <div className="absolute bottom-0 left-0 right-0 top-0 z-50 m-auto animate-fade-in bg-black/20 backdrop-blur-sm">
        <span className="loader" />
      </div>,
      document.body,
    );
  }
}

export default Spinner;
