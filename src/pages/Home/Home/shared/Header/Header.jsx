import React from "react";
import logo from "../../../../../assets/logo.png";
import moment from "moment";
import Marquee from "react-fast-marquee";
import { Button, Container, Nav, Navbar } from "react-bootstrap";

const Header = () => {
  return (
    <Container>
      <div className="text-center">
        <img src={logo} alt="" />
        <p className="text-secondary">Journalism Without Fear or Favour</p>
        <p>{moment().format("dddd, MMMM D, YYYY")} </p>
      </div>
      <div className="d-flex bg-secondary p-1">
        <Button variant="danger">Latest</Button>
        <Marquee className="text-light" speed={50} pauseOnHover={true} >
          I can be a React component, multiple React components, or just some
          text.
        </Marquee>
      </div>
      <Navbar className="mt-3 mb-3" collapseOnSelect expand="lg" bg="light" variant="light">
      <Container>
    
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="mx-auto">
            <Nav.Link href="#features">Home</Nav.Link>
            <Nav.Link href="#pricing">About</Nav.Link>
          </Nav>
          <Nav>
            <Nav.Link href="#deets">Profile</Nav.Link>
            <Nav.Link eventKey={2} href="#memes">
            <Button variant="secondary">Login</Button>
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
    </Container>
  );
};

export default Header;
