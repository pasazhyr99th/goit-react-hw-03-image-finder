import React from 'react';
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
