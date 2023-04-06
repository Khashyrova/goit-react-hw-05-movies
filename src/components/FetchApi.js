import axios from 'axios';
import { BASE_URL, API_KEY } from './Base';

const getMovies = async () => {
  const res = await axios.get(`${BASE_URL}trending/movie/day?${API_KEY}`);

  const trendingMovies = res.data.results.map(
    ({ id, title, poster_path, vote_average }) => {
      return { id, title, poster_path, vote_average };
    }
  );
  return trendingMovies;
};

// Search by id -> MovieDetailsPage
const getById = async id => {
  let respById = await axios.get(`${BASE_URL}movie/${id}?${API_KEY}`);
  return respById.data;
};

//Movie REVIEW by id -> Review
const getReviews = async id => {
  const resReviews = await axios.get(
    `${BASE_URL}movie/${id}/reviews?${API_KEY}`
  );
  const reviews = resReviews.data.results.map(({ author, content, id }) => {
    return { author, content, id };
  });
  return reviews;
};

// CAST review by id -> Cast
const getCasts = async id => {
  const resCasts = await axios.get(`${BASE_URL}movie/${id}/credits?${API_KEY}`);
  return resCasts.data;
};

// Movie by name/query -> MoviesPage
const getByQuery = async query => {
  const resByQuery = await axios.get(
    `${BASE_URL}search/movie?${API_KEY}&language=en-US&page=1&include_adult=false&query=${query}`
  );
  return resByQuery.data.results;
};

export { getMovies, getById, getReviews, getCasts, getByQuery };
