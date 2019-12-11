import React from 'react'
import PropTypes from 'prop-types'
import { Wrapper, BigText, Bold, PageNumber, NumberText, Pagination } from './Styled'

const OnboardingOne = ({ onClose, onNext }) => {
  return (
    <Wrapper>
      <div
        style={{
          flexDirection: 'row',
        }}
      >
        <BigText top>
          <Bold>The Timeline:</Bold> See the history of each section.
          <PageNumber>
            <NumberText>1</NumberText>
          </PageNumber>
          <Pagination onClick={onClose}>Skip</Pagination>
          <Pagination>Back</Pagination>
          <Pagination
            onClick={() => {
              onClose()
              onNext()
            }}
          >
            Next
          </Pagination>
        </BigText>
      </div>
    </Wrapper>
  )
}

OnboardingOne.propTypes = {
  onClose: PropTypes.func.isRequired,
  onNext: PropTypes.func.isRequired,
}

export default OnboardingOne
