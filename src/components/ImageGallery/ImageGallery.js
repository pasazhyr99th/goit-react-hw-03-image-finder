import React from 'react';
import PropTypes from 'prop-types';
import ImageGalleryItem from 'components/ImageGalleryItem';
import { ImageGalleryStyle } from './ImageGallery.styled';

const ImageGallery = ({ images, onImageClick }) => (
  <ImageGalleryStyle>
    {images.map(image => (
      <ImageGalleryItem
        key={image.id}
        image={image}
        onClick={() => onImageClick(image.largeImageURL)}
      />
    ))}
  </ImageGalleryStyle>
);

export default ImageGallery;

ImageGallery.propTypes = {
  images: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      webformatURL: PropTypes.string.isRequired,
      largeImageURL: PropTypes.string.isRequired,
    })
  ).isRequired,
  onItemClick: PropTypes.func.isRequired,
};