import React from 'react';
import './styleProductGrid';

const ProductGrid = ({ products, loading }) => {
  return (
    <Grid>
      {products.map((product, index) => (
        <ProductItem key={index} loading={loading}>
          <DiscountTag>{product.discount}</DiscountTag>
          <ImageWrapper>
            <ProductImage src={product.image} alt="" />
          </ImageWrapper>
          <PriceTag>${product.price}</PriceTag>
        </ProductItem>
      ))}
    </Grid>
  );
};