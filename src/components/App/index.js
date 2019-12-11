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
import OnboardingOne from '../Onboarding/onboarding1'
import OnboardingTwo from '../Onboarding/onboarding2'
import OnboardingThree from '../Onboarding/onboarding3'
import Overlay from '../Onboarding/overlay'
const { API_URL } = Constants

class App extends React.Component {
  state = {
    db: null,
    showAbout: false,
    selectedSection: {},
    activePin: null,
    activeImageIndexes: {},
    showOnboarding: true,
    showOnboardingTwo: false,
    showOnboardingThree: false,
  }

  constructor(props) {
    super(props)

    this.areaRef = createRef()
    api.get(API_URL).then(resp => {
      this.setState({ db: resp.data })
      this.setState({ selectedSection: resp.data.sections[0] })
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
    const {
      db,
      activeImageIndexes,
      showOnboarding,
      showOnboardingTwo,
      showOnboardingThree,
      showAbout,
      selectedSection,
      activePin,
    } = this.state

    return (
      <Fragment>
        {showOnboarding && (
          <OnboardingOne
            onClose={() => this.setState({ showOnboarding: false })}
            onNext={() => this.setState({ showOnboardingTwo: true })}
          />
        )}
        {showOnboardingTwo && (
          <OnboardingTwo
            onClose={() => this.setState({ showOnboardingTwo: false })}
            onBack={() => this.setState({ showOnboarding: true })}
            onNext={() => this.setState({ showOnboardingThree: true })}
          />
        )}
        {showOnboardingThree && (
          <OnboardingThree
            onClose={() => this.setState({ showOnboardingThree: false })}
            onBack={() => this.setState({ showOnboardingTwo: true })}
          />
        )}
        {showOnboarding || showOnboardingTwo ? <Overlay /> : showOnboardingThree ? <Overlay bottom /> : null}
        <Toolbar
          activeSection={selectedSection}
          activeImageIndex={activeImageIndexes[selectedSection.id]}
          onShowOnboarding={() => this.setState({ showOnboarding: true })}
          onShowAbout={() => this.setState({ showAbout: true })}
          onChangeTimeline={this.onChangeActiveImageIndex}
          onBoarding={this.state.showOnboarding}
        />
        <MainArea ref={this.areaRef}>
          <Canvas
            db={db}
            onSectionSelect={this.onSelectSection}
            selectedSectionId={selectedSection.id}
            activeImageIndexes={activeImageIndexes}
            onPinSelect={activePin => this.setState({ activePin })}
            onBoarding={this.state.showOnboardingTwo}
          />
          {showAbout && <About onClose={() => this.setState({ showAbout: false })} />}

          {activePin && <Sidebar pin={activePin} onClose={() => this.setState({ activePin: null })} />}
        </MainArea>
      </Fragment>
    )
  }
}

export default App
