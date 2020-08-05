import React from 'react';
import "../Css/SearchBar.css"

const SearchBar = () =>{
    return (
        <div className="formContainer">
                <div className="searchBar">
                  <button type="submit" className="searchButton">
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
                  />
                </div>
              </div>
    )

}
export default SearchBar;