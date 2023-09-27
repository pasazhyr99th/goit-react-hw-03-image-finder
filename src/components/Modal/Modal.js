import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Overlay, ModalStyle } from './Modal.styled';

class Modal extends Component {
  componentDidMount() {
    window.addEventListener('keydown', this.handleKeyDown);
  }

  componentWillUnmount() {
    window.removeEventListener('keydown', this.handleKeyDown);
  }

  handleKeyDown = (e) => {
    if (e.code === 'Escape') {
      this.props.onClose();
    }
  };

  handleCloseClick = () => {
    this.props.onClose();
  };

  render() {
    return (
      <Overlay onClick={this.handleCloseClick}>
        <ModalStyle>
          <img src={this.props.largeImageURL} alt={this.props.tags} />
        </ModalStyle>
      </Overlay>
    );
  }
}

export default Modal;

Modal.propTypes = {
  image: PropTypes.shape({
    largeImageURL: PropTypes.string.isRequired,
  }).isRequired,
  onClose: PropTypes.func.isRequired,
};