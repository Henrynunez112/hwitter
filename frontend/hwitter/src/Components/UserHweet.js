import React, { useContext } from "react";
import { useInput } from "../Util/useInput";
import axios from "axios";
import { apiURL } from "../Util/apiUrl";
import { AuthContext } from "../Providers/AuthProvider";

const UserHweet = () => {
  const { currentUser } = useContext(AuthContext);
  let contentObj = useInput("");
  const API = apiURL();

  const handleSubmit = async (e) => {
    debugger
    e.preventDefault();
    try {
      debugger;
      await axios.post(`${API}/hweets`, {
        hweets_id: currentUser.uid,
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
