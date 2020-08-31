import React, { useState, useEffect } from 'react';
import moment from 'moment';
import axios from 'axios';

const Page = () => {
  const [starships, setStarships] = useState(undefined);
  useEffect(() => {
    setStarships({ isLoading: true });
    axios.get('https://cors-anywhere.herokuapp.com/https://swapi.dev/api/starships/')
      .then((response) => {
        setStarships(response.data.results);
      });
  }, []);

  const [calcData, setCalcData] = useState({
    mglt: undefined,
    result: undefined,
  });

  const handleChange = (event) => {
    const { name, value } = event.target;
    setCalcData((currentData) => ({
      ...currentData,
      [name]: value,
    }));
  };

  const result = (starshipMglt, consumables, mglt) => {
    const consArr = consumables.split(' ');
    const consAsDays = moment.duration(consArr[0], consArr[1]).asDays();
    return mglt / (starshipMglt * 24 * consAsDays);
  };

  const calc = (event) => {
    event.preventDefault();
    const { mglt } = calcData;
    handleChange({
      target: {
        name: 'result',
        value: starships.map(({ name, MGLT, consumables }) => ({
          name,
          stops: result(parseInt(MGLT, 10), consumables, mglt),
        })),
      },
    });
  };
  return (
    <section>
      <h1>Calculator PoC</h1>
      <form onSubmit={calc}>
        <input
          type="number"
          name="mglt"
          placeholder="Target MGLT"
          value={calcData.mglt}
          onChange={handleChange}
        />
        <button type="submit">Calculate</button>
      </form>
      {(starships && calcData.result)
        ? (
          <div>
            <h2>Starship list</h2>
            {starships.isLoading
              ? (
                <h4>Loading...</h4>
              ) : (
                <ul>
                  {calcData.result.map(({ name, stops }) => (
                    <li key={name}>
                      <b>{name}</b>
                      :
                      {' '}
                      {Math.round(stops)}
                    </li>
                  ))}
                </ul>
              )}
          </div>
        ) : null}
      <pre />
    </section>
  );
};

export default Page;
