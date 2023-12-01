import axios from 'axios';

axios.defaults.baseURL = 'https://api.themoviedb.org/3';
axios.defaults.params = {
  api_key: '345007f9ab440e5b86cef51be6397df1',
};

export const fetchMovies = async () => {
  const response = await axios.get('/trending/all/day');
  return response.data.results;
};

// --url 'https://api.themoviedb.org/3/search/movie?query=vvvvv&include_adult=false&language=en-US&page=1'

export const fetchMoviesByQuery = async query => {
  const response = await axios.get(`/search/movie?query=${query}`);
  return response.data.results;
};

//  --url 'https://api.themoviedb.org/3/movie/268?language=en-US'
export const fetchMovieById = async id => {
  const response = await axios.get(`/movie/${id}`);
  return response.data;
};

// https://api.themoviedb.org/3/movie/{movie_id}/credits
export const fetchMovieCast = async movie_id => {
  const response = await axios.get(`/movie/${movie_id}/credits`);
  return response.data.cast;
};

// https://api.themoviedb.org/3/movie/{movie_id}/reviews
export const fetchMovieReviews = async movie_id => {
  const response = await axios.get(`/movie/${movie_id}/reviews`);
  return response.data.results;
};
