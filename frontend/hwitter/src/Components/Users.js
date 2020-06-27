import React, { useState, useEffect } from "react";
import {apiURL} from "../Util/apiUrl";
import axios from "axios";
import "../Css/Users.css";

const Users = () => {
  const [users, setUsers] = useState([]);
  const API = apiURL()

  useEffect(() => {
      const fetchUsers = async () => {
          let res = await axios({
              method: "get",
              url: `${API}/api/users`,
            });
            setUsers(res.data.users);
    };
    fetchUsers();
  }, [API]);
  return (
    <div className="userContainer">
      <h1>All Users, you are seeing this if you are logged in</h1>
      <ul>
          {users.map(user =>{
              return <li key={user.id}>{user.email}</li>
          })}
      </ul>

    </div>
  );
};
export default Users;
