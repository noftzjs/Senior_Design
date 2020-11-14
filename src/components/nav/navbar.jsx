import React, { Component } from "react";
import {Link} from 'react-router';
import {
MDBNavbar, MDBNavbarBrand, MDBNavbarNav, MDBNavItem, MDBNavLink, MDBNavbarToggler, MDBCollapse, MDBFormInline,
MDBDropdown, MDBDropdownToggle, MDBDropdownMenu, MDBDropdownItem
} from "mdbreact";
import { BrowserRouter as Router } from 'react-router-dom';
import admin from "../admin/admin-component";

class NavBar extends Component {
state = {
  isOpen: false
};

toggleCollapse = () => {
  this.setState({ isOpen: !this.state.isOpen });
}

render() {
  return (
    <Router>
      <MDBNavbar color="indigo" dark expand="md">
        <MDBNavbarBrand>
          <strong className="white-text">Student Life</strong>
        </MDBNavbarBrand>
        <MDBNavbarToggler onClick={this.toggleCollapse} />
        <MDBCollapse id="navbarCollapse3" isOpen={this.state.isOpen} navbar>
          <MDBNavbarNav left>
            <MDBNavItem active>
              <MDBNavLink to="#!">Home</MDBNavLink>
            </MDBNavItem>
            <MDBNavItem>
              <a href="https://www.ucstudentgov.org/summer-report-2020" className="nav-link Ripple-parent">UCSG Reports</a>
            </MDBNavItem>
            <MDBNavItem>
              <MDBDropdown>
                <MDBDropdownToggle nav caret>
                  <span className="mr-2">Executive Officers</span>
                </MDBDropdownToggle>
                <MDBDropdownMenu>
                  <MDBDropdownItem href="mailto:lindsaln@mail.uc.edu">Logan Lindsay | President</MDBDropdownItem>
                  <MDBDropdownItem href="mailto:dierkike@mail.uc.edu">Karl Dierking | Vice President</MDBDropdownItem>
                  <MDBDropdownItem href="mailto:smitheie@mail.uc.edu">Isaac Smitherman | Treasurer</MDBDropdownItem>
                  <MDBDropdownItem href="mailto:allasi@mail.uc.edu">Sivani Alla | Speaker of the Senate</MDBDropdownItem>
                  <MDBDropdownItem href="mailto:herbercj@mail.uc.edu">Connor Herbert | Internal Holdover Senator</MDBDropdownItem>
                  <MDBDropdownItem href="mailto:bollimta@mail.uc.edu">Teja Bollimunta | External Holdover Senator</MDBDropdownItem>
                </MDBDropdownMenu>
              </MDBDropdown>
            </MDBNavItem>
          </MDBNavbarNav>
          <MDBNavbarNav right>
            <MDBNavItem>
              <MDBNavLink to="/admin">Admin</MDBNavLink>
            </MDBNavItem>
          </MDBNavbarNav>
        </MDBCollapse>
      </MDBNavbar>
    </Router>
        );
    }
}
export default NavBar;