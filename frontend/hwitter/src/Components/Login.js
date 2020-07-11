import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import Logo from "../Imgs/Twitter_Logo_WhiteOnImage.png";
import { logIn } from "../Util/firebaseFunction";
import "../Css/Login.css";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState(null);

  const history = useHistory();
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await logIn(email, password);
      //sign in with firebase then change route
      history.push("/");
    } catch (err) {
      console.log("YERRRRR", err);
      setError(err.message)
    }
  };
  const imgWandH = {
    //creating a size for the twitter bird
    width: "43.9px",
    height: "44.9px",
    position: "relative",
  };

  return (
    <div className="loginContainer">
      <div className="loginLogin">
        <img alt="twitter logo" src={Logo} style={imgWandH} />
      </div>
      <div className="loginHeader">
        <h4>Log In to Twitter</h4>
      </div>
      {error ? <div className="errorSignUp">{error}</div> : null}
      <div className="loginForm">
        <form onSubmit={handleSubmit}>
          <div className="loginNameContainer">
            <div className="nameLabel">
            <label className="loginName">Phone, email, or username</label>
            </div>
            <br></br>
            <input
              type="text"
              id="inputLoginName"
              onChange={(e) => setEmail(e.target.value)}
              value={email}
            />
          </div>
          <div className="loginPasswordContainer">
            <div className="passwordLabel">
            <label className="loginPassword">Password</label>
            </div>
            <br></br>
            <input
              type="password"
              id="inputLoginPassword"
              autoComplete="on"
              onChange={(e) => setPassword(e.target.value)}
              
              value={password}
            />
          </div>
          <div className="loginButtonPage">
            <input type="submit" value="Login" id="mainLoginButton" />
          </div>
        </form>
      </div>
    </div>
  );
};
export default Login;
