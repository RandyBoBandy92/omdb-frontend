import "./App.css";
import { searchMovies } from "./api/api";
import { useEffect, useRef, useState } from "react";
import Header from "./header/Header";
import Footer from "./footer/Footer";
import MoviesContainer from "./moviesContainer/MoviesContainer";
import { cleanMovieData } from "./utilities/toolbelt";

function App() {
  const [query, setQuery] = useState("");
  const [movies, setMovies] = useState([]);
  const [page, setPage] = useState(2);
  const searchTimeoutId = useRef(false);

  useEffect(() => {
    clearTimeout(searchTimeoutId.current);
    if (query) {
      searchTimeoutId.current = setTimeout(() => {
        searchMovies(query, page).then((data) => {
          if (data.Response === "True") {
            setMovies(cleanMovieData(data.Search));
          } else {
            setMovies([]);
          }
          console.log(data);
        });
      }, 400);
    }
  }, [query]);

  const handleChange = (e) => {
    setQuery(e.target.value);
  };

  return (
    <div className="app">
      <Header query={query} handleChange={handleChange} />
      <main>
        <MoviesContainer movies={movies} />
      </main>
      <Footer />
    </div>
  );
}

export default App;
