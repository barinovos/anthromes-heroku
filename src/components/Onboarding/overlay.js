import React from 'react'
import PropTypes from 'prop-types'
import { OverlayDiv } from './Styled'

const Overlay = ({ bottom }) => {
  return <>{bottom ? <OverlayDiv bottom /> : <OverlayDiv />}</>
}

Overlay.propTypes = {
  bottom: PropTypes.bool,
}

export default Overlay
