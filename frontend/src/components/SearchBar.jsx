import { useState } from "react";
import { useNavigate } from "react-router-dom";

const SearchBar = () => {
  const [search, setSearch] = useState("");
  const navigate = useNavigate();

const handleSearch = (e) => {
  e.preventDefault();

  const query = search.trim();

  console.log("SEARCH QUERY:", query);

  if (!query) return;

  navigate(`/search?q=${encodeURIComponent(query)}`);
};

  return (
    <form className="search-wrapper" onSubmit={handleSearch}>
      <input
        type="text"
        className="form-control search-input"
        placeholder="Search products..."
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      />

      <button type="submit" className="search-btn">
        Search
      </button>
    </form>
  );
};

export default SearchBar;