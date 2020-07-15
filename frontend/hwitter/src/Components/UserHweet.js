import React, { useState } from "react";
import axios from "axios";
// import { useInput } from "../Components/CustomHook/CustomHook";
import { apiURL } from "../Util/apiUrl";
const UserHweet = () => {
  const [hweet, setHweet] = useState("");
  const API = apiURL();

  const handleSubmit = async (e) => {
      e.preventDefault();
      try {
          debugger;
          let res = await axios.post(`${API}/api/hweets`, {});
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
