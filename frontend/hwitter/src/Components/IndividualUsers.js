import React, {useState, useEffect} from 'react';
import {apiURL} from "../Util/apiUrl"
import axios from "axios";
import {useRouteMatch} from 'react-router-dom';
import "../Css/IndividualUsers.css"

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
            setEmail(res.data.body.email);
            setFirstname(res.data.body.firstname);
            setLastname(res.data.body.lastname);
        }
        const userHweet = async (id) =>{
            let res = await axios.get(`${API}/hweets/${id}`);
            setPost(res.data.body);
        }

        getUser(match.params.id)
        userHweet(match.params.id)

    },[])
    return(
        <div className="individualUsersContainer">
            <div className="individualHeader">
            <h1 id="individualName">{firstname}, {lastname}</h1>
            <h3 id="individualEmail">{email}</h3>
            </div>
            <div className="individualPostContainter">
            <ul className="individualUl">
            {posts.map((post)=>{
             return(
                 <div className="individualLiContainer">
                 <li className="individualLi">{post.content}</li>
                 </div>
             )
            })}
            </ul>
            </div>
        </div>
    )

}

export default IndividualUsers;

