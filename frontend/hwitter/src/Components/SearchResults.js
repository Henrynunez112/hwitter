import React, { useEffect } from "react";
import { apiURL } from "../Util/apiUrl";
import axios from "axios";
import { useRouteMatch } from "react-router-dom";

const SearchResult = () => {
  const match = useRouteMatch();
  const API = apiURL();

  useEffect(() => {
    const getResult = async (search) => {
        debugger
        let res = await axios.get(`${API}/hashtags/search/#${search}`)
    };
    getResult(match.params.search)
  },[]);

  return <div>this is a search result</div>;
};
export default SearchResult;
