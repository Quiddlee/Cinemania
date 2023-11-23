import ErrorBoundary from '@shared/ui/ErrorBoundary';
import FallbackUi from '@shared/ui/FallbackUi';

function App() {
  return (
    <ErrorBoundary fallback={<FallbackUi />}>
      {/* <RouterProvider router={router} /> */}
      <p>test</p>
    </ErrorBoundary>
  );
}

export default App;
