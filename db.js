export let movies = [
  {
    id: 0,
    name: 'Star Wars - The new one',
    score: 0.1,
  },
  {
    id: 1,
    name: 'Avengers - The new one',
    score: 8,
  },
  {
    id: 3,
    name: 'Logan',
    score: 2,
  },
];

export const getMovies = () => movies;

export const getById = id => movies.find(m => m.id === id);

export const deleteMovie = (id) => {
  const cleanedMovie =  movies.filter(m => m.id !== id);
  if (movies.length > cleanedMovie.length) {
    movies = cleanedMovie;
    return true;
  } else {
    return false;
  }
};

export const addMovie = (name, score) => {
  const newMovie = {
    id: movies.length,
    name,
    score,
  };
  movies.push(newMovie);
  return newMovie;
};