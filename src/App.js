import "./App.css";
import { searchMovies } from "./api/api";
import { useEffect, useRef, useState } from "react";

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
            setMovies(data.Search);
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
      <h1>Search Movies</h1>
      <input type="text" value={query} onChange={handleChange} />
    </div>
  );
}

export default App;
