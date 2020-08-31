import moment from 'moment';

const calculateStops = (speed, consumables, distance) => {
  const consumablesArr = consumables.split(' ');
  const consumablesAsDays = moment.duration(consumablesArr[0], consumablesArr[1]).asDays();
  return Math.floor(parseInt(distance, 10) / (speed * 24 * consumablesAsDays));
};

export default calculateStops;
