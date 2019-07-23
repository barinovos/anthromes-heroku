import React, { Fragment } from 'react';
import axios from 'axios';
import { Navbar, NavbarText } from './Styled';
import Constants from '../../constants';
import canvas from '../../canvas';
import Zoom from '../Zoom';
import BottomPanel from '../BottomPanel';

class App extends React.Component {
  canvasId = 'myCanvas';

  constructor(props) {
    super(props);
    axios
      .get(Constants.API_URL)
      .then(resp => resp.data)
      .then(({ images, annotations }) => {
        canvas.init(this.canvasId, images, annotations);
        this.setState({ images, annotations });
      })
      .catch(err => console.log(err));
  }

  state = {
    images: null,
    annotations: null,
  };

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
        <BottomPanel images={this.state.images} onImageSelect={image => canvas.moveToPoint(-image.x, -image.y)} />
      </Fragment>
    );
  }
}

export default App;
