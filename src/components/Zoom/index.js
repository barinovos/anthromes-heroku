import React from 'react'
import PropTypes from 'prop-types'
import { Wrapper, Button } from './Styled'

const Zoom = ({ zoomIn, zoomOut }) => (
  <Wrapper onClick={ev => ev.stopPropagation()}>
    <Button onClick={zoomIn}>+</Button>
    <Button onClick={zoomOut}>-</Button>
  </Wrapper>
)

Zoom.propTypes = {
  zoomIn: PropTypes.func.isRequired,
  zoomOut: PropTypes.func.isRequired,
}

export default Zoom
