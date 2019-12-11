import React from 'react'
import PropTypes from 'prop-types'
import { Wrapper, BigText, Bold, PinIcon, PageNumber, NumberText, Pagination, OnboardingTwoModal } from './Styled'
import pin from '../../assets/Annotation_t.svg'

const OnboardingTwo = ({ onClose, onBack, onNext }) => {
  return (
    <Wrapper>
      <OnboardingTwoModal>
        <div
          style={{
            flexDirection: 'row',
          }}
        >
          <BigText>
            <PinIcon src={pin} alt={''} />
            <Bold>Annotation:</Bold> click to see more detail about this area.
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
                onNext()
              }}
            >
              Next
            </Pagination>
          </BigText>
        </div>
      </OnboardingTwoModal>
    </Wrapper>
  )
}

OnboardingTwo.propTypes = {
  onClose: PropTypes.func.isRequired,
  onBack: PropTypes.func.isRequired,
  onNext: PropTypes.func.isRequired,
}

export default OnboardingTwo
