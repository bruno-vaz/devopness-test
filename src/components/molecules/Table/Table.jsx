import React from 'react';
import propTypes from 'prop-types';

import {
  Wrapper, Columns, Header, Column, Title,
} from './Table.styles';

const Table = ({ mglt, ships }) => (
  <Wrapper>
    <Header>
      <Column>
        <Title>Starship name</Title>
      </Column>
      <Column>
        <Title>{`Stops for ${mglt} MGLT`}</Title>
      </Column>
    </Header>
    <div>
      {ships.map(({ name, stops }) => (
        <Columns key={name}>
          <Column>{name}</Column>
          <Column>{stops}</Column>
        </Columns>
      ))}
    </div>
  </Wrapper>
);

Table.propTypes = {
  mglt: propTypes.string.isRequired,
  ships: propTypes.arrayOf(propTypes.object).isRequired,
};

export default Table;
