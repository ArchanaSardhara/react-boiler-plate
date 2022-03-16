import React, { useState } from "react";
import {
  Row,
  Col,
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  UncontrolledDropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
} from "reactstrap";
import { Link } from "react-router-dom";

const Header = () => {
  const [isOpen, toggleCollapse] = useState(false);
  const toggle = () => {
    toggleCollapse(!isOpen);
  };
  return (
    <Navbar className="header-container" color="dark" dark expand="md">
      <NavbarBrand href="/">
        <span className="logo">
          <img src="assets/img/logo.png" alt="logo" /> Todo App
        </span>
      </NavbarBrand>
      <NavbarToggler onClick={toggle} />
      <Collapse isOpen={isOpen} navbar>
        <Nav className="ms-auto" navbar>
          <NavItem>
            <Link className="nav-link text-white" to="/">
              Home
            </Link>
          </NavItem>
          <NavItem>
            <Link className="nav-link text-white" to="/todo">
              Todo
            </Link>
          </NavItem>
          <UncontrolledDropdown nav inNavbar>
            <DropdownToggle nav caret>
              Settings
            </DropdownToggle>
            <DropdownMenu>
              <DropdownItem>Profile</DropdownItem>
              <DropdownItem divider />
              <DropdownItem>Logout</DropdownItem>
            </DropdownMenu>
          </UncontrolledDropdown>
        </Nav>
      </Collapse>
    </Navbar>
  );
};

export default Header;
