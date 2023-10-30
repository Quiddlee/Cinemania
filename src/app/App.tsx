import { Component } from 'react';

import SearchProvider from '../features/Search/context/SearchProvider.tsx';
import MainLayout from '../pages/MainLayout.tsx';
import ErrorBoundary from '../shared/ui/ErrorBoundary.tsx';
import FallbackUi from '../shared/ui/FallbackUi.tsx';

class App extends Component {
  render() {
    return (
      <ErrorBoundary fallback={<FallbackUi />}>
        <SearchProvider>
          <MainLayout />
        </SearchProvider>
      </ErrorBoundary>
    );
  }
}

export default App;
