import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import "../Css/SearchBar.css";

const SearchBar = () => {
  const history = useHistory();
  const [search, setSearch] = useState("");

  const handleSearch = (e) => {
    e.preventDefault();
    let newSearch = ""
    if (search.includes("#")) {
      newSearch += search.substring(1);
      debugger
      history.push(`/search/${newSearch}`);
    }else{
      debugger
      history.push(`/search/${search}`);
    }
    setSearch("");
  };

  return (
    <div className="input-group mb-3">
      <div className="input-group-prepend">
        <button
          className="btn btn-outline-secondary"
          type="button"
          onClick={handleSearch}
        >
          <img
            alt="search icon"
            src="https://img.icons8.com/metro/26/000000/search.png"
            id="searchIcon"
          />
        </button>
      </div>
      <form onSubmit={handleSearch}>
        <input
          type="text"
          className="form-control"
          placeholder="search for hashtags"
          aria-label=""
          required
          aria-describedby="basic-addon1"
          onChange={(e) => setSearch(e.target.value)}
          value={search}
        />
      </form>
    </div>
  );
};
export default SearchBar;
