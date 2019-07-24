import React, { useState } from 'react'
import PropTypes from 'prop-types'
import CanvasImage from '../CanvasImage'
import Zoom from '../Zoom'
import BottomPanel from '../BottomPanel'
import Pins from '../Pins'
import constants from '../../constants'
import { getCanvasItems, getSectionById } from '../../utils/dbHelper'
import { Area } from './Styled'

const Canvas = ({ db, onSectionSelect, selectedSection }) => {
  const [zoom, setZoom] = useState(0)
  if (!db) return <div>Loading</div>

  const items = getCanvasItems(db)
  const onZoomOut = () => zoom > -constants.MAX_ZOOM_LEVEL && setZoom(zoom - 1)
  const onZoomIn = () => zoom < constants.MAX_ZOOM_LEVEL && setZoom(zoom + 1)
  const onSectionSelectFromPanel = sectionId => onSectionSelect(getSectionById(db, sectionId))

  return (
    <Area onClick={() => onSectionSelect({})}>
      {items.map(item => (
        <CanvasImage
          item={item}
          key={item.id}
          onSelect={onSectionSelectFromPanel}
          selectedItemId={selectedSection.id}
          zoomLevel={zoom}
        />
      ))}
      <Pins pins={db.pins} zoomLevel={zoom} onPinSelect={pin => console.log(pin)} />
      <Zoom zoomIn={onZoomIn} zoomOut={onZoomOut} />
      <BottomPanel items={items} onSelect={onSectionSelectFromPanel} selectedId={selectedSection.id} />
    </Area>
  )
}

Canvas.propTypes = {
  db: PropTypes.object,
  selectedSection: PropTypes.object,
  onSectionSelect: PropTypes.func,
}

export default Canvas
