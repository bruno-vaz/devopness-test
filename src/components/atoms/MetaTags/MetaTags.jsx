import React from 'react';
import PropTypes from 'prop-types';
import { Title, Link, Meta } from 'react-head';

import FaviconVector from 'vectors/favicon-dark.svg';
import DefaultOgImage from 'images/og-image.png';

const SEO = ({
  siteName, title, description, image, imageDescription,
}) => (
  <>
    <Title>{title}</Title>
    <Meta name="theme-color" content="#000" />
    <Meta name="description" content={description} />
    <Meta property="og:image" content={`${image}`} />
    <Meta property="og:image:alt" content={imageDescription} />
    <Meta property="og:image:width" content={1200} />
    <Meta property="og:image:height" content={630} />
    <Meta property="og:site_name" content={siteName} />
    <Meta property="og:title" content={title} />
    <Meta property="og:description" content={description} />
    <Meta property="og:type" content="website" />
    <Meta name="twitter:card" content="summary" />
    <Meta name="twitter:title" content={title} />
    <Meta name="twitter:description" content={description} />
    <Link rel="icon" href={`${FaviconVector}`} />
    <Link rel="preconnect" href="https://fonts.gstatic.com/" crossorigin />
    <Link
      rel="preload"
      href="https://fonts.googleapis.com/css2?family=Mulish:wght@400;700;800&display=swap"
      as="style"
    />
    <Link
      rel="stylesheet"
      href="https://fonts.googleapis.com/css2?family=Mulish:wght@400;700;800&display=swap"
    />
  </>
);

SEO.defaultProps = {
  siteName: 'brunovaz.dev',
  image: DefaultOgImage,
  imageDescription: '',
  title: 'brunovaz.dev',
  description: 'User interface designer and developer',
};

SEO.propTypes = {
  siteName: PropTypes.string,
  image: PropTypes.string,
  imageDescription: PropTypes.string,
  description: PropTypes.string,
  title: PropTypes.string,
};

export default SEO;
