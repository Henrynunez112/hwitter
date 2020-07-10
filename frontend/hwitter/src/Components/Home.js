import React, { useState, useEffect } from "react";
import axios from "axios";
const { API_KEY } = process.env;

const Home = () => {
    const [trending, setTrending] = useState([])

  const onLoad =async () => {
      debugger
      axios({
        "method":"GET",
        "url":"https://bing-news-search1.p.rapidapi.com/news/trendingtopics",
        "headers":{
        "content-type":"application/octet-stream",
        "x-rapidapi-host":"bing-news-search1.p.rapidapi.com",
        "x-rapidapi-key":"e07ee1c4ecmshb681c99319fb298p15e577jsne5beb7bbfb44",
        "x-bingapis-sdk":"true",
        "useQueryString":true
        },"params":{
        "textFormat":"Raw",
        "safeSearch":"Off"
        }
        })
        .then((res)=>{
          console.log(res.data.value);
        })
        .catch((error)=>{
          console.log(error)
        })
    
  };
  useEffect(()=>{
    onLoad()
  },[])
  return (
    <div>
      <h1>This is the home component</h1>
    </div>
  );
};
export default Home;
