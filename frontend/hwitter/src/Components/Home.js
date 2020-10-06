import React, { useState, useEffect } from "react";
import axios from "axios";
import "../Css/Home.css";

const Home = () => {
  const [trending, setTrending] = useState([]);

  const onLoad = async () => {
    axios({
      method: "GET",
      url: "https://bing-news-search1.p.rapidapi.com/news/trendingtopics",
      headers: {
        "content-type": "application/octet-stream",
        "x-rapidapi-host": "bing-news-search1.p.rapidapi.com",
        "x-rapidapi-key": "e07ee1c4ecmshb681c99319fb298p15e577jsne5beb7bbfb44",
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
      <div key={news.webSearchUrl} className="trendingNews">
        <a href={news.newsSearchUrl}>
          <li key={news.id} className="newsLi">
            <img
              alt="images of the news"
              src={news.image.url}
              className="newsImg"
            />
            <h4 key={news.id} className="newsHeader">
              {news.name}
            </h4>
            <p className="queryHeader">{news.query.text}</p>
          </li>
        </a>
      </div>
    );
  });
  return (
    <div className="homeComponent container">
      <div className="hwitterHomeHeader jumbotron">
        <h1 id="hwitterHeader">Welcome to Hwitter</h1>
          <h3 id="trendingHeader">Trending News</h3>
      </div>
      <div className="trendingNewsDiv">
        <div className="trendingNewsCard">
          <ul className="trendingUl">{trendingNews}</ul>
        </div>
      </div>
    </div>
  );
};
export default Home;
