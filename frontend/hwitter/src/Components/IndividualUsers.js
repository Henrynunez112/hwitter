import React, {useState, useEffect} from 'react';
import {apiURL} from "../Util/apiUrl"
import axios from "axios";
import {useRouteMatch} from 'react-router-dom';

const IndividualUsers = () =>{
    const [email, setEmail] = useState("");
    const [firstname, setFirstname] = useState("");
    const [lastname, setLastname] = useState("");
    const [posts, setPost] = useState([])


    const match = useRouteMatch();
    const API = apiURL();


    useEffect(()=>{
        const getUser = async (id) =>{
            let res = await axios.get(`${API}/users/${id}`);
            debugger
            setEmail(res.data.body.email);
            setFirstname(res.data.body.firstname);
            setLastname(res.data.body.lastname);
        }
        const userHweet = async (id) =>{
            debugger
            let res = await axios.get(`${API}/hweets/${id}`);
            setPost(res.data.body);
        }

        getUser(match.params.id)
        userHweet(match.params.id)

    },[])
    return(
        <div>
            <h1>{firstname}, {lastname}</h1>
            <h3>{email}</h3>

            <ul>
            {posts.map((post)=>{
             return(
                 <li>{post.content}</li>
             )
            })}
            </ul>
        </div>
    )

}

export default IndividualUsers;

