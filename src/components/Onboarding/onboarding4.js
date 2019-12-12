import React from 'react'
import PropTypes from 'prop-types'
import { Wrapper, BigText, Bold, PageNumber, NumberText, Pagination, OnboardingFourModal, Wizard } from './Styled'
import WizardSrc from '../../assets/wizard.svg'

const OnboardingFour = ({ onClose, onBack }) => {
  return (
    <Wrapper>
      <OnboardingFourModal bottom>
        <div
          style={{
            flexDirection: 'row',
          }}
        >
          <div
            style={{
              width: '100%',
              alignContent: 'center',
            }}
          >
            <Wizard src={WizardSrc} alt="Paint.garden" />
          </div>
          <BigText>
            <Bold>Paint.garden</Bold> is one big canvas, scroll anywhere within and find{' '}
            <Bold>strange new things.</Bold>
            <PageNumber>
              <NumberText>4</NumberText>
            </PageNumber>
            <Pagination onClick={onClose}>Done</Pagination>
            <Pagination
              onClick={() => {
                onClose()
                onBack()
              }}
            >
              Back
            </Pagination>
            <Pagination
              onClick={() => {
                onClose()
              }}
              style={{ color: 'gray' }}
            >
              Next
            </Pagination>
          </BigText>
        </div>
      </OnboardingFourModal>
    </Wrapper>
  )
}

OnboardingFour.propTypes = {
  onClose: PropTypes.func.isRequired,
  onBack: PropTypes.func.isRequired,
}

export default OnboardingFour
