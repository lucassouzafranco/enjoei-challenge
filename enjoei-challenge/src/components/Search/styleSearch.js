import {styled} from 'styled-components';

export const SearchArea = styled.div` 
  height: 8vh;
  margin: 0 3em;
  display: flex;
  align-items: center;
  justify-content: space-between;

  @media (max-width: 768px) {
    margin: 0 1em;
  }
`;

export const FoundProductsNumber = styled.p`
  font-family: 'Poppins', sans-serif;
  font-size: 10pt;
  font-weight: 900;
  display: none;
  color: ${props => (props.isVisible ? 'black' : 'white')};

  @media (min-width: 768px) {
    display: block;
  }
`;

export const ClearFilter = styled.button`
  font-family: 'Poppins', sans-serif;
  font-size: 10px;
  width: 14vw;
  text-align: center;
  color: #f5899e;
  font-weight: 600;
  visibility: ${props => (props.isvisible ? 'visible' : 'hidden')};
  opacity: ${props => (props.isvisible ? 1 : 0)};
  transition: visibility 0s, opacity 0.5s;
  background-color: transparent;
  border-style: none;
  cursor: pointer;

  @media (max-width: 768px) {
    display: none;
  }
`;


export const SearchBarContainer = styled.div`
  display: flex;
  align-items: center;
  width: 25%;

  @media (max-width: 768px) {
    justify-content: center;
    width: 100vw;
  }

`;
export const SearchBar = styled.div`
  display: flex;
  align-items: center;
  border: 1px solid #F1EEEC;
  border-radius: 4px;
  padding: 2%;
  background-color: white;
  width: 100%;

  @media (max-width: 768px) {
    width: 100%;
    height: 6vh;
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