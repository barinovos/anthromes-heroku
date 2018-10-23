import React, { Fragment } from 'react';
import { Navbar, NavbarText } from './Styled';
import Canvas from '../Canvas';

class App extends React.Component {
  render() {
    return (
      <Fragment>
        <Navbar>
          <div><NavbarText>Anthromes</NavbarText></div>
          <div><NavbarText>About</NavbarText></div>
        </Navbar>
        <Canvas/>
      </Fragment>
    );
  }
}

export default App;
