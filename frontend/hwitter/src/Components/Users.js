import React, { useState, useEffect, useContext } from "react";
import { useHistory } from "react-router-dom";
import { AuthContext } from "../Providers/AuthProvider";
import { apiURL } from "../Util/apiUrl";
import axios from "axios";
import "../Css/Users.css";
import UserHweet from "./UserHweet";

const Users = () => {
  const [posts, setPosts] = useState([]);
  const API = apiURL();
  const { token } = useContext(AuthContext);
  const history = useHistory();

  // const fetchUsers = async () => {
  //   let res = await axios({
  //     method: "GET",
  //     url: `${API}/users`,
  //     headers: {
  //       AuthToken: token,
  //     },
  //   });
  //   setUsers(res.data.users);
  // };
  const fetchPosts = async () => {
    let res = await axios({
      method: "GET",
      url: `${API}/hweets`,
      headers: {
        AuthToken: token,
      },
    });
    setPosts(res.data.payload);
  };

  useEffect(() => {
    fetchPosts();
  }, [API]);
  return (
    <div className="userContainer">
      <div className="headerContainer">
        <h1>Welcome to Hwitter:</h1>
        <h3>Post your hweet below</h3>
      </div>
      <div className="hweetContainer">
        <UserHweet fetchPosts={fetchPosts} />
      </div>
      <div className="postsContainer">
        <ul className="postUl">
          {posts.map((post) => {
            return (
              <div>
                <li
                  key={post.id}
                  className="eachPost" /*style={{width: "100%"}}*/
                >
                  <button
                    id="nameButton"
                    onClick={() => {
                      history.push(`/users/${post.author_id}`);
                    }}
                  >
                    {post.firstname} {post.lastname}
                  </button>
                  <p>{post.content}</p>
                </li>
              </div>
            );
          })}
        </ul>
      </div>
    </div>
  );
};
export default Users;
