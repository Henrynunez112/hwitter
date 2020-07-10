import React, { useState, useEffect } from "react";
import axios from "axios";
const { API_KEY } = process.env;

const Home = () => {
  const [trending, setTrending] = useState([]);

  const onLoad = async () => {
    axios({
      method: "GET",
      url: "https://bing-news-search1.p.rapidapi.com/news/trendingtopics",
      headers: {
        "content-type": "application/octet-stream",
        "x-rapidapi-host": "bing-news-search1.p.rapidapi.com",
        "x-rapidapi-key": API_KEY,
        "x-bingapis-sdk": "true",
        useQueryString: true,
      },
      params: {
        textFormat: "Raw",
        safeSearch: "Off",
        count: "10",
      },
    })
      .then((res) => {
        //   console.log(res.data.value);
        setTrending(res.data.value);
        debugger;
      })
      .catch((error) => {
        console.log(error);
      });
  };
  useEffect(() => {
    onLoad();
  }, []);

  const trendingNews = trending.map((news) => {
    return (
      <div key={news.id}>
        <li key={news.id}>
          <img src={news.image.url} />
          <h4 key={news.id}>{news.name}</h4>
          <p>{news.query.text}</p>
        </li>
      </div>
    );
  });
  return (
    <div>
      <h1>This is the home component</h1>
      {trendingNews}
    </div>
  );
};
export default Home;
