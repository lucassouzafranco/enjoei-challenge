import React, { Fragment } from 'react'
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