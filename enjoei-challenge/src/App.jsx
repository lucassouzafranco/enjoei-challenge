import React, { useState } from 'react';
import Header from './components/Header';
import Search from './components/Search';
import ProductGrid from './components/ProductGrid';
import Pagination from './components/Pagination';

const App = () => {
  const [searchedProduct, setSearchedProduct] = useState('');
  
  const handleEnterKeyPress = (query) => {
    setSearchedProduct(query);
  };

  const handleClearSearch = () => {
    setSearchedProduct('');
  };

  return (
    <div>
      <Header />
      <Search onEnterKeyPress={handleEnterKeyPress} />
      <ProductGrid searchedProduct={searchedProduct} onClearSearch={handleClearSearch} />
    </div>
  );
}

export default App;
