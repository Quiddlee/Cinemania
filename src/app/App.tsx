import { HashRouter } from 'react-router-dom';

import SearchProvider from '../features/Search/context/SearchProvider.tsx';
import AppLayout from '../pages/AppLayout.tsx';
import ErrorBoundary from '../shared/ui/ErrorBoundary.tsx';
import FallbackUi from '../shared/ui/FallbackUi.tsx';

function App() {
  return (
    <HashRouter>
      <ErrorBoundary fallback={<FallbackUi />}>
        <SearchProvider>
          <AppLayout />
        </SearchProvider>
      </ErrorBoundary>
    </HashRouter>
  );
}

export default App;
