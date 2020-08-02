import React, { useContext } from "react";
import { useInput } from "../Util/useInput";
import axios from "axios";
import { apiURL } from "../Util/apiUrl";
import { AuthContext } from "../Providers/AuthProvider";
import "../Css/UserHweet.css";

const UserHweet = () => {
  const { token } = useContext(AuthContext);
  let contentObj = useInput("");
  const API = apiURL();

  const handleSubmit = async (e) => {
    debugger;
    e.preventDefault();

    try {
      await axios({
        method: "POST",
        url: `${API}/hweets`,
        headers: {
          AuthToken: token,
        },
        data: {
          content: contentObj.value,
        },
      });
    } catch (error) {
      console.log(error.message);
    }
  };

  return (
      <form onSubmit={handleSubmit} className="HweetContainer">
        <input
          type="text"
          placeholder="What's Happening?"
          name="content"
          {...contentObj}
          maxLength={280}
          required
          id="inputHweet"
        />
        <input type="submit" value="Hweet" id="hweetButton" />
      </form>
  );
};

export default UserHweet;
