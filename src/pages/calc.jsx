import React from 'react';

import Layout from 'components/theme/Layout';
import MetaTags from 'components/atoms/MetaTags';
import Basic from 'components/templates/Basic';

const Page = () => (
  <Layout>
    <MetaTags />
    <Basic>
      Lorem ipsum
    </Basic>
  </Layout>
);

export default Page;
