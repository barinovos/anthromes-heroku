import React, { Fragment, createRef } from 'react'
// import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import Constants from '../../constants'
import api from '../../utils/api'
import { calcInitialScroll, calcScrollToSection } from '../../utils/dbHelper'
import { MainArea } from '../Common/Styled'
import Toolbar from '../Toolbar'
import Canvas from '../Canvas'
import About from '../About'
import Sidebar from '../Sidebar'
const { API_URL } = Constants

class App extends React.Component {
  state = {
    db: null,
    showAbout: false,
    showStore: false,
    selectedSection: {},
    activePin: null,
    activeImageIndex: -1,
  }

  constructor(props) {
    super(props)

    this.areaRef = createRef()
    api.get(API_URL).then(resp => {
      this.setState({ db: resp.data })
      this.areaRef.current.scroll(calcInitialScroll(resp.data))
    })
  }

  onSelectSection = (selectedSection, isScrollTo, zoom) => {
    this.setState({ selectedSection, activeImageIndex: selectedSection.imageIds.length - 1 })
    if (isScrollTo) this.areaRef.current.scroll(calcScrollToSection(selectedSection.canvas, zoom))
  }

  render() {
    const { db, activeImageIndex, showAbout, onShowStore, selectedSection, activePin } = this.state

    return (
      <Fragment>
        <Toolbar
          activeSection={selectedSection}
          activeImageIndex={activeImageIndex}
          onShowAbout={() => this.setState({ showAbout: true })}
          onShowStore={() => this.setState({ onShowStore: true })}
          onChangeTimeline={ev => this.setState({ activeImageIndex: +ev.target.value })}
        />
        <MainArea ref={this.areaRef}>
          <Canvas
            db={db}
            onSectionSelect={this.onSelectSection}
            selectedSection={selectedSection}
            activeImageIndex={activeImageIndex}
            onPinSelect={activePin => this.setState({ activePin })}
          />
          {showAbout && <About onClose={() => this.setState({ showAbout: false })} />}
          {onShowStore && <div>Store</div>}
          {activePin && <Sidebar pin={activePin} onClose={() => this.setState({ activePin: null })} />}
        </MainArea>
      </Fragment>
    )
  }
}

export default App
