import React from 'react';
import propTypes from 'prop-types';

import './Layout.base.css';

const Layout = ({ children }) => (
  <section>
    {children}
  </section>
);

Layout.propTypes = {
  children: propTypes.node.isRequired,
};

export default Layout;
