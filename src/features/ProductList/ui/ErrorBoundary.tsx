import { Component, ReactNode } from 'react';

import { IChildren } from '../../../shared/types/interfaces.ts';

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

  render() {
    if (this.state.hasError) return this.props.fallback;

    return this.props.children;
  }
}

export default ErrorBoundary;
