import "./App.css";
import { searchMovies } from "./api/api";
import { useEffect, useRef, useState } from "react";
import Header from "./header/Header";
import Footer from "./footer/Footer";
import MoviesContainer from "./moviesContainer/MoviesContainer";

function App() {
  const [query, setQuery] = useState("");
  const [apiData, setApiData] = useState({});
  const page = useRef(1);
  const searchTimeoutId = useRef(false);

  useEffect(() => {
    // Want to delay the api call slightly so we aren't sending
    // a bajillion requests on every keystroke
    clearTimeout(searchTimeoutId.current);
    if (query) {
      page.current = 1;
      searchTimeoutId.current = setTimeout(() => {
        searchMovies(query, page.current).then((data) => {
          setApiData(data);
        });
      }, 400);
    } else {
      setApiData({});
    }
  }, [query]);

  const handleChange = (e) => {
    setQuery(e.target.value);
  };

  const viewMoreMovies = () => {
    // query remains the same, only the page number changes
    // so combining the two arrays together should be fine
    page.current++;
    searchMovies(query, page.current).then((data) => {
      if (data.Response === "True") {
        setApiData({
          ...apiData,
          Search: [...apiData.Search, ...data.Search],
        });
      }
    });
  };

  return (
    <div className="app">
      <Header setQuery={setQuery} query={query} handleChange={handleChange} />
      <main id="main">
        {apiData.Response === "True" && (
          <MoviesContainer viewMoreMovies={viewMoreMovies} apiData={apiData} />
        )}
        {apiData.Response === "False" && (
          <h2 className="error">No Movies Found!</h2>
        )}
      </main>
      <Footer />
    </div>
  );
}

export default App;
