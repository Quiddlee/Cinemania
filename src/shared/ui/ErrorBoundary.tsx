import { Component, ErrorInfo, ReactNode } from 'react';

import { IChildren } from '../types/interfaces.ts';

interface IErrorBoundaryState {
  hasError?: boolean;
}

interface IErrorBoundaryProps extends IChildren {
  fallback: ReactNode;
}

class ErrorBoundary extends Component<
  IErrorBoundaryProps,
  IErrorBoundaryState
> {
  state = {
    hasError: false,
  };

  static getDerivedStateFromError = () => ({
    hasError: true,
  });

  componentDidCatch(error: Error, info: ErrorInfo) {
    // eslint-disable-next-line no-console
    console.log('Error report =', error, info.componentStack);
  }

  render() {
    if (this.state.hasError) return this.props.fallback;

    return this.props.children;
  }
}

export default ErrorBoundary;
