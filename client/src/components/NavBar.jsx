import React from "react";
import { NavLink as RouterNavLink } from "react-router-dom";
import { Nav, Navbar } from "react-bootstrap";
import { useAuth0 } from "@auth0/auth0-react";
import LogoutButton from "./LogoutButton";
import LoginButton from "./LoginButton";
import logo from "../assets/logo.webp";
import Image from "react-bootstrap/Image";
import ProfileWelcome from "../views/ProfileWelcome";

const MainNav = () => {
  const { isAuthenticated } = useAuth0();
  return (
    <Nav className="mr-auto">
      <Nav.Link
        as={RouterNavLink}
        to="/"
        exact
        activeClassName="router-link-exact-active"
        style={{ color: "white" }}
      >
        <Image
          className="logo"
          src={logo}
          // style={{ height: "auto", width: "20%" }}
        />
      </Nav.Link>
      {isAuthenticated && (
        <Nav.Link
          as={RouterNavLink}
          to="/"
          exact
          activeClassName="router-link-exact-active"
          style={{ color: "white" }}
        >
          Home
        </Nav.Link>
      )}
      {isAuthenticated && (
        <Nav.Link
          as={RouterNavLink}
          to="/dashboard"
          exact
          activeClassName="router-link-exact-active"
          style={{ color: "white" }}
        >
          Dashboard
        </Nav.Link>
      )}

      {/* <Nav.Link
        as={RouterNavLink}
        to="/external-api"
        exact
        activeClassName="router-link-exact-active"
      >
        External API
      </Nav.Link> */}
    </Nav>
  );
};

const AuthNav = () => {
  const { isAuthenticated } = useAuth0();
  console.log("AuthNav isAuthenticated", isAuthenticated);
  return <Nav>{isAuthenticated ? <LogoutButton /> : <LoginButton />}</Nav>;
};

const ProfileNav = () => {
  return (
    <Nav className="justify-content-end">
      <ProfileWelcome />
    </Nav>
  );
};

const NavBar = () => {
  return (
    <Navbar bg="dark" expand="md" sticky="top" opacity="60">
      <Navbar.Brand as={RouterNavLink} className="logo" to="/" />
      <MainNav />
      <ProfileNav />
      <AuthNav />
    </Navbar>
  );
};
export default NavBar;
