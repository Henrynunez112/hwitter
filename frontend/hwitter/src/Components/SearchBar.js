import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import "../Css/SearchBar.css";

const SearchBar = () => {
  const history = useHistory();
  const [search, setSearch] = useState("");

  const handleSubmit = async (e) => {
    debugger;
    e.preventDefault();
    history.push(`/hashtags/${search}`);
  };

  return (
    <div className="formContainer">
      <div className="searchBar">
        <form onSubmit={handleSubmit}>
        <button type="submit" className="searchButton" onClick={handleSubmit}>
          <img
            alt="search icon"
            src="https://img.icons8.com/metro/26/000000/search.png"
            id="searchIcon"
          />
        </button>
        <input
          className="searchInput"
          type="text"
          placeholder="Search Twitter"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />
        </form>
      </div>
    </div>
  );
};
export default SearchBar;
