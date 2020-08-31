import React from 'react';
import propTypes from 'prop-types';

import Container from 'components/atoms/Container';
import Logo from 'vectors/brunovaz-logo.inline.svg';
import RichText from 'components/molecules/RichText';
import BlobTopLeft from 'vectors/blob-top-left.inline.svg';
import BlobTopRight from 'vectors/blob-top-right.inline.svg';
import BlobBottomRight from 'vectors/blob-bottom-right.inline.svg';
import BlobBottomLeft from 'vectors/blob-bottom-left.inline.svg';

import {
  Wrapper,
  Content,
  Blobs,
} from './Basic.styles';

const Basic = ({ children }) => (
  <Wrapper>
    <Blobs>
      <BlobTopLeft />
      <BlobTopRight />
      <BlobBottomRight />
      <BlobBottomLeft />
    </Blobs>
    <Container>
      <Content>
        <div>
          <Logo />
        </div>
        <RichText>
          {children}
        </RichText>
      </Content>
    </Container>
  </Wrapper>
);

Basic.propTypes = {
  children: propTypes.node.isRequired,
};

export default Basic;
