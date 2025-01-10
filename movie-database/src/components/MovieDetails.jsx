const MovieDetails = ({ movie }) => (
    <div className="p-4">
      <img src={movie.Poster} alt={movie.Title} className="w-full h-64 object-cover" />
      <h1 className="text-2xl font-bold">{movie.Title}</h1>
      <p><strong>Genre:</strong> {movie.Genre}</p>
      <p><strong>Plot:</strong> {movie.Plot}</p>
      <p><strong>Actors:</strong> {movie.Actors}</p>
      <p><strong>Ratings:</strong> {movie.imdbRating}</p>
    </div>
  );
  
  export default MovieDetails;
  