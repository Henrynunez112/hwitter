import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import "../Css/SearchBar.css";

const SearchBar = () => {
  const history = useHistory();
  const [search, setSearch] = useState("");

  const handleSearch = (e) =>{
    e.preventDefault();
    history.push(`search/${search}`)
    setSearch("")
  }



  return (
    <div className="formContainer">
      <form onSubmit={handleSearch} className="formSearch">
        <button type="submit" className="searchButton" onClick={handleSearch}>
          <img
            alt="search icon"
            src="https://img.icons8.com/metro/26/000000/search.png"
            id="searchIcon"
          />
        </button>
        <input
          className="searchInput"
          type="text"
          placeholder="Search where the hashtag was used (no need for the #)"
          onChange={(e) => setSearch(e.target.value)}
          value={search}
        />
      </form>
    </div>
  );
};
export default SearchBar;
