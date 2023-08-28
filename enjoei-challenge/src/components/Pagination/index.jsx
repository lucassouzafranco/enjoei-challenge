import React from 'react';
import {
  ButtonsArea,
  Previous,
  Next,
  Buttons
} from './stylePagination';

const Pagination = () => {
  return (
    <ButtonsArea>
      <Buttons>
        <Previous>← anterior</Previous>
        <Next>próxima →</Next>
      </Buttons>
    </ButtonsArea>
  )
}

export default Pagination;