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
          <li className="nav-item" id="searchBarLi">
            <SearchBar />
          </li>
          <NavLink
            exact
            to={"/hweet"}
            className="inactiveHweet"
            activeClassName="activeHweet"
          >
            <li className="nav-item" id="hweetBtn">
              <div className="hweetButton">Hweet Here</div>
            </li>
          </NavLink>
          <a id="logoutBtn" onClick={logOut}>
            <li className="nav-item" id="logOutBtnLi">
              <div className="logoutButton">Log Out</div>
            </li>
          </a>
        </>
      );
    } else {
      return (
        <>
          <NavLink
            to={"/"}
            className="inactiveLogin"
            activeClassName="activeLogin"
          >
            <li className="nav-item" id="loginId">
              <div className="loginButton">Log In</div>
            </li>
          </NavLink>
          <NavLink
            exact
            to={"/signup"}
            className="inactiveSignUp"
            activeClassName="activeSignUp"
          >
            <li className="nav-item" id="signUpId">
              <div className="signUpButton">Sign Up</div>
            </li>
          </NavLink>
        </>
      );
    }
  };
  const imgWandH = {
    width: "32px",
    height: "32px",
  };

  return (
    <nav className="navbar navbar-expand-lg sticky-top navbar-light bg-light">
      <NavLink exact to={"/users"} className="navbar-brand">
        <img alt="twitter logo" src={Logo} style={imgWandH} />
        <span id="brandTitle">Hwitter</span>
      </NavLink>
      <button
        className="navbar-toggler"
        type="button"
        data-toggle="collapse"
        data-target="#navbarSupportedContent"
        aria-controls="navbarSupportedContent"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span className="navbar-toggler-icon"></span>
      </button>
      <div
        className="collapse navbar-collapse justify-content-end"
        id="navbarSupportedContent"
      >
        <ul className="navbar-nav justify-content-end">{buttonDisplay()}</ul>
      </div>
    </nav>
  );
}
