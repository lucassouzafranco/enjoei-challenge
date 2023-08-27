import React, { Fragment, useState } from 'react'
import {
  SearchArea,
  FoundProductsNumber,
  SearchBarContainer,
  Placeholder,
  SearchInput,
  SearchIcon
} from './styleSearch';
import Icon from '../../assets/images/icon.png'

const Search = ({ onEnterKeyPress }) => {
  const [inputValue, setInputValue] = useState('');

  const handleInputChange = (event) => {
    setInputValue(event.target.value);
  };

  const handleKeyDown = (event) => {
    if (event.key === 'Enter') {
      onEnterKeyPress(inputValue);
    }

    if (event.key === 'Backspace' && inputValue === '') {
      onEnterKeyPress('');
    }
  };

  return (
    <Fragment>
      <SearchArea>
        <FoundProductsNumber>977 produtos encontrados</FoundProductsNumber>
        <SearchBarContainer>
          <Placeholder>buscar</Placeholder>
          <SearchInput
            type="text"
            value={inputValue}
            onChange={handleInputChange}
            onKeyDown={handleKeyDown}
          />
          <SearchIcon src={Icon} />
        </SearchBarContainer>
      </SearchArea>
    </Fragment>
  )
}

export default Search;