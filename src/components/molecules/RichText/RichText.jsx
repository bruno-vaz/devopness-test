import React from 'react';
import propTypes from 'prop-types';

import { Wrapper } from './RichText.styles';

const RichText = ({ children, titleColor }) => {
  const wrapperProps = {
    titleColor,
    ...(typeof children === 'string')
      ? { dangerouslySetInnerHTML: { __html: children } } : { children },
  };

  return (
    <Wrapper {...wrapperProps} />
  );
};

RichText.defaultProps = {
  titleColor: 'black',
};
RichText.propTypes = {
  children: propTypes.node.isRequired,
  titleColor: propTypes.string,
};

export default RichText;
