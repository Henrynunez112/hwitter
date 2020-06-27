import React from "react";
import TwitterSearch from "./TwitterSearch";
import { NavLink } from "react-router-dom";
import Logo from "../Imgs/Twitter_Logo_WhiteOnImage.png";
import "../Css/NavBar.css";

const NavBar = () => {
  // const { currentUser } = useContext();
  // const loginDisplay = () => {
  //   if (currentUser) {
  //     return <button onClick={logout}>Log Out</button>;
  //   } else {
  //     return (
  //       <>
  //         <NavLink to={"/signup"}>Sign Up</NavLink>
  //         <NavLink to={"/login"}>Log In</NavLink>
  //       </>
  //     );
  //   }
  // };
  const imgWandH = {
    width: "32px",
    height: "32px",
  };

  // const ulCss = {
  //   listStyleType: "none",
  // };
  // style={ulCss}
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
        <li className="navLi">
          <NavLink exact to={"/login"}>
            Log In
          </NavLink>
        </li>
        <li className="navLi">
          <NavLink exact to={"/signup"}>
            Sign Up
          </NavLink>
        </li>

        {/* {loginDisplay()} */}
      </ul>
    </nav>
  );
};

export default NavBar;
