import React, { useContext } from "react";
import { AuthContext } from "../Providers/AuthProvider";
import { NavLink } from "react-router-dom";
import Logo from "../Imgs/Twitter_Logo_WhiteOnImage.png";
import SearchBar from "../Components/SearchBar";
import { logOut } from "../Util/firebaseFunction";
// import "../Css/NavBar.css";

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
          <li className="nav-item">
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

  //   <nav class="navbar navbar-expand-lg navbar-light bg-light">
  //   <a class="navbar-brand" href="#">Navbar</a>
  //   <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
  //     <span class="navbar-toggler-icon"></span>
  //   </button>
  //   <div class="collapse navbar-collapse" id="navbarSupportedContent">
  //     <ul class="navbar-nav mr-auto">
  //       <li class="nav-item active">
  //         <a class="nav-link" href="#">Home <span class="sr-only">(current)</span></a>
  //       </li>
  //       <li class="nav-item">
  //         <a class="nav-link" href="#">Link</a>
  //       </li>
  //       <li class="nav-item dropdown">
  //         <a class="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
  //           Dropdown
  //         </a>
  //         <div class="dropdown-menu" aria-labelledby="navbarDropdown">
  //           <a class="dropdown-item" href="#">Action</a>
  //           <a class="dropdown-item" href="#">Another action</a>
  //           <div class="dropdown-divider"></div>
  //           <a class="dropdown-item" href="#">Something else here</a>
  //         </div>
  //       </li>
  //       <li class="nav-item">
  //         <a class="nav-link disabled" href="#">Disabled</a>
  //       </li>
  //     </ul>
  //     <form class="form-inline my-2 my-lg-0">
  //       <input class="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search">
  //       <button class="btn btn-outline-success my-2 my-sm-0" type="submit">Search</button>
  //     </form>
  //   </div>
  // </nav>

  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
      <NavLink exact to={"/"} className="navbar-brand">
        <img alt="twitter logo" src={Logo} style={imgWandH} />
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
      <div class="collapse navbar-collapse" id="navbarSupportedContent">
        <ul className="navUl">{buttonDisplay()}</ul>
      </div>
    </nav>
  );
}
