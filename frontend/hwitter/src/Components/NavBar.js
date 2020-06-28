import React, { useContext } from "react";
import TwitterSearch from "./TwitterSearch";
import { AuthContext } from "../Providers/AuthContext";
import { NavLink } from "react-router-dom";
import Logo from "../Imgs/Twitter_Logo_WhiteOnImage.png";
import { logOut } from "../Util/firebaseFunction";
import "../Css/NavBar.css";

export default function NavBar() {
  const { currentUser } = useContext(AuthContext);

  const buttonDisplay = () => {
    debugger;
    if (currentUser) {
      return <button onClick={logOut}>Log Out</button>;
    } else {
      return (
        <>
          <li className="navLi">
            <NavLink to={"/signup"}>Sign Up</NavLink>
          </li>
          <li className="navLi">
            <NavLink to={"/login"}>Log In</NavLink>
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
            <TwitterSearch />
          </NavLink>
        </li>
        <li className="navLi">
          <NavLink exact to={"/users"}>
            Show all users
          </NavLink>
        </li>
        {buttonDisplay()}
      </ul>
    </nav>
  );
}
