import fetch from 'node-fetch'

const API_URL = 'https://yts.am/api/v2/list_movies.json';

export const getMovies = async (limit, rating) => {
  const response = await fetch(`${API_URL}?limit=${limit}&minimum_rating=${rating}`);
  const json = await response.json();
  return json.data.movies;
};