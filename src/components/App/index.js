import React, { Fragment } from 'react'
// import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import Constants from '../../constants'
import api from '../../utils/api'
import { MainArea } from '../Common/Styled'
import Toolbar from '../Toolbar'
import Canvas from '../Canvas'
import About from '../About'
const { API_URL } = Constants

class App extends React.Component {
  state = {
    db: null,
    showAbout: false,
    showStore: false,
    selectedSection: {},
  }

  constructor(props) {
    super(props)

    api.get(API_URL).then(resp => this.setState({ db: resp.data }))
  }

  render() {
    const { db, showAbout, onShowStore, selectedSection } = this.state

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
          />
          {showAbout && <About onClose={() => this.setState({ showAbout: false })} />}
          {onShowStore && <div>Store</div>}
        </MainArea>
      </Fragment>
    )
  }
}

export default App
