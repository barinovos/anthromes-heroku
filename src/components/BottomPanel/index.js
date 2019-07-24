import React, { Fragment, useState } from 'react'
import PropTypes from 'prop-types'
import { Wrapper, InnerWrapper, Icon, IconClose, PreviewArea, Thumb } from './Styled'
import image from '../../assets/image.svg'
import close from '../../assets/close.svg'

const BottomPanel = ({ items, onSelect, selectedId }) => {
  const [active, toggleActive] = useState(false)

  return (
    <Wrapper onClick={ev => ev.stopPropagation()}>
      <InnerWrapper active={active}>
        {!active && <Icon src={image} alt="" onClick={() => toggleActive(true)} />}
        {active && (
          <Fragment>
            <IconClose src={close} alt="" onClick={() => toggleActive(false)} />
            <PreviewArea>
              {items.map(({ url, id }) => (
                <Thumb src={url} key={id} onClick={() => onSelect(id)} selected={selectedId === id} />
              ))}
            </PreviewArea>
          </Fragment>
        )}
      </InnerWrapper>
    </Wrapper>
  )
}

BottomPanel.propTypes = {
  items: PropTypes.arrayOf(
    PropTypes.shape({
      url: PropTypes.string,
      sectionId: PropTypes.string,
    }),
  ).isRequired,
  onSelect: PropTypes.func.isRequired,
}

BottomPanel.defaultProps = {
  items: [],
}

export default BottomPanel
