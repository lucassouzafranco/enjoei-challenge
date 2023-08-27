import React, { useState } from 'react';
import Header from './components/Header';
import Search from './components/Search';
import ProductGrid from './components/ProductGrid';

const App = () => {
  const [searchedProduct, setSearchedProduct] = useState('');

  return (
    <div>
      <Header />
      <Search onSearch={setSearchedProduct} />
      <ProductGrid searchedProduct={searchedProduct} />
    </div>
  );
}

export default App;
