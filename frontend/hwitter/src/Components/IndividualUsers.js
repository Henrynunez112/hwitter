import React, { useState, useEffect, useContext } from "react";
import { apiURL } from "../Util/apiUrl";
import axios from "axios";
import { useRouteMatch } from "react-router-dom";
import "../Css/IndividualUsers.css";
import { AuthContext } from "../Providers/AuthProvider";
import NoImg from "../Css/images/No_image_available.svg.png";
import moment from 'moment';

const IndividualUsers = () => {
  const { token } = useContext(AuthContext);
  const [email, setEmail] = useState("");
  const [firstname, setFirstname] = useState("");
  const [lastname, setLastname] = useState("");
  const [image, setImage] = useState("");
  const [posts, setPost] = useState([]);

  const match = useRouteMatch();
  const API = apiURL();

  useEffect(() => {
    const getUser = async (id) => {
      let res = await axios({
        method: "GET",
        url: `${API}/users/${id}`,
        headers: {
          Authtoken: token,
        },
      });
      setEmail(res.data.body.email);
      setFirstname(res.data.body.firstname);
      setLastname(res.data.body.lastname);
      if (res.data.body.imgurl === "undefined") {
        setImage(NoImg);
      } else {
        setImage(res.data.body.imgurl);
      }
    };
    const userHweet = async (id) => {
      let res = await axios({
        method: "GET",
        url: `${API}/hweets/${id}`,
        headers: {
          AuthToken: token,
        },
      });
      debugger;
      setPost(res.data.body);
    };

    getUser(match.params.id);
    userHweet(match.params.id);
  }, []);
  return (
    <div className="individualUsersContainer container-fluid">
      <div className="col individualHeader">
        <div className="row individualTitle">
          <h1 id="individualName">
            {firstname} {lastname}
          </h1>
          <h3 id="individualEmail">{email}</h3>
        </div>
        <div className="row individualImgDiv">
          <img
            src={image}
            id="individualImg"
            /*className="img-fluid"*/ alt={`${firstname}'s profile`}
          />
        </div>
      </div>
      <div className="col individualPostContainter justify-content-center">
        <div className="individualUlDiv">
          <ul className="individualUl">
            {posts.map((post) => {
              return (
                <div className="individualLiContainer">
                  <li className="individualLi">
                    <p>{post.content}</p>
                    <p>{moment(post.time_stamp).calendar()}</p>
                  </li>
                </div>
              );
            })}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default IndividualUsers;
