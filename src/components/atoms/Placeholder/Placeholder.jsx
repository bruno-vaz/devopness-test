import React from 'react';
import propTypes from 'prop-types';
import SWVector from 'vectors/star-wars.svg';

import { Wrapper } from './Placeholder.styles';

const Placeholder = ({ status }) => {
  const labels = {
    loading: 'Loading starship info...',
    waiting: 'Enter a number above to see the results',
  };

  return (
    <Wrapper>
      <img src={SWVector} alt="Star Wars Logo" />
      <div>{labels[status]}</div>
    </Wrapper>
  );
};

Placeholder.propTypes = {
  status: propTypes.oneOf([
    'loading', 'waiting',
  ]).isRequired,
};

export default Placeholder;
