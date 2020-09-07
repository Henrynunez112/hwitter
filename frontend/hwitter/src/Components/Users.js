import React, { useState, useEffect, useContext } from "react";
import { useHistory } from "react-router-dom";
import { AuthContext } from "../Providers/AuthProvider";
import { apiURL } from "../Util/apiUrl";
import axios from "axios";
import "../Css/Users.css";
import UserHweet from "./UserHweet";
import NoImg from '../Css/images/No_image_available.svg.png';


const Users = () => {
  const { token, currentUser } = useContext(AuthContext);
  const [posts, setPosts] = useState([]);
  const [users, setUser] = useState({});

  const [firstName, setFirstName] = useState("");

  const API = apiURL();
  const history = useHistory();

  const fetchPosts = async () => {
    let res = await axios({
      method: "GET",
      url: `${API}/hweets`,
      headers: {
        AuthToken: token,
      },
    });
    setPosts(res.data.body);
  };
  const fetchCurrentUser = async (id) => {
    let res = await axios({
      method: "GET",
      url: `${API}/users/${id}`,
      headers: {
        AuthToken: token,
      },
    });
    setUser(res.data.body);
    setFirstName(res.data.body.firstname);
  };

  useEffect(() => {
    fetchPosts();
    fetchCurrentUser(currentUser.uid);
  }, [API]);

  return (
    <div className="container-fluid usersPage">
      <div className="row justify-content-md-center headerContainer">
        <h1 id="welcomeTitle">Hello {firstName}!</h1>
        <h3 id="postTitle">Please Post your hweet below</h3>
      </div>
      <div className="row justify-content-md-center hweetContainer">
        <div className="col-4 justify-content-center userInfoDiv">
          <div className="row userInformation justify-content-center">
            <img
              alt="the users profile"
              className="img-thumbnail"
              id="profileImg"
              src={users.imgurl}
            />
          </div>
          <div className="row justify-content-center userProfileName">
            <h5 id="userProfileName">
              {users.firstname} {users.lastname}
            </h5>
          </div>
        </div>
        <div className="col-8 postsContainer">
          <div className="row userHweetDiv">
            <UserHweet fetchPosts={fetchPosts} />
          </div>
          {/* break */}
          <div className="row userHweetFeed">
            <div className="userHweetCard">
              <ul className="postUl">
                {posts.map((post) => {
                  if(post.imgurl === "undefined"){
                    post.imgurl = NoImg
                  }
                  return (
                    <div className="postLi container">
                      <li
                        key={post.id}
                        className="eachPost"
                        onClick={() => {
                          history.push(`/users/${post.hweets_id}`);
                        }}
                      >
                        <div className="col-1 userNameImg">
                          <div className="h5Container">
                            <h5 id="nameButton">
                              {post.firstname} {post.lastname}
                            </h5>
                          </div>
                          <div className="usersImgContainer">
                            <img
                              id="hweetsImg"
                              alt={post.firstname}
                              src={post.imgurl}
                            />
                          </div>
                        </div>
                        <div className="postPTag col">
                          <p id="postContent">{post.content}</p>
                        </div>
                      </li>
                    </div>
                  );
                })}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Users;
