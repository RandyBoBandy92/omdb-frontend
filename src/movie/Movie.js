const Movie = ({ movieData }) => {
  return (
    <div className="movie">
      <img src={movieData.Poster} alt={movieData.Title} />
    </div>
  );
};

export default Movie;
