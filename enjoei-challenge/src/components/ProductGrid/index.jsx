import React, { useEffect, useState } from 'react';
import axios from 'axios';
import {
  ProductItem,
  ImageWrapper,
  ProductImage,
  Grid
} from './styleProductGrid';

const ProductGrid = ({ searchedProduct }) => { 

  const [products, setProducts] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get('http://localhost:3000/products');
        setProducts(response.data);
      } catch (error) {
        console.error('Erro ao buscar produtos:', error);
      }
    };

    fetchData();
  }, []);

  //Product Grid será re-renderizado quando detectar alguma mudança em searchedProduct
  const filteredProducts = products.filter(product =>
    product.name.toLowerCase().includes(searchedProduct.toLowerCase())
  );

  return (
    <Grid>
      {searchedProduct === '' ?
        products.map((product, index) => (
          <ProductItem key={index}>
            <ImageWrapper>
              <ProductImage src={product.image} alt="" />
            </ImageWrapper>
          </ProductItem>
        ))
        :
        filteredProducts.map((product, index) => (
          <ProductItem key={index}>
            <ImageWrapper>
              <ProductImage src={product.image} alt="" />
            </ImageWrapper>
          </ProductItem>
        ))
      }
    </Grid>
  );
}

export default ProductGrid;
