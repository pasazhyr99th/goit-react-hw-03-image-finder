import React from 'react';
import PropTypes from 'prop-types';
import { ButtonStyle } from './Button.styled';

const Button = ({ onClick }) => (
  <ButtonStyle type="button" onClick={onClick}>
    Load more
  </ButtonStyle>
);

export default Button;

Button.propTypes = {
  onClick: PropTypes.func.isRequired,
};