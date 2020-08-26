import React, { useContext } from "react";
import { AuthContext } from "../Providers/AuthProvider";
import { NavLink } from "react-router-dom";
import Logo from "../Imgs/Twitter_Logo_WhiteOnImage.png";
import SearchBar from "../Components/SearchBar";
import { logOut } from "../Util/firebaseFunction";
import "../Css/NavBar.css";

export default function NavBar() {

  const { currentUser } = useContext(AuthContext);

  const buttonDisplay = () => {
    if (currentUser) {
      return (
        <>
          <li className="nav-item">
            <NavLink to={"/"}>
              <SearchBar />
            </NavLink>
          </li>
          <li className="nav-item">
            <div className="hweetButton">
              <NavLink
                exact
                to={"/users"}
                className="inactiveHweet"
                activeClassName="activeHweet"
              >
                Hweet Here
              </NavLink>
            </div>
          </li>
          <li className="nav-item">
            <div className="logoutButton">
              <button id="logoutBtn" onClick={logOut}>
                Log Out
              </button>
            </div>
          </li>
        </>
      );
    } else {
      return (
        <>
          <li className="nav-item">
            <div className="loginButton">
              <NavLink
                to={"/login"}
                className="inactiveLogin"
                activeClassName="activeLogin"
              >
                Log In
              </NavLink>
            </div>
          </li>
          <li className="nav-item" id="signUpId">
            <div className="signUpButton">
              <NavLink
                to={"/signup"}
                className="inactiveSignUp"
                activeClassName="activeSignUp"
              >
                Sign Up
              </NavLink>
            </div>
          </li>
        </>
      );
    }
  };
  const imgWandH = {
    width: "32px",
    height: "32px",
  };


  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
      <NavLink exact to={"/"} className="navbar-brand">
        <img alt="twitter logo" src={Logo} style={imgWandH} />
        <span id='brandTitle'>Hwitter</span>
      </NavLink>
      <button
        class="navbar-toggler"
        type="button"
        data-toggle="collapse"
        data-target="#navbarSupportedContent"
        aria-controls="navbarSupportedContent"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse justify-content-end" id="navbarSupportedContent">
        <ul className="navbar-nav justify-content-end">{buttonDisplay()}</ul>
      </div>
    </nav>
  );
}
