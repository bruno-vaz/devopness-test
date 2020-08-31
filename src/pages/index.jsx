import React, { useState } from 'react';
import moment from 'moment';

const Page = () => {
  const [calcData, setCalcData] = useState({
    starshipMglt: 75,
    consumables: '2 months',
    mglt: 1000000,
    result: undefined,
  });

  const handleChange = (event) => {
    const { name, value } = event.target;
    setCalcData((currentData) => ({
      ...currentData,
      [name]: value,
    }));
  };

  const calc = (event) => {
    console.group('calc');
    event.preventDefault();
    const { starshipMglt, consumables, mglt } = calcData;
    console.log({ starshipMglt, consumables, mglt });
    const consArr = consumables.split(' ');
    console.log({ consArr });
    const consumablesInDays = moment.duration(consArr[0], consArr[1]).asDays();
    console.log({ consumablesInDays });
    const result = mglt / (starshipMglt * 24 * consumablesInDays);
    console.log({ result });
    handleChange({
      target: {
        name: 'result',
        value: result,
      },
    });
    console.groupEnd();
  };
  return (
    <section>
      <h1>Calculator PoC</h1>
      <form onSubmit={calc}>
        <input
          type="number"
          name="starshipMglt"
          placeholder="Starship MGLT"
          value={calcData.starshipMglt}
          onChange={handleChange}
        />
        <input
          type="string"
          name="consumables"
          placeholder="Starship Consumables"
          value={calcData.consumables}
          onChange={handleChange}
        />
        <input
          type="number"
          name="mglt"
          placeholder="Target MGLT"
          value={calcData.mglt}
          onChange={handleChange}
        />
        <button type="submit">Calculate</button>
      </form>
      <div>
        <h2>Result</h2>
        {calcData.result
          ? (
            <div>
              This ship will need
              {' '}
              {calcData.result}
              {' '}
              stops to travel the desired MGLT distance.
            </div>
          ) : null}
      </div>
    </section>
  );
};

export default Page;
