import React from 'react';
import propTypes from 'prop-types';

import { Wrapper } from './Input.styles';

const Input = ({ name, value, onChange }) => (
  <Wrapper
    name={name}
    value={value}
    type="number"
    min="100"
    step="100"
    onChange={onChange}
  />
);

Input.propTypes = {
  name: propTypes.string.isRequired,
  value: propTypes.string.isRequired,
  onChange: propTypes.func.isRequired,
};

export default Input;
