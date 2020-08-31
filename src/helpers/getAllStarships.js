import axios from 'axios';

const hasAllRequiredData = ({ MGLT, consumables }) => (
  (MGLT !== 'unknown' && consumables !== 'unknown')
);

const getAllStarships = async (pageUrl = 'https://swapi.dev/api/starships') => {
  const baseUrl = 'https://cors-anywhere.herokuapp.com';
  const response = await axios.get(`${baseUrl}/${pageUrl}`);
  const { data } = response;
  const results = data.results.filter(hasAllRequiredData);

  if (data.next) {
    return results.concat(await getAllStarships(data.next));
  }

  return results;
};

export default getAllStarships;
