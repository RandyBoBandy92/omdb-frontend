import Movie from "../movie/Movie";

const MoviesContainer = ({ movies }) => {
  if (movies.length > 0) {
    return (
      <div className="movies-container">
        {movies.map((movieData) => (
          <Movie key={movieData.imdbID} movieData={movieData} />
        ))}
      </div>
    );
  }
};

export default MoviesContainer;
