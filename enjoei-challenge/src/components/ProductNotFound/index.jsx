import React, { Fragment } from 'react'
import catSelfie from '../../assets/images/cat_selfie.jpg';
import {
  ProductNotFoundArea,
  Image,
  FeedbackTitle,
  Subtitle,
  CleanSearchButton
} from './styleProductNotFound';

const ProductNotFound = ({ onClearSearch }) => {
  return (
    <Fragment>
      <ProductNotFoundArea>
        <FeedbackTitle>ué, não encontramos nadinha</FeedbackTitle>
        <Subtitle>que tal recomeçar do começo ?</Subtitle>
        <CleanSearchButton onClick={onClearSearch}>limpar busca</CleanSearchButton>
        <Image src={catSelfie} />
      </ProductNotFoundArea>
    </Fragment>
  )
}

export default ProductNotFound;