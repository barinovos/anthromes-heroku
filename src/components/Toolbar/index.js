import React from 'react'
import PropTypes from 'prop-types'
import { Wrapper, LinksArea, Logo } from './Styled'
import { LinkText, MobileView, DesktopView, Slider } from '../Common/Styled'
import MenuButton from './MenuButton'
import LogoSrc from '../../assets/logo.svg'

const Toolbar = ({ activeSection = {}, activeImageIndex, onShowAbout, onShowStore, onChangeTimeline }) => (
  <Wrapper>
    <LinksArea withMargin>
      <Logo src={LogoSrc} alt="Paint.garden" />
      {activeSection.id && (
        <LinkText bold flexBasis="50%">
          {activeSection.name}
        </LinkText>
      )}
      {activeSection.id && (
        <Slider
          width={[150, 200]}
          value={activeImageIndex}
          max={activeSection.imageIds.length - 1}
          onChange={onChangeTimeline}
        />
      )}
    </LinksArea>
    <DesktopView>
      <LinksArea>
        <LinkText onClick={onShowAbout}>About</LinkText>
        <LinkText onClick={onShowStore}>Store</LinkText>
      </LinksArea>
    </DesktopView>
    <MobileView>
      <MenuButton>
        <LinkText onClick={onShowAbout}>About</LinkText>
        <LinkText onClick={onShowStore}>Store</LinkText>
      </MenuButton>
    </MobileView>
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
