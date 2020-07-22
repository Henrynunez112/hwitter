import React from "react";
import {useInput} from '../Util/useInput';
import axios from "axios";
import { apiURL } from "../Util/apiUrl";
const UserHweet = () => {
  let contentObj = useInput("")
  const API = apiURL();

  const handleSubmit = async (e) => {
      e.preventDefault();
      try {
          debugger;
          let res = await axios.post(`${API}/hweets`,{});
    } catch (error) {}
    // let newHweet = {
    //     userHweet: hweet.value
    // }
    // if(!post){
    //     setPost(newHweet);
    // }else{
    //     setPost(hweet => [...hweet, newHweet]);
    // }
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input type="text" placeholder="What's Happening?" value={hweet} onChange={(e) =>{setHweet(e.currentTarget.value)}}/>
        <input type="submit" value="tweet" />
      </form>
    </div>
  );
};

export default UserHweet;
