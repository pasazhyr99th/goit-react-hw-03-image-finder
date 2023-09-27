// import React, { Component } from 'react';
// import { Overlay, ModalStyle } from './Modal.styled';

// class Modal extends Component {
//   componentDidMount() {
//     window.addEventListener('keydown', this.handleKeyDown);
//   }

//   componentWillUnmount() {
//     window.removeEventListener('keydown', this.handleKeyDown);
//   }

//   handleKeyDown = e => {
//     if (e.code === 'Escape') {
//       this.props.onClose();
//     }
//   };

//   handleBackdropClick = e => {
//     if (e.currentTarget === e.target) {
//       this.props.onClose();
//     }
//   };

//   render() {
//     return (
//       <Overlay onClick={this.handleBackdropClick}>
//         <ModalStyle>
//           <img src={src} alt={alt} />
//         </ModalStyle>
//       </Overlay>
//     );
//   }
// }

// export default Modal;

import React from 'react';
import { Overlay, ModalStyle } from './Modal.styled';

const Modal = ({ onClose, src, alt }) => (
  <Overlay onClick={onClose}>
    <ModalStyle>
      <img src={src} alt={alt} />
    </ModalStyle>
  </Overlay>
);

export default Modal;

