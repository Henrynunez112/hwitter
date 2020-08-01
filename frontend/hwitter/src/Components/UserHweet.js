import React, { useContext } from "react";
import { useInput } from "../Util/useInput";
import axios from "axios";
import { apiURL } from "../Util/apiUrl";
import { AuthContext } from "../Providers/AuthProvider";

const UserHweet = () => {
  const { token } = useContext(AuthContext);
  let contentObj = useInput("");
  const API = apiURL();

  const handleSubmit = async (e) => {
    debugger
    e.preventDefault();
    try {
      await axios.post(`${API}/hweets`, {
        headers: {
          AuthToken: token,
        },
        content: contentObj.value,
      });
      
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="What's Happening?"
          name="content"
          {...contentObj}
          maxLength={280}
        />
        <input type="submit" value="tweet" />
      </form>
    </div>
  );
};

export default UserHweet;
