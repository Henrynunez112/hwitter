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
      history.push("/users");
    } catch (err) {
      console.log("YERRRRR", err);
      setError(err.message);
    }
  };

  const guestLogin = async () => {
    debugger;
    try {
      await logIn("batman09@gmail.com", "admin123");
      history.push("/users");
    } catch (err) {
      console.log(err);
      setError(err.message);
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
        <h4>Log In to Hwitter</h4>
      </div>
      {error ? <div className="errorSignUp">{error}</div> : null}
      <div className="loginForm">
        <div class="jumbotron loginJumbotron">
          <form onSubmit={handleSubmit}>
            <div className="form-group">
              <label for="exampleInputEmail1" className="loginLabel">
                Email address
              </label>
              <input
                type="email"
                className="form-control"
                id="exampleInputEmail1"
                aria-describedby="emailHelp"
                placeholder="Enter email"
                onChange={(e) => setEmail(e.target.value)}
                value={email}
              />
              <small id="emailHelp" className="form-text text-muted">
                We'll never share your email with anyone else.
              </small>
            </div>
            <div className="form-group">
              <label for="exampleInputPassword1" className="loginLabel">
                Password
              </label>
              <input
                type="password"
                className="form-control"
                id="exampleInputPassword1"
                placeholder="Password"
                autoComplete="on"
                onChange={(e) => setPassword(e.target.value)}
                value={password}
              />
            </div>
            <div className="row buttonLogin">
              <button type="submit" className="btn btn-primary loginBtn">
                Login
              </button>
              <button
                type="button"
                className="btn btn-primary loginBtn"
                onClick={guestLogin}
              >
                Guest Login
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};
export default Login;
