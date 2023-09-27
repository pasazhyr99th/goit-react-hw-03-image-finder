import React from 'react';
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
 