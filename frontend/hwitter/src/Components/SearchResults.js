import React, { useState, useEffect } from "react";
import { apiURL } from "../Util/apiUrl";
import axios from "axios";
import { useRouteMatch } from "react-router-dom";
import "../Css/SearchResults.css";

const SearchResult = () => {
  const [result, setResult] = useState([]);
  const [search, setSearch] = useState("");
  const match = useRouteMatch();
  const API = apiURL();

  useEffect(() => {
    const getResult = async (search) => {
      debugger;
      let res = await axios.get(`${API}/search/${search}`);
      setResult(res.data.body);
      setSearch(search);
    };
    getResult(match.params.search);
  }, [API]);

  return (
    <div className="searchResultsContainer">
      <div className="searchHeader">
      <h1 id="searchH1"> Search Results for #{search}</h1>
      </div>
      <div className="resultContainer">
      {result.length === 0 ? (
        <h1>Could not find anything on #{search}</h1>
      ) : (
        <ul className="resultUl">
          {result.map((post) => {
            return (
              <div className="resultLiContainer">
                <li id="resultLi">
                  <div className="resultNameDiv">
                  <h3 id="resultName">
                    {post.firstname}, {post.lastname}
                  </h3>
                  </div>
                  <p id="resultPost">{post.content}</p>
                </li>
              </div>
            );
          })}
        </ul>
      )}
      </div>
    </div>
  );
};
export default SearchResult;
