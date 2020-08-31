import React from 'react';
import propTypes from 'prop-types';

import { Wrapper } from './RichText.styles';

const RichText = ({ children }) => (
  <Wrapper dangerouslySetInnerHTML={{ __html: children }} />
);

RichText.propTypes = {
  children: propTypes.node.isRequired,
};

export default RichText;
