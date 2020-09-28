import React from "react";
import { NavLink as RouterNavLink } from "react-router-dom";
import { Container, Nav, Navbar } from "react-bootstrap";
import { useAuth0 } from "@auth0/auth0-react";
import LogoutButton from "../logout-button/logout-button";
import LoginButton from "../login-button/login-button";

import logo from "../../assets/logo.webp";
import Image from "react-bootstrap/Image";

import Profile from "../Profile/profile";

const MainNav = () => (
  <Nav className="mr-auto">
    <Image
      className="logo"
      src={logo}
      roundedCircle
      style={{ height: "auto", width: "20%" }}
    />
    <Nav.Link
      as={RouterNavLink}
      to="/"
      exact
      activeClassName="router-link-exact-active"
      style={{ color: "white" }}
    >
      Home
    </Nav.Link>
    <Nav.Link
      as={RouterNavLink}
      to="/dashboard"
      exact
      activeClassName="router-link-exact-active"
      style={{ color: "white" }}
    >
      Dashboard
    </Nav.Link>
    <Nav.Link
      as={RouterNavLink}
      to="/chat"
      exact
      activeClassName="router-link-exact-active"
      style={{ color: "white" }}
    >
      Chat
    </Nav.Link>
  </Nav>
);

const AuthNav = () => {
  const { isAuthenticated } = useAuth0();
  console.log("AuthNav isAuthenticated", isAuthenticated);

  return <Nav>{isAuthenticated ? <LogoutButton /> : <LoginButton />}</Nav>;
};

const ProfileNav = () => {
  return (
    <Nav className="justify-content-end">
      <Profile />
    </Nav>
  );
};

const NavBar = () => {
  return (
    <Navbar bg="dark" expand="md">
      <Navbar.Brand as={RouterNavLink} className="logo" to="/" />
      <MainNav />
      <ProfileNav />
      <AuthNav />
    </Navbar>
  );
};

export default NavBar;
