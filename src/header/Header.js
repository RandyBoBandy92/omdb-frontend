const Header = ({ query, handleChange }) => {
  return (
    <header>
      <h1>Movies</h1>
      <input
        placeholder="search for movies..."
        type="text"
        value={query}
        onChange={handleChange}
      />
    </header>
  );
};

export default Header;
