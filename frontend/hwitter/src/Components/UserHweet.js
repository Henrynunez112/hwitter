import React, { useContext } from "react";
import { useInput } from "../Util/useInput";
import axios from "axios";
import {useHistory} from "react-router-dom";
import { apiURL } from "../Util/apiUrl";
import { AuthContext } from "../Providers/AuthProvider";
import "../Css/UserHweet.css";

const UserHweet = ({fetchPosts}) => {
  const { token } = useContext(AuthContext);
  let contentObj = useInput("");
  const API = apiURL();
  const history = useHistory();

  const findHashtags = async (str) =>{
    //this is the code that puts all hashtags into an array
    let hashtagArr = str.match(/#\S+/g);
    
    try{
      await axios({
        method: "POST",
        url: `${API}/hashtags`,
        headers: {
          AuthToken: token
        },
        data:{
          hweet_tags: hashtagArr
        }
      })

    }catch(error){
      console.log(error.message)
    }

  }

  const handleSubmit = async (e) => {
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
      findHashtags(contentObj.value);
      fetchPosts();

    } catch (error) {
      console.log(error.message);
    }
  };

  return (
      <form onSubmit={handleSubmit} className="HweetContainer">
        <textarea
          rows="5"
          cols="20"
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
