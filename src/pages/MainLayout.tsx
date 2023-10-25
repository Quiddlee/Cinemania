import { Component } from 'react';

import GradientBackground from './ui/GradientBackground.tsx';
import ProductList from '../features/ProductList/ProductList.tsx';
import Header from '../widgets/Header/Header.tsx';
import Main from '../widgets/Main/Main.tsx';

class MainLayout extends Component {
  render() {
    return (
      <div className="relative m-auto h-screen overflow-hidden">
        <GradientBackground />

        <div className="container relative z-20 m-auto">
          <Header />
          <Main>
            <ProductList />
          </Main>
        </div>
      </div>
    );
  }
}

export default MainLayout;
