import React from 'react'
import PropTypes from 'prop-types'
import { Wrapper, BigText, Bold, PageNumber, NumberText, Pagination, OnboardingThreeModal } from './Styled'

const OnboardingThree = ({ onClose, onBack }) => {
  return (
    <Wrapper>
      <OnboardingThreeModal bottom>
        <div
          style={{
            flexDirection: 'row',
          }}
        >
          <BigText>
            <Bold>Gallery:</Bold> Click here If you want to jump between each seperate sections
            <PageNumber>
              <NumberText>3</NumberText>
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
              style={{ color: 'gray' }}
            >
              Next
            </Pagination>
          </BigText>
        </div>
      </OnboardingThreeModal>
    </Wrapper>
  )
}

OnboardingThree.propTypes = {
  onClose: PropTypes.func.isRequired,
  onBack: PropTypes.func.isRequired,
}

export default OnboardingThree
