import React, { useState, useEffect } from "react";
import { useHistory } from "react-router-dom";
import { apiURL } from "../Util/apiUrl";
import axios from "axios";
import { useRouteMatch } from "react-router-dom";
import "../Css/SearchResults.css";

const SearchResult = () => {
  const [result, setResult] = useState([]);
  const [search, setSearch] = useState("");
  const match = useRouteMatch();
  const API = apiURL();
  const history = useHistory();

  useEffect(() => {
    const getResult = async (search) => {
      let res = await axios.get(`${API}/search/${search}`);
      setResult(res.data.body);
      setSearch(search);
    };
    getResult(match.params.search);
  }, [API, match.params.search]);

  return (
    <div className="searchResultsContainer container">
      <div className="row searchHeader">
        <h1 id="searchH1"> Search Results for #{search}</h1>
      </div>
      <div className="row resultContainer">
        {result.length === 0 ? (
          <h1 id="noResult">Could not find anything on #{search}</h1>
        ) : (
          <ul className="resultUl">
            {result.map((post) => {
              return (
                <div className="resultLiContainer">
                  <li
                    id="resultLi"
                    onClick={() => {
                      history.push(`/users/${post.hweets_id}`);
                    }}
                  >
                    <div className="resultNameDiv">
                      <h3 id="resultName">
                        {post.firstname}, {post.lastname}
                      </h3>
                    </div>
                    <div className="resultPostDiv justify-content-center">
                      <p id="resultPost">{post.content}</p>
                    </div>
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
