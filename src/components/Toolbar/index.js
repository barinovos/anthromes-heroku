import React from 'react'
import PropTypes from 'prop-types'
import { Wrapper, LinksArea, Logo } from './Styled'
import { LinkText } from '../Common/Styled'
import LogoSrc from '../../assets/logo.svg'

const Toolbar = ({ activeSection = {}, activeImageIndex, onShowAbout, onShowStore, onChangeTimeline }) => (
  <Wrapper>
    <LinksArea>
      <Logo src={LogoSrc} alt="Paint.garden" />
      {activeSection.id && <LinkText bold>{activeSection.name}</LinkText>}
      {activeSection.id && (
        <input
          type="range"
          value={activeImageIndex}
          max={activeSection.imageIds.length - 1}
          onChange={onChangeTimeline}
          style={{ marginLeft: 20 }}
        />
      )}
    </LinksArea>
    <LinksArea>
      <LinkText onClick={onShowAbout}>About</LinkText>
      <LinkText onClick={onShowStore}>Store</LinkText>
    </LinksArea>
  </Wrapper>
)

Toolbar.propTypes = {
  activeSection: PropTypes.object.isRequired,
  activeImageIndex: PropTypes.number,
  onShowAbout: PropTypes.func,
  onShowStore: PropTypes.func,
  onChangeTimeline: PropTypes.func,
}

export default Toolbar
