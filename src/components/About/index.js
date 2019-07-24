import React from 'react'
import PropTypes from 'prop-types'
import { Wrapper, ContentWrapper, CloseItem } from './Styled'
import Close from '../../assets/close.svg'

const About = ({ onClose }) => (
  <Wrapper>
    <ContentWrapper>
      <b>Anthromes</b>
      <p>
        An Anthrome describe the terrestrial biosphere in its contemporary, human-altered form using global ecosystem
        units defined by global patterns of sustained direct human interaction with ecosystems.
      </p>
      <CloseItem onClick={onClose}>
        <img src={Close} alt="Close" />
      </CloseItem>
    </ContentWrapper>
  </Wrapper>
)

About.propTypes = {
  onClose: PropTypes.func,
}

export default About
