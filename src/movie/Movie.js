const Movie = ({ movieData }) => {
  return (
    <li className="movie">
      <img src={movieData.Poster} alt={movieData.Title} />
      <div className="movie-details">
        <h2>{movieData.Title}</h2>
        <p>{movieData.Year}</p>
        <button className="more-info">More Info</button>
      </div>
    </li>
  );
};

export default Movie;
