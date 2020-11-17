import React, { Component, Button } from "react";
import { NavDropdown, NavLink } from "react-bootstrap";
import Navbar from 'react-bootstrap/Navbar';
import { BrowserRouter as Router } from 'react-router-dom';
import { Nav } from "react-bootstrap";
import admin from "../admin/admin-component";
import {Link} from 'react-router';


class LandingNav extends React.Component{

render() {
  return (
    <Router>

      <Navbar bg="primary" variant="dark">
        <Navbar.Brand>Student Life</Navbar.Brand>
        <Nav className="mr-auto">
          <Nav.Link href="/">Home</Nav.Link>
          <Nav.Link a href="https://www.ucstudentgov.org/summer-report-2020">UCSG Reports</Nav.Link>
          <NavDropdown title="Executive Officers" id="basic-nav-dropdown">
            <NavDropdown.Item href="mailto:lindsaln@mail.uc.edu">Logan Lindsay | President</NavDropdown.Item>
            <NavDropdown.Item href="mailto:dierkike@mail.uc.edu">Karl Dierking | Vice President</NavDropdown.Item>
            <NavDropdown.Item href="mailto:smitheie@mail.uc.edu">Isaac Smitherman | Treasurer</NavDropdown.Item>
            <NavDropdown.Item href="mailto:allasi@mail.uc.edu">Sivani Alla | Speaker of the Senate</NavDropdown.Item>
            <NavDropdown.Item href="mailto:herbercj@mail.uc.edu">Connor Herbert | Internal Holdover Senator</NavDropdown.Item>
            <NavDropdown.Item href="mailto:bollimta@mail.uc.edu">Teja Bollimunta | External Holdover Senator</NavDropdown.Item>
          </NavDropdown>
          </Nav>
          {/* <Nav>
            <NavLink to="/admin">Admin</NavLink>
          </Nav> */}
      </Navbar>
    </Router>
    );
  }
}

export default LandingNav;
