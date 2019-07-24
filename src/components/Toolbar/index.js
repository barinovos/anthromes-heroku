import React from 'react'
import PropTypes from 'prop-types'
import { Wrapper, LinksArea } from './Styled'
import { LinkText } from '../Common/Styled'
import Logo from '../../assets/logo.svg'

const Toolbar = ({ activeItemName, onShowAbout, onShowStore }) => (
  <Wrapper>
    <LinksArea>
      <img src={Logo} alt="Paint.garden" />
      {activeItemName && <LinkText>{activeItemName}</LinkText>}
    </LinksArea>
    <LinksArea>
      <LinkText onClick={onShowAbout}>About</LinkText>
      <LinkText onClick={onShowStore}>Store</LinkText>
    </LinksArea>
  </Wrapper>
)

Toolbar.propTypes = {
  activeItemName: PropTypes.string,
  onShowAbout: PropTypes.func,
  onShowStore: PropTypes.func,
}

export default Toolbar
