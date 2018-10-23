import React from 'react';
import { Container } from './Styled';

let clicking = false,
  startX,
  startY,
  width,
  height;

class Container extends React.Component {
  state = {
    x: 0.5,
    y: 0.5,
  };

  constructor(props) {
    super(props);

    const body = document.querySelector('body');
    width = body.offsetWidth;
    height = body.offsetHeight - 70;
  }

  onMouseDown = ({ clientX, clientY }) => {
    startX = clientX;
    startY = clientY;
    clicking = true;
  };

  onMouseMove = ({ clientX, clientY }) => {
    if (clicking) {
      const { x, y } = this.state;
      const newX = (x * width + clientX - startX) / width,
        newY = (y * height + clientY - startY) / height;
      startX = clientX;
      startY = clientY;
      this.setState({
        x: newX <= 1 && newX >= 0 ? newX : x,
        y: newY <= 1 && newY >= 0 ? newY : y,
      });
    }
  };

  onMouseUp = () => (clicking = false);

  render() {
    const { x, y } = this.state;

    return (
      <Container
        onMouseDown={this.onMouseDown}
        onMouseMove={this.onMouseMove}
        onMouseUp={this.onMouseUp}
        x={x * 100}
        y={y * 100}
      />
    );
  }
}

export default App;
