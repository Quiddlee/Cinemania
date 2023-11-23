import { Component, ReactNode } from 'react';

import { IChildren } from '../types/interfaces';

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
  constructor(props: IErrorBoundaryProps) {
    super(props);

    this.state = {
      hasError: false,
    };
  }

  static getDerivedStateFromError = () => ({
    hasError: true,
  });

  render() {
    const { hasError } = this.state;
    const { fallback, children } = this.props;

    if (hasError) return fallback;

    return children;
  }
}

export default ErrorBoundary;
