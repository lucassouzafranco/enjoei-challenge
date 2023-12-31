import React, { Fragment } from 'react'
import { 
  Centralize,
  HeaderArea,
  Image
} from './styleHeader';
import logo from '../../assets/images/logo.png'

const Header = () => {
  return (
    <Fragment>
      <HeaderArea>
        <Centralize>
          <Image src={logo} alt="logotipo da Enjoei"/>
        </Centralize>
      </HeaderArea>
    </Fragment>
  )
}

export default Header;