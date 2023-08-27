import {styled} from 'styled-components';

export const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(5, 1fr);
  margin: 0 3em;
`;

export const ProductItem = styled.div`
  position: relative;
  background-color: ${props => (props.loading ? '#ccc' : 'transparent')};
`;

export const DiscountTag = styled.div`
  position: absolute;
  top: 0.6em;
  right: 0.6em;
  background-color: #f00;
  color: #fff;
  padding: 0.3em;
  font-size: 12px;
`;

export const ImageWrapper = styled.div`
  position: relative;
  overflow: hidden;
  height: 33vh;
  width: 86%;
  border-radius: 3px;
`;

export const ProductImage = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
`;

export const PriceTag = styled.div`
  position: absolute;
  bottom: 0.6em;
  left: 0.6em;
  background-color: #000;
  color: #fff;
  padding: 0.3em;
  font-size: 12px;
`;