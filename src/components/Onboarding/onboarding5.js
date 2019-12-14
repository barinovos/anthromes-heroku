import React from 'react'
import PropTypes from 'prop-types'
import Wizard from '../../assets/wizard.svg'
import AbstractCard from './abstractCard'

const OnboardingFive = ({ onClose, onNext }) => {
  return (
    <AbstractCard
      imgSrc={Wizard}
      title="Scroll & Zoom"
      body="Paint.garden is like one big map. Scroll anywhere and zoom in or out using the magnifying icon."
      onClose={onClose}
      onNext={onNext}
      steps="4 of 4 steps"
    />
  )
}

OnboardingFive.propTypes = {
  onClose: PropTypes.func.isRequired,
  onNext: PropTypes.func.isRequired,
}

export default OnboardingFive
