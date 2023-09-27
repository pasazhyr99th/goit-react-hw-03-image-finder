import React from 'react';
import { ImageGalleryStyle } from './ImageGallery.styled';

const ImageGallery = ({ children }) => (
  <ImageGalleryStyle>{children}</ImageGalleryStyle>
);

export default ImageGallery;
