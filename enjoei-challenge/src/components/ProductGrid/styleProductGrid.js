import {styled} from 'styled-components';

export const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(5, 1fr);
  margin: 0 3em;
`;

export const ProductItem = styled.div`
  position: relative;
  background-color: ${props => (props.loading ? '#ccc' : 'transparent')};
  margin-top: 1.7em;
`;

export const DiscountTag = styled.div`
  position: absolute;
  top: 0.2em;
  right: 0.2em;
  color: white;
  background-color: #f05b78;
  padding: 0.3em 0.5em;
  font-size: 10px;
  display: flex;
  align-items: center;
  border-radius: 2px;
  font-family: 'Poppins', sans-serif;
  font-weight: 100;
`;

export const ImageWrapper = styled.div`
  position: relative;
  overflow: hidden;
  height: 31vh;
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
  width: max-content;
  height: max-content;
  border-radius: 2px;
  background-color: #000;
  color: ${props => props.hasOldPrice ? '#f5899e' : 'black'};
  padding: 0.1em 0.4em;
  font-size: 12px;
  background-color: white;
  display: flex;
  align-items: center;
  justify-content: center;
  font-family: 'Poppins', sans-serif;
  font-weight: 600;
`;

export const OldPrice = styled.span`
  color: gray; /* Define a cor para o preço antigo */
  text-decoration: line-through; /* Tacha o texto do preço antigo */
  margin-right: 0.5em; /* Espaçamento entre o preço antigo e o novo */
  font-weight: 200;
  margin-left: 0.5em;
`;