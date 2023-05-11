import axios from 'axios';

const BASE_URL = 'https://api.themoviedb.org';
const API_KEY = 'b13a09f684c7fe23fb2f1a323ef19ea8';

export const getTrendingMovies = async () => {
  const { data } = await axios.get(
    `${BASE_URL}/3/trending/movie/day?api_key=${API_KEY}`
  );
  return data;
};
