import axios from "axios";

const API_URL = "https://www.omdbapi.com/";
const API_KEY = process.env.REACT_APP_OMDB_API_KEY;

export const searchMovies = async (query) => {
  try {
    const response = await axios.get(`${API_URL}?s=${query}&apikey=${API_KEY}`);
    return response.data.Search || [];
  } catch (error) {
    throw new Error("Error fetching movies.");
  }
};

export const getMovieDetails = async (id) => {
  try {
    const response = await axios.get(`${API_URL}?i=${id}&apikey=${API_KEY}`);
    return response.data;
  } catch (error) {
    throw new Error("Error fetching movie details.");
  }
};
