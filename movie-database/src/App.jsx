import React, { useState } from "react";
import SearchBar from "./components/SearchBar";
import MovieCard from "./components/MovieCard";
import MovieDetails from "./components/MovieDetails";
import { searchMovies, getMovieDetails } from "./services/movieService";

const App = () => {
  const [movies, setMovies] = useState([]);
  const [selectedMovie, setSelectedMovie] = useState(null);


  const handleSearch = async (query) => {
    try {
      const results = await searchMovies(query);
      setMovies(results);
    } catch (error) {
      console.error(error);
    }
  };

  const handleMovieClick = async (id) => {
    try {
      const movie = await getMovieDetails(id);
      setSelectedMovie(movie);
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div className="container mx-auto p-4">
      <SearchBar onSearch={handleSearch} />
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        {movies.map((movie) => (
          <MovieCard key={movie.imdbID} movie={movie} onClick={handleMovieClick} />
        ))}
      </div>
      {selectedMovie && <MovieDetails movie={selectedMovie} />}
    </div>
  );
};

const handleSearch = async (query) => {
  try {
    const results = await searchMovies(query);
    if (results.length === 0) {
      alert("No movies found.");
    } else {
      setMovies(results);
    }
  } catch (error) {
    alert("Error fetching movies.");
  }
};

{movies.length === 0 && !error && (
  <div className="text-gray-500">No movies found. Try a different search term.</div>
)}

export default App;
