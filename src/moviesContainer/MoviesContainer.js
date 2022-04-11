import Movie from "../movie/Movie";

const MoviesContainer = ({ movies }) => {
  if (movies.length > 0) {
    return (
      <ul className="movies-results">
        {movies.map((movieData, index) => (
          <Movie key={index} movieData={movieData} />
        ))}
      </ul>
    );
  }
};

export default MoviesContainer;
