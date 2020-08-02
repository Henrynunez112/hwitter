import React, { useState, useEffect, useContext } from "react";
import { useHistory } from "react-router-dom";
import { apiURL } from "../Util/apiUrl";
import { AuthContext } from "../Providers/AuthProvider";
import axios from "axios";
import "../Css/Users.css";
import UserHweet from "./UserHweet";

const Users = () => {
  // const [users, setUsers] = useState([]);
  const [posts, setPosts] = useState([]);
  const API = apiURL();
  // const { currentUser } = useContext(AuthContext);
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
  const fetchPost = async () => {
    let res = await axios({
      method: "GET",
      url: `${API}/hweets`,
    });
    setPosts(res.data.payload);
  };

  useEffect(() => {
    // fetchUsers();
    fetchPost();
  }, [API]);
  return (
    <div className="userContainer">
      <div className="headerContainer">
        <h1>Welcome to Hwitter:</h1>
        <h3>Post your hweet below</h3>
      </div>
      <div className="hweetContainer">
        <UserHweet />
      </div>
      {/* <ul>
        {users.map((user) =>{
          return <li key={user.id}>{user.email}</li>
        })}
      </ul> */}
      <div className="postsContainer">
        <ul className="postUl">
          {posts.map((post) => {
            return (
              <div>
                <li key={post.id} className="eachPost" /*style={{width: "100%"}}*/ >
                  <button id="nameButton"
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
