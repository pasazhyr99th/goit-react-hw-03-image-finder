import React from 'react';
import { ImageGalleryItemStyle, ImageGalleryItemImg } from './ImageGalleryItem.styled';

const ImageGalleryItem = ({ src, alt }) => (
  <ImageGalleryItemStyle>
    <ImageGalleryItemImg src={src} alt={alt} />
  </ImageGalleryItemStyle>
);

export default ImageGalleryItem;
