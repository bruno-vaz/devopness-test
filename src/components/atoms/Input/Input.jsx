import React from 'react';
import propTypes from 'prop-types';

import { Wrapper } from './Input.styles';

const Input = ({ name, value, onChange }) => (
  <Wrapper
    name={name}
    value={value}
    onChange={onChange}
  />
);

Input.propTypes = {
  name: propTypes.string.isRequired,
  value: propTypes.string.isRequired,
  onChange: propTypes.func.isRequired,
};

export default Input;
