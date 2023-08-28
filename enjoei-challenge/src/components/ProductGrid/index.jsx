import React, { useEffect, useState } from 'react';
import axios from 'axios';
import {
  ProductItem,
  ImageWrapper,
  ProductImage,
  Grid,
  PriceTag,
  OldPrice,
  DiscountTag
} from './styleProductGrid';
import ProductNotFound from '../ProductNotFound';
import Pagination from '../Pagination';

const ProductGrid = ({ searchedProduct, onClearSearch }) => {

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

  // Verifica se há um termo de pesquisa e se não há produtos correspondentes a esse termo.
  const isProductNotFoundVisible = searchedProduct !== '' && filteredProducts.length === 0;

  return (
    <Grid>
      {searchedProduct === '' && products.length > 0 ? (
        products.map((product, index) => (
          <ProductItem key={index}>
            <ImageWrapper>
              {product.oldPrice !== '' && (
                <DiscountTag>
                  33% off
                </DiscountTag>
              )}
              <ProductImage src={product.image} alt={product.name} />
              <PriceTag hasoldPrice={product.oldPrice}>
                {` R$ ${product.newPrice}`}
                {product.oldPrice && (
                  <OldPrice>{`R$ ${product.oldPrice}`}</OldPrice>
                )}
              </PriceTag>
            </ImageWrapper>
          </ProductItem>
        ))
      ) : searchedProduct !== '' && filteredProducts.length > 0 ? (
        filteredProducts.map((product, index) => (
          <ProductItem key={index}>
            <ImageWrapper>
              <ProductImage src={product.image} alt={product.name} />
            </ImageWrapper>
          </ProductItem>
        ))
      ) : (
        <ProductNotFound onClearSearch={onClearSearch} />
      )}
      
      {!isProductNotFoundVisible && <Pagination />}
    </Grid>
  );
}

export default ProductGrid;
