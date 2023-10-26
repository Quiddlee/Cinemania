import { Component } from 'react';

import ProductCard from '../../entities/product/ui/ProductCard.tsx';

class ProductList extends Component {
  render() {
    return (
      <ul className="m-auto flex max-w-6xl flex-wrap items-center justify-center gap-10">
        <ProductCard />
        <ProductCard />
        <ProductCard />
        <ProductCard />
        <ProductCard />
        <ProductCard />
        <ProductCard />
        <ProductCard />
      </ul>
    );
  }
}

export default ProductList;
