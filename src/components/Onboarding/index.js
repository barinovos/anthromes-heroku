import React from 'react'
import PropTypes from 'prop-types'
import { Wrapper, BigText, Bold, PinIcon } from './Styled'
import { Slider } from '../Common/Styled'
import pin from '../../assets/Annotation_t.svg'
import wizard from '../../assets/wizard.svg'

const Onboarding = ({ onClose }) => {
  return (
    <Wrapper onClick={onClose}>
      <BigText>Paint.garden is one big canvas, scroll anywhere within and find strange new things.</BigText>
      <img src={wizard} alt={'Wizard'} />
      <BigText>
        <Slider defaultValue={100} width={[100, 150]} />
        <Bold>The Timeline:</Bold> See the history of each section.
      </BigText>
      <BigText>
        <PinIcon src={pin} alt={''} />
        <Bold>Annotation:</Bold> click to see more detail about this area.
      </BigText>
      <BigText bottom>
        <Bold>Gallery:</Bold> Click here If you want to jump between each seperate sections
      </BigText>
    </Wrapper>
  )
}

Onboarding.propTypes = {
  onClose: PropTypes.func.isRequired,
}

export default Onboarding
