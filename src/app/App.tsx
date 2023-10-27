import { Component } from 'react';

import ErrorBoundary from '../features/ProductList/ui/ErrorBoundary.tsx';
import SearchProvider from '../features/Search/context/SearchProvider.tsx';
import MainLayout from '../pages/MainLayout.tsx';

class App extends Component {
  render() {
    return (
      <ErrorBoundary
        fallback={<p className="text-white">Something went wrong</p>}>
        <SearchProvider>
          <MainLayout />
        </SearchProvider>
      </ErrorBoundary>
    );
  }
}

export default App;
