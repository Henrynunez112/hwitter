import React, { useState, useEffect } from "react";
import { apiURL } from "../Util/apiUrl";
import axios from "axios";
import { useRouteMatch } from "react-router-dom";

const SearchResult = () => {
  const [result, setResult] = useState([]);
  const [search, setSearch] = useState("")
  const match = useRouteMatch();
  const API = apiURL();

  useEffect(() => {
    const getResult = async (search) => {
        debugger
        let res = await axios.get(`${API}/search/${search}`);
        setResult(res.data.body)
        setSearch(search);
    };
    getResult(match.params.search)
  },[API]);

  return (<div>
      <h1> Search Results for #{search}</h1>
      {result.length === 0 ? <h1>Could not find anything on #{search}</h1> : <ul>
        {result.map((post) =>{
          return(
            <div>
              <li>
                <h3>{post.firstname}, {post.lastname}</h3>
                <p>{post.content}</p>
              </li>
            </div>
          )
        })}
        </ul>}
  </div>);
};
export default SearchResult;
