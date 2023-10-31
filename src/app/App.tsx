import { HashRouter } from 'react-router-dom';

import SearchProvider from '../features/Search/context/SearchProvider.tsx';
import MainLayout from '../pages/MainLayout.tsx';
import ErrorBoundary from '../shared/ui/ErrorBoundary.tsx';
import FallbackUi from '../shared/ui/FallbackUi.tsx';

function App() {
  return (
    <HashRouter>
      <ErrorBoundary fallback={<FallbackUi />}>
        <SearchProvider>
          <MainLayout />
        </SearchProvider>
      </ErrorBoundary>
    </HashRouter>
  );
}

export default App;
