import { Component } from 'react';

import SearchProvider from '../features/Search/context/SearchProvider.tsx';
import MainLayout from '../pages/MainLayout.tsx';

class App extends Component {
  render() {
    return (
      <SearchProvider>
        <MainLayout />
      </SearchProvider>
    );
  }
}

export default App;
