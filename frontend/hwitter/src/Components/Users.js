import React, { useState, useEffect, useContext } from "react";
import { apiURL } from "../Util/apiUrl";
import { AuthContext } from "../Providers/AuthProvider";
import axios from "axios";
import "../Css/Users.css";
import UserHweet from "./UserHweet";

const Users = () => {
  const [users, setUsers] = useState([]);
  const [posts, setPosts] = useState([]);
  const API = apiURL();
  const { token } = useContext(AuthContext);

  const fetchUsers = async () => {
    debugger;
    let res = await axios({
      method: "GET",
      url: `${API}/users`,
      headers: {
        AuthToken: token,
      },
    });
    setUsers(res.data.users);
  };
  const fetchPost = async () => {
    let res = await axios({
      method: "GET",
      url: `${API}/hweets`,
    });
    setPosts(res.data.body);
  };

  useEffect(() => {
    fetchUsers();
    fetchPost();
  }, [API]);
  return (
    <div className="userContainer">
      <h1>All Users, you are seeing this if you are logged in</h1>
      <div>
        <UserHweet />
      </div>
      <ul>
        {users.map((user) => {
          return <li key={user.id}>{user.email}</li>;
        })}
      </ul>
      <ul>
        {posts.map((post) => {
          return <li key={post.id}>{post.content}</li>;
        })}
      </ul>
    </div>
  );
};
export default Users;
