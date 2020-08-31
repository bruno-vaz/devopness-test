import React from 'react';
import propTypes from 'prop-types';
import styled from 'styled-components';

const Container = ({ children }) => (
  <Wrapper>
    {children}
  </Wrapper>
);

const Wrapper = styled.div`
  margin: 0 auto;
  padding: 0 16px;
  max-width: 782px;
`;

Container.propTypes = {
  children: propTypes.node.isRequired,
};

export default Container;
