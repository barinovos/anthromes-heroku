import React from 'react'
import PropTypes from 'prop-types'
import { Wrapper, Buttons, ButtonItem, Button, Value, Divider } from './Styled'

const Zoom = ({ zoomIn, zoomOut, value }) => (
  <Wrapper onClick={ev => ev.stopPropagation()}>
    <Buttons>
      <Button onClick={zoomIn} top>
        <ButtonItem top />
      </Button>
      <Button onClick={zoomOut} bottom>
        <ButtonItem />
      </Button>
      <Divider/>
    </Buttons>
    <Value>{value}%</Value>
  </Wrapper>
)

Zoom.propTypes = {
  zoomIn: PropTypes.func.isRequired,
  zoomOut: PropTypes.func.isRequired,
  value: PropTypes.number,
}

export default Zoom
