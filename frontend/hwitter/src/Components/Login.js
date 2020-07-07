import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import Logo from "../Imgs/Twitter_Logo_WhiteOnImage.png";
import { logIn } from "../Util/firebaseFunction";
import "../Css/Login.css";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");


  const history = useHistory();
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await logIn(email, password);

      //sign in with firebase then change route
      history.push("/");
    } catch (err) {
      console.log("YERRRRR", err)
    }
  };
  const imgWandH = {
    //creating a size for the twitter bird
    width: "43.9px",
    height: "44.9px",
    position: "relative"
  };

  return (
    <div className="loginContainer">
      <div className="loginLogin">
      <img alt="twitter logo" src={Logo} style={imgWandH} />
      </div>
      <div className="loginHeader">
      <h1 className="loginHeader">Log In to Twitter</h1>
      </div>
      <div className="loginForm">
      <form onSubmit={handleSubmit}>
        <label for="loginName">Phone, email, or username</label>
        <br></br>
        <input
          type="text"
          onChange={(e) => setEmail(e.target.value)}
          placeholder="Email"
          value={email}
        />
        <br></br>
        <label for="loginPassword">Password</label>
        <br></br>
        <input
          type="password"
          onChange={(e) => setPassword(e.target.value)}
          placeholder="Password"
          value={password}
        />
        <div className="loginButtonPage">
        <input type="submit" value="Login" />
        </div>
      </form>
      </div>
    </div>
  );
};
export default Login;
