import React from "react";
import Navbar from "react-bootstrap/Navbar";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";

import { Link } from "react-router-dom";

export default function PrivateNavbar() {
  return (
    <Navbar bg="light" expand="lg" className="navbar">
      <Container>
        <Navbar.Brand href="#home">React-Football</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Link style={{ margin: "0 3rem" }} to="/accueil">
              Highlights
            </Link>
            <Link style={{ margin: "0 3rem" }} to="/live">
              Live
            </Link>
            <Link style={{ margin: "0 3rem" }} to="/profile">
            Profil
            </Link>
            <Link style={{ margin: "0 3rem" }} to="/classements">
            Classements
            </Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}
