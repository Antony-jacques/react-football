import React, {useContext} from "react";
import Navbar from "react-bootstrap/Navbar";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";

import { Link } from "react-router-dom";

import {AuthContext} from '../../Context/AuthContext'
import './PrivateNavbar.css'

export default function PrivateNavbar() {

  const {logout} = useContext(AuthContext)
  const navItems = [
    {
      url: "/accueil",
      text: "Résumés vidéo",
    },
    {
      url: "/live",
      text: "Live",
    },
    {
      url: "/classements",
      text: "Classements",
    },
    {
      url: "/profile",
      text: "Mon profil",
    },
  ];
  return (
    <Navbar bg="light" expand="lg" className="navbar">
      <Container>
        <Navbar.Brand href="#home">React-Football</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">


            {navItems.map((item, index) => (
              
              <Link key={index} style={{ color:'rgba(0,0,0,.9)' ,   padding:'0.5rem 2rem' ,   textDecoration: 'none', margin:'auto 0' }} to={item.url}>
                {item.text}
              </Link>
            ))}
            <Link to='#' onClick={logout} style={{ color:'rgba(0,0,0,.9)' ,   padding:'0.5rem 2rem' ,   textDecoration: 'none', margin:'auto 0'  }}>Se déconnecter</Link>

          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}
