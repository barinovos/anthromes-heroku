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
import Onboarding from '../Onboarding'
const { API_URL } = Constants

class App extends React.Component {
  state = {
    db: null,
    showAbout: false,
    showStore: false,
    selectedSection: {},
    activePin: null,
    activeImageIndexes: {},
    showOnboarding: true,
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
    if (!selectedSection) return this.setState({ selectedSection: {} })
    const { activeImageIndexes } = this.state
    // check for not set up index
    const activeImageIndex =
      activeImageIndexes[selectedSection.id] === undefined
        ? selectedSection.imageIds.length - 1
        : activeImageIndexes[selectedSection.id]
    this.setState({
      selectedSection,
      activeImageIndexes: { ...activeImageIndexes, [selectedSection.id]: activeImageIndex },
    })
    if (isScrollTo) this.areaRef.current.scroll(calcScrollToSection(selectedSection.canvas, zoom))
  }

  onChangeActiveImageIndex = ev => {
    const { selectedSection, activeImageIndexes } = this.state
    this.setState({
      activeImageIndexes: { ...activeImageIndexes, [selectedSection.id]: +ev.target.value },
    })
  }

  render() {
    const { db, activeImageIndexes, showAbout, onShowStore, selectedSection, activePin, showOnboarding } = this.state

    return (
      <Fragment>
        <Toolbar
          activeSection={selectedSection}
          activeImageIndex={activeImageIndexes[selectedSection.id]}
          onShowAbout={() => this.setState({ showAbout: true })}
          onShowStore={() => this.setState({ onShowStore: true })}
          onChangeTimeline={this.onChangeActiveImageIndex}
        />
        <MainArea ref={this.areaRef}>
          <Canvas
            db={db}
            onSectionSelect={this.onSelectSection}
            selectedSectionId={selectedSection.id}
            activeImageIndexes={activeImageIndexes}
            onPinSelect={activePin => this.setState({ activePin })}
          />
          {showAbout && <About onClose={() => this.setState({ showAbout: false })} />}
          {onShowStore && <div>Store</div>}
          {activePin && <Sidebar pin={activePin} onClose={() => this.setState({ activePin: null })} />}
          {showOnboarding && <Onboarding onClose={() => this.setState({ showOnboarding: false })} />}
        </MainArea>
      </Fragment>
    )
  }
}

export default App
