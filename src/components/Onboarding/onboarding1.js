import React from 'react'
import PropTypes from 'prop-types'
import {
  Wrapper,
  BigText,
  Bold,
  PageNumber,
  NumberText,
  Pagination,
  OnboardingOneModal,
  Logo,
  LinksArea,
} from './Styled'
import { LinkText, Slider } from '../Common/Styled'
import LogoSrc from '../../assets/logo.svg'

const OnboardingOne = ({ activeSection = {}, activeImageIndex, onChangeTimeline, onClose, onNext }) => {
  return (
    <Wrapper>
      <OnboardingOneModal>
        <div
          style={{
            flexDirection: 'row',
          }}
        >
          <LinksArea>
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
          <BigText top>
            <Bold>The Timeline:</Bold> See the history of each section.
            <PageNumber>
              <NumberText>1</NumberText>
            </PageNumber>
            <Pagination onClick={onClose}>Skip</Pagination>
            <Pagination style={{ color: 'gray' }}>Back</Pagination>
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
      </OnboardingOneModal>
    </Wrapper>
  )
}

OnboardingOne.propTypes = {
  onClose: PropTypes.func.isRequired,
  onNext: PropTypes.func.isRequired,
  activeImageIndex: PropTypes.number,
  onChangeTimeline: PropTypes.func,
}

export default OnboardingOne
