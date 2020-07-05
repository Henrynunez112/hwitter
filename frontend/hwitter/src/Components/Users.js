import React, { useState, useEffect, useContext } from "react";
import {apiURL} from "../Util/apiUrl";
import {AuthContext} from '../Providers/AuthProvider'
import axios from "axios";
import "../Css/Users.css";

const Users = () => {
  const [users, setUsers] = useState([]);
  const API = apiURL();
  const {token} = useContext(AuthContext)

  useEffect(() => {
    debugger
    const fetchUsers = async () => {
      let res = await axios({
          method: "get",
          url: `${API}/api/users`,
          headers: {
            "AuthToken": token
          }
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
