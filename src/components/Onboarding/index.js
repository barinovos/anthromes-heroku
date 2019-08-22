import React from 'react'
import PropTypes from 'prop-types'
import { Wrapper } from './Styled'
import wizard from '../../assets/wizard.svg'

const Onboarding = ({ onClose }) => {
  return (
    <Wrapper onClick={onClose}>
      <p>Paint.garden is one big canvas, scroll anywhere within and find strange new things.</p>
      <img src={wizard} alt={'Wizard'}/>
    </Wrapper>
  )
}

Onboarding.propTypes = {
  onClose: PropTypes.func.isRequired,
}

export default Onboarding
