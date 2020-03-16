import React, { Component } from "react";
import { Navbar, Nav, Row } from "react-bootstrap";
class NavigationBar extends React.Component {
  render() {
    return (
      <Navbar bg="dark" variant="dark">
        <Navbar.Brand href="/">
          <img
            src="https://cdn4.iconfinder.com/data/icons/pretty-office-part-3-reflection-style/256/Add-male-user.png"
            width="45"
            height="45"
          />
          Skill Matrix
        </Navbar.Brand>
        <Nav className="mr-auto">
          <Nav.Link href="#">About</Nav.Link>
          <Nav.Link href="#">Facts</Nav.Link>
        </Nav>
      </Navbar>
    );
  }
}
export default NavigationBar;
