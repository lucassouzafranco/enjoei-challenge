import React, { Fragment, useState } from 'react'
import {
  SearchArea,
  FoundProductsNumber,
  SearchBar,
  Placeholder,
  SearchInput,
  SearchIcon,
  ClearFilter,
  SearchBarContainer
} from './styleSearch';
import Icon from '../../assets/images/icon.png'

const Search = ({ onEnterKeyPress }) => {
  const [inputValue, setInputValue] = useState('');

  const handleInputChange = (event) => {
    setInputValue(event.target.value);
  };

  const handleResetFilter = (event) => {
    setInputValue('');
    onEnterKeyPress('');
  }

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
          <ClearFilter isvisible={inputValue.trim() !== ''} onClick={handleResetFilter}>limpar busca</ClearFilter>
          <SearchBar>
            <Placeholder>buscar</Placeholder>
            <SearchInput
              type="text"
              value={inputValue}
              onChange={handleInputChange}
              onKeyDown={handleKeyDown}
            />
            <SearchIcon src={Icon} />
          </SearchBar>
        </SearchBarContainer>
      </SearchArea>
    </Fragment>
  )
}

export default Search;