import router from '@app/model/router';
import { setupStore } from '@app/store/store';
import { Provider } from 'react-redux';
import { RouterProvider } from 'react-router-dom';

const store = setupStore();

const App = () => (
  <Provider store={store}>
    <RouterProvider router={router} />
  </Provider>
);

export default App;
