import React, { Fragment } from 'react';
import PropTypes from 'prop-types';
import { Wrapper, InnerWrapper, Icon, IconClose, PreviewArea, Thumb } from './Styled';
import image from '../../assets/image.svg';
import close from '../../assets/close.svg';

export default class BottomPanel extends React.PureComponent {
  static propTypes = {
    images: PropTypes.array,
    onImageSelect: PropTypes.func,
  };

  static defaultProps = {
    images: [],
  };

  state = {
    active: false,
  };

  render() {
    const { active } = this.state;
    const { images, onImageSelect } = this.props;

    return (
      <Wrapper>
        <InnerWrapper active={active}>
          {!active && <Icon src={image} alt="hello" onClick={() => this.setState({ active: true })} />}
          {active && (
            <Fragment>
              <IconClose src={close} alt={'sdf'} onClick={() => this.setState({ active: false })} />
              <PreviewArea>
                {images.map(im => (
                  <Thumb src={im.url} key={im.id} onClick={onImageSelect.bind(null, im)} />
                ))}
              </PreviewArea>
            </Fragment>
          )}
        </InnerWrapper>
      </Wrapper>
    );
  }
}
