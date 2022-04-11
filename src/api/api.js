const searchMovies = async (query, page) => {
  const url = `https://backend-omdb.herokuapp.com/search/${query}/${page}`;
  const response = await fetch(url);
  const data = await response.json();
  return data;
};

export { searchMovies };
