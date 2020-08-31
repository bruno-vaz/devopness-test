import React, { useState, useEffect } from 'react';

import Layout from 'components/theme/Layout';
import MetaTags from 'components/atoms/MetaTags';
import Basic from 'components/templates/Basic';
import Input from 'components/atoms/Input';
import Table from 'components/molecules/Table';
import Placeholder from 'components/atoms/Placeholder';

import getAllStarships from 'helpers/getAllStarships';
import calculateStops from 'helpers/calculateStops';

const Page = () => {
  const [mglt, setMglt] = useState('1000000');

  const [starships, setStarships] = useState(undefined);
  useEffect(() => {
    getAllStarships()
      .then((result) => {
        setStarships(result);
      });
  }, []);
  const [results, setResults] = useState(undefined);
  useEffect(() => {
    if (starships) {
      setResults(
        starships.map(({ name, MGLT, consumables }) => ({
          name,
          stops: calculateStops(MGLT, consumables, mglt),
        })),
      );
    }
  }, [mglt, starships]);

  return (
    <Layout>
      <MetaTags />
      <Basic>
        <h1>
          How many stops are necessary to travel
          <Input
            name="mglt"
            value={mglt}
            onChange={(e) => setMglt(e.target.value)}
          />
          megalights?
        </h1>
        {(results && mglt)
          ? (
            <Table mglt={mglt} ships={results} />
          ) : (
            <Placeholder
              status={results ? 'waiting' : 'loading'}
            />
          )}
      </Basic>
    </Layout>
  );
};

export default Page;
