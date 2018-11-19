import React, { Fragment } from 'react';
import axios from 'axios';
import { Navbar, NavbarText } from './Styled';
import Constants from '../../constants';
import canvas from '../../canvas';
import Zoom from '../Zoom';

class App extends React.Component {
  canvasId = 'myCanvas';

  constructor(props) {
    super(props);
    axios
      .get(Constants.API_URL)
      .then(resp => canvas.init(this.canvasId, resp.data.images))
      .catch(err => console.log(err));
  }

  render() {
    return (
      <Fragment>
        <Navbar>
          <div>
            <NavbarText>Anthromes</NavbarText>
          </div>
          <div>
            <NavbarText>About</NavbarText>
          </div>
        </Navbar>
        <canvas id={this.canvasId} />
        <Zoom zoomIn={canvas.zoomIn} zoomOut={canvas.zoomOut} />
      </Fragment>
    );
  }
}

export default App;
