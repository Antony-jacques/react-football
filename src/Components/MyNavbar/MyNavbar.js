import React from "react";
import "./MyNavbar.css";
import Navbar from "react-bootstrap/Navbar";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";

import {useDispatch} from 'react-redux'

const MyNavbar = () => {

  const dispatch = useDispatch()

  const toggleUp =() =>{
    dispatch({
      type:'TOGGLEUP'
    })
  }

  const toggleIn = () =>{
    dispatch({
      type:'TOGGLEIN'

    })
  }
  return (
    <Navbar bg="light" expand="lg" className="navbar">
      <Container>
        <Navbar.Brand href="#home">React-Football</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <button onClick={toggleIn} >Se connecter</button>
            <button onClick={toggleUp}>S'inscrire</button>
            {/* <Nav.Link href="#home">Home</Nav.Link>
        <Nav.Link href="#link">Link</Nav.Link> */}

          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default MyNavbar;
