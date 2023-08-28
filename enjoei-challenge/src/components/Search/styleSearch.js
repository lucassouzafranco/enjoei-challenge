import {styled} from 'styled-components';

export const SearchArea = styled.div` 
  height: 8vh;
  width: 90vw;
  margin: 0.5em 3em;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

export const FoundProductsNumber = styled.p`
  font-family: 'Poppins', sans-serif;
  font-size: 10pt;
  font-weight: 900;
  display: none;

  @media (min-width: 768px) {
    display: block;
  }
`;

export const SearchBarContainer = styled.div`
  width: 20%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  border: 1px solid #F1EEEC;
  border-radius: 4px;
  padding: 0.6%;
  background-color: white;

  @media (max-width: 768px) {
    width: 100%;
    height: 75%;
    padding: 0 4%;
  }
`;

export const SearchInput = styled.input`
  border: none;
  outline: none;
  background-color: transparent;
  font-size: 14px;
  color: gray;
  padding: 5px;
  width: 100%;
`;

export const Placeholder = styled.span`
  color: gray;
  font-size: 14px;
  font-family: 'Poppins', sans-serif;
  font-weight: 600;
  opacity: 0.5;
`;

export const SearchIcon = styled.img`
  width: 10%;

  @media (max-width: 768px) {
    width: 7%;
  }
`;