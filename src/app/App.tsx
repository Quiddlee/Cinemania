import { RouterProvider } from 'react-router-dom';

import router from './router.tsx';
import ErrorBoundary from '../shared/ui/ErrorBoundary.tsx';
import FallbackUi from '../shared/ui/FallbackUi.tsx';

function App() {
  return (
    <ErrorBoundary fallback={<FallbackUi />}>
      <RouterProvider router={router} />
    </ErrorBoundary>
  );
}

export default App;
