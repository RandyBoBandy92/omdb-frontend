import Movie from "../movie/Movie";
import { cleanMovieData } from "../utilities/toolbelt";

const MoviesContainer = ({ apiData, viewMoreMovies }) => {
  if (apiData.Search.length > 0) {
    const searchResults = cleanMovieData(apiData.Search);
    return (
      <>
        <ul className="movies-results">
          {searchResults.map((movieData, index) => (
            <Movie key={movieData.imdbID} movieData={movieData} />
          ))}
        </ul>
        {apiData.totalResults > apiData.Search.length && (
          <button onClick={viewMoreMovies} className="view-more">
            View More
          </button>
        )}
      </>
    );
  }
};

export default MoviesContainer;
