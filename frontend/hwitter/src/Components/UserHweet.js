import React, {useState} from 'react';
import axios from "axios";
import {apiURL} from "../Util/apiUrl";
const UserHweet = () =>{
    const [hweet, setHweet] = useState("");
    const API = apiURL();

    const userPost = () =>{

    }


    return(
        <div>
            <form onSubmit={}>
                <input type="text" placeholder="What's Happening?"/>
                <input type="submit" value="tweet"/>
            </form>
        </div>
    )

};

export default UserHweet;