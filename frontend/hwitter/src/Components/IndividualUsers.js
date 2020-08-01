import React, {useState, useEffect} from 'react';
import {apiURL} from "../Util/apiUrl"
import axios from "axios";
import {useHistory, useRouteMatch} from 'react-router-dom';

const IndividualUsers = () =>{
    const [email, setEmail] = useState("");
    const [firstname, setFirstname] = useState("");
    const [lastname, setLastname] = useState("");
    const [imgUrl, setImgUrl] = useState("")


    const match = useRouteMatch();
    const API = apiURL();


    useEffect(()=>{
        const getUser = async (id) =>{
            let res = await axios.get(`${API}/users/${id}`);
            setEmail(res.data.body.email);
            setFirstname(res.data.body.firstname);
            setLastname(res.data.body.lastname);
            setImgUrl(res.data.body.imgurl);
        }

        getUser(match.params.id)

    },[])
    return(
        <div>
            <h1>{firstname}</h1>
            <img src={imgUrl}/>
        </div>
    )

}

export default IndividualUsers;

