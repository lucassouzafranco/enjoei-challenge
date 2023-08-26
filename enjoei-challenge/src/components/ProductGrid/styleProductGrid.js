import React from 'react';
import styled from 'styled-components';

export const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(5, 1fr);
  gap: 20px;
`;

export const ProductItem = styled.div`
  position: relative;
  background-color: ${props => (props.loading ? '#ccc' : 'transparent')};
  padding: 10px;
  border: 1px solid #ddd;
`;

export const DiscountTag = styled.div`
  position: absolute;
  top: 10px;
  right: 10px;
  background-color: #f00;
  color: #fff;
  padding: 5px;
  font-size: 12px;
`;

export const ImageWrapper = styled.div`
  position: relative;
  overflow: hidden;
  height: 150px;
`;

export const ProductImage = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
`;

export const PriceTag = styled.div`
  position: absolute;
  bottom: 10px;
  left: 10px;
  background-color: #000;
  color: #fff;
  padding: 5px;
  font-size: 12px;
`;