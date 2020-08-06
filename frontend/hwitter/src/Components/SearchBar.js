import React, { useState, useEffect, useContext } from "react";
import axios from "axios";
import { AuthContext } from "../Providers/AuthProvider";
import { apiURL } from "../Util/apiUrl";
import "../Css/SearchBar.css";

const SearchBar = () => {
  const [results, setResults] = useState([]);
  const [search, setSearch] = useState(null);

  const API = apiURL();
  const { token } = useContext(AuthContext);



  const fetchUniqueHashtags = async () => {
    let res = await axios({
      method: "GET",
      url: `${API}/hashtags/all`,
      headers: {
        AuthToken: token,
      },
    });
    setResults(res.data.body);
  };

  useEffect(() => {
    fetchUniqueHashtags();
  }, [API]);

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
        {/* {fetchResults} */}
      </div>
    </div>
  );
};
export default SearchBar;
