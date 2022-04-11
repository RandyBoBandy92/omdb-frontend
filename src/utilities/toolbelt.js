const cleanMovieData = (movies) => {
  return movies.filter((movie) => {
    return movie.Poster !== "N/A";
  });
};

export { cleanMovieData };
