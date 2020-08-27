import React, { useContext, useState } from "react";
//in case I wanted to implement a custom hook
// import { useInput } from "../Util/useInput";
import axios from "axios";
import { apiURL } from "../Util/apiUrl";
import { AuthContext } from "../Providers/AuthProvider";
import "../Css/UserHweet.css";

const UserHweet = ({ fetchPosts }) => {
  const { token } = useContext(AuthContext);
  const { currentUser } = useContext(AuthContext);
  // let contentObj = useInput("");
  const [hweet, setHweet] = useState("");
  const API = apiURL();

  const findHashtags = async (postId, str) => {
    //this is the code that puts all hashtags into an array
    let hashtagArr = str.match(/#\S+/g);
    if (hashtagArr) {
      try {
        await axios({
          method: "POST",
          url: `${API}/hashtags`,
          headers: {
            AuthToken: token,
          },
          data: {
            post_id: postId,
            hweet_tags: hashtagArr,
          },
        });
      } catch (error) {
        console.log(error.message);
      }
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      let res = await axios({
        method: "POST",
        url: `${API}/hweets`,
        headers: {
          AuthToken: token,
        },
        data: {
          content: hweet,
        },
      });
      let postId = res.data.body.id;
      findHashtags(postId, hweet);
      fetchPosts();
      setHweet("");
    } catch (error) {
      console.log(error.message);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="formHweetContainer">
      <div className="form-group">
        <textarea
          placeholder="What's Happening?"
          className="form-control"
          value={hweet}
          onChange={(e) => {
            setHweet(e.currentTarget.value);
          }}
          maxLength={280}
          required
          id="inputHweet"
        />
      </div>
      <div className="form-group hweetSubmitButton">
        <input type="submit" value="Hweet" id="hweetSubmitButton" />
      </div>
    </form>
  );
};

export default UserHweet;
