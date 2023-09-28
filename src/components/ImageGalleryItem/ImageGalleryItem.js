import React from 'react';
import PropTypes from 'prop-types';
import {
  ImageGalleryItemStyle,
  ImageGalleryItemImg,
} from './ImageGalleryItem.styled';

const ImageGalleryItem = ({ image, onClick }) => (
  <ImageGalleryItemStyle onClick={onClick}>
    <ImageGalleryItemImg src={image.webformatURL} alt={image.tags} />
  </ImageGalleryItemStyle>
);

export default ImageGalleryItem;

ImageGalleryItem.propTypes = {
  image: PropTypes.shape({
    webformatURL: PropTypes.string.isRequired,
    tags: PropTypes.string.isRequired,
  }).isRequired,
  onClick: PropTypes.func.isRequired,
};
