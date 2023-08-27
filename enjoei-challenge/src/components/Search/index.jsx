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

const Search = () => {
  const [searchResults, setSearchResults] = useState([]);

  
  return (
    <Fragment>
      <SearchArea>
        <FoundProductsNumber>977 produtos encontrados</FoundProductsNumber>
        <SearchBarContainer>
          <Placeholder>buscar</Placeholder>
          <SearchInput type="text" />
          <SearchIcon src={Icon} />
        </SearchBarContainer>
      </SearchArea>
    </Fragment>
  )
}

export default Search;