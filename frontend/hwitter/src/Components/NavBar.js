import React from "react";
import TwitterSearch from './TwitterSearch'
import { NavLink } from "react-router-dom";
import Logo from "../Imgs/Twitter_Logo_WhiteOnImage.png";


const NavBar = () => {
  return (
    <div className="navBarContainer">
      <nav className="navBar">
        <ul className="navUl">
          <li className="navLi">
            <NavLink exact to="/">
              <img alt="twitter logo" src={Logo} />
            </NavLink>
            <NavLink exact to="/search">
                <TwitterSearch />
            </NavLink>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default NavBar;
