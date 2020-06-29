import React, { useContext } from "react";
import { Nav, Navbar } from "react-bootstrap";
import styled from "styled-components";
import TwitterSearch from "./TwitterSearch";
import { AuthContext } from "../Providers/AuthContext";
// import { NavLink } from "react-router-dom";
import Logo from "../Imgs/Twitter_Logo_WhiteOnImage.png";
import LogOut from "./LogOut";
// import "../Css/NavBar.css";

const Styles = styled.div`
  .navbar {
    background-color: #15212b;
  }
  .navbar-brand .navbar-nav .navbar-link {
    color: #1da1f2;
  }
  &:hover {
    color: #ffffff;
  }
`;

function Navigation(params) {

  const { currentUser } = useContext(AuthContext);

  // const buttonDisplay = () => {
  // if (currentUser) {
  //   return (
  //     <>
  //     <Nav.Item><LogOut /></Nav.Item>
  //       {/* <LogOut /> */}
  //     </>
  //   );
  // } else {
  //   return (
  //     <>
  //       <Nav.Item><Nav.Link href ="/signup">Sign Up</Nav.Link></Nav.Item>
  //       <Nav.Item><Nav.Link href ="/login">Log In</Nav.Link></Nav.Item>

  //         {/* <NavLink to={"/signup"}>Sign Up</NavLink>
  //         <NavLink to={"/login"}>Log In</NavLink> */}

  //     </>
  //   );
  // }
  // };
  const imgWandH = {
    width: "32px",
    height: "32px",
  };

  return (
    <>
      <Styles>
        <Navbar expand="lg">
          <Navbar.Brand href ="/">
            <img alt="twitter logo" src={Logo} style={imgWandH} />
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          {/* 
        <Navbar.Collapse id="basic-navbar-nav"> */}
          <Nav className="mr-auto">
            <Nav.Item>
              <Nav.Link href="/search">
                <TwitterSearch />
              </Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link href="/users">Users</Nav.Link>
            </Nav.Item>
             {currentUser ? (
              <>
                <Nav.Item>
                  <LogOut />
                </Nav.Item>
              </>
            ) : (
              <>
                <Nav.Item>
                  <Nav.Link href="/signup">Sign Up</Nav.Link>
                </Nav.Item>

                <Nav.Item>
                  <Nav.Link href="/login">Log In</Nav.Link>
                </Nav.Item>
              </>
            )}
          </Nav>
        </Navbar>
      </Styles>
    </>
  );
}
export default Navigation;
