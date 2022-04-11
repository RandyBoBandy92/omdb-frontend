const cleanMovieData = (movies) => {
  // Removes movies with missing posters, duplicate imdbIds, or non-movie types
  const cleanedMovies = movies.filter((movie) => {
    return movie.Poster !== "N/A" && movie.Type === "movie";
  });
  const uniqueMovies = cleanedMovies.reduce((acc, current) => {
    const imdbId = current.imdbID;
    if (!acc.some((movie) => movie.imdbID === imdbId)) {
      acc.push(current);
    }
    return acc;
  }, []);
  return uniqueMovies;
};

export { cleanMovieData };
