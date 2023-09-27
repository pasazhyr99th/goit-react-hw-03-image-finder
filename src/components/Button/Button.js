import React from 'react';
import { ButtonStyle } from './Button.styled';

const Button = ({ onClick }) => (
  <ButtonStyle type="button" onClick={onClick}>
    Load more
  </ButtonStyle>
);

export default Button;
