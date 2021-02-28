import React from "react";
import { NavDropdown } from "react-bootstrap";
import Navbar from 'react-bootstrap/Navbar';
import { BrowserRouter as Router } from 'react-router-dom';
import { Nav } from "react-bootstrap";

class LandingNav extends React.Component {

  render() {
    return (
      <Router>
        <Navbar bg="primary" variant="dark">
          <Navbar.Brand href="/">Student Life +</Navbar.Brand>
          <Nav className="mr-auto">
            <Nav.Link a href="/progress">UCSG Reports</Nav.Link>
            <NavDropdown title="Executive Officers" id="basic-nav-dropdown">
              <NavDropdown.Item href="mailto:lindsaln@mail.uc.edu">Logan Lindsay | President</NavDropdown.Item>
              <NavDropdown.Item href="mailto:dierkike@mail.uc.edu">Karl Dierking | Vice President</NavDropdown.Item>
              <NavDropdown.Item href="mailto:smitheie@mail.uc.edu">Isaac Smitherman | Treasurer</NavDropdown.Item>
              <NavDropdown.Item href="mailto:allasi@mail.uc.edu">Sivani Alla | Speaker of the Senate</NavDropdown.Item>
              <NavDropdown.Item href="mailto:herbercj@mail.uc.edu">Connor Herbert | Internal Holdover Senator</NavDropdown.Item>
              <NavDropdown.Item href="mailto:bollimta@mail.uc.edu">Teja Bollimunta | External Holdover Senator</NavDropdown.Item>
            </NavDropdown>
          </Nav>
          <Nav>
            <Nav.Link href="/login">Login</Nav.Link>
            <Nav.Link href="/admin">Admin</Nav.Link>
          </Nav>
        </Navbar>
      </Router>
    );
  }
}

export default LandingNav;
