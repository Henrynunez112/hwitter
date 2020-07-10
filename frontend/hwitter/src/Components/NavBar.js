import React, { useContext } from "react";
// import TwitterSearch from "./TwitterSearch";
import { AuthContext } from "../Providers/AuthProvider";
import { NavLink } from "react-router-dom";
import Logo from "../Imgs/Twitter_Logo_WhiteOnImage.png";
import { logOut } from "../Util/firebaseFunction";
import "../Css/NavBar.css";

export default function NavBar() {
  const { currentUser } = useContext(AuthContext);

  const buttonDisplay = () => {
    if (currentUser) {
      return (
        <div className="logoutButton">
          <button onClick={logOut}>Log Out</button>);
        </div>
      );
    } else {
      return (
        <>
          <li className="navLi">
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
          <li className="navLi">
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
    <nav className="navBar">
      <ul className="navUl">
        <li className="navLi">
          <NavLink exact to={"/"}>
            <img alt="twitter logo" src={Logo} style={imgWandH} />
          </NavLink>
        </li>
        <li className="navLi">
          <NavLink exact to={"/search"}>
            <div className="formContainer">
              <div className="searchBar">
                <button type="submit" className="searchButton">
                  <img
                    alt="search icon"
                    src="https://img.icons8.com/metro/26/000000/search.png"
                    id="searchIcon"
                  />
                </button>
                <input
                  className="searchInput"
                  type="text"
                  placeholder="Search Twitter"
                />
              </div>
            </div>
          </NavLink>
        </li>
        <li className="navLi">
          {/* <NavLink exact to={"/users"}>
            Show all users
          </NavLink> */}
        </li>
        {buttonDisplay()}
      </ul>
    </nav>
  );
}
