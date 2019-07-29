import React, { Fragment } from 'react'
// import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import Constants from '../../constants'
import api from '../../utils/api'
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
  }

  constructor(props) {
    super(props)

    api.get(API_URL).then(resp => this.setState({ db: resp.data }))
  }

  render() {
    const { db, showAbout, onShowStore, selectedSection, activePin } = this.state

    return (
      <Fragment>
        <Toolbar
          activeItemName={selectedSection.name}
          onShowAbout={() => this.setState({ showAbout: true })}
          onShowStore={() => this.setState({ onShowStore: true })}
        />
        <MainArea>
          <Canvas
            db={db}
            onSectionSelect={selectedSection => this.setState({ selectedSection })}
            selectedSection={selectedSection}
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
