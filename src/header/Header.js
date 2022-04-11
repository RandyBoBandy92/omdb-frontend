const Header = ({ query, setQuery, handleChange }) => {
  return (
    <header>
      <h1>Movies</h1>
      <div className="search">
        <input
          placeholder="search for movies..."
          type="text"
          value={query}
          onChange={handleChange}
        />
        <button
          onClick={() => setQuery("")}
          className={`clear ${query ? "active" : ""}`}
        >
          X
        </button>
      </div>
    </header>
  );
};

export default Header;
