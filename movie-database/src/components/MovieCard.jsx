const MovieCard = ({ movie, onClick }) => (
    <div onClick={() => onClick(movie.imdbID)} className="p-4 border cursor-pointer">
      <img src={movie.Poster} alt={movie.Title} className="w-full h-64 object-cover" />
      <h3 className="text-lg font-bold">{movie.Title}</h3>
      <p>{movie.Year}</p>
    </div>
  );
  
  export default MovieCard;
  