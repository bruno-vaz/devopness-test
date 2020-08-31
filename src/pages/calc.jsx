import React from 'react';

import Layout from 'components/theme/Layout';
import MetaTags from 'components/atoms/MetaTags';
import Basic from 'components/templates/Basic';
import Input from 'components/atoms/Input';

const Page = () => (
  <Layout>
    <MetaTags />
    <Basic>
      <h1>
        Quantas paradas são necessárias para percorrer
        <Input name="mglt" value={1000000} onChange={() => console.log('changed')} />
        megalights?
      </h1>
    </Basic>
  </Layout>
);

export default Page;
