import React, { useContext } from "react";
import logo from "../../../../../assets/logo.png";
import moment from "moment";
import Marquee from "react-fast-marquee";
import { Button, Container } from "react-bootstrap";

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
     
    </Container>
  );
};

export default Header;
