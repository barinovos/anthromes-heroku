import React from 'react'
import PropTypes from 'prop-types'
import { Wrapper, Button, Value } from './Styled'

const Zoom = ({ zoomIn, zoomOut, value }) => (
  <Wrapper onClick={ev => ev.stopPropagation()}>
    <Button onClick={zoomIn} top>
      +
    </Button>
    <Button onClick={zoomOut} bottom>
      -
    </Button>
    <Value>{value}%</Value>
  </Wrapper>
)

Zoom.propTypes = {
  zoomIn: PropTypes.func.isRequired,
  zoomOut: PropTypes.func.isRequired,
  value: PropTypes.number,
}

export default Zoom
