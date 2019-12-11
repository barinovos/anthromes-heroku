import React from 'react'
import PropTypes from 'prop-types'
import { Wrapper, BigText, Bold, PageNumber, NumberText, Pagination, OnboardingThreeModal } from './Styled'

const OnboardingThree = ({ onClose, onBack }) => {
  return (
    <Wrapper>
      <OnboardingThreeModal>
        <BigText bottom>
          <Bold>Gallery:</Bold> Click here If you want to jump between each seperate sections
          <PageNumber>
            <NumberText>2</NumberText>
          </PageNumber>
          <Pagination onClick={onClose}>Skip</Pagination>
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
          >
            Next
          </Pagination>
        </BigText>
      </OnboardingThreeModal>
    </Wrapper>
  )
}

OnboardingThree.propTypes = {
  onClose: PropTypes.func.isRequired,
  onBack: PropTypes.func.isRequired,
}

export default OnboardingThree
