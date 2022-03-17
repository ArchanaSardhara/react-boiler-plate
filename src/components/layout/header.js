import React, { useState } from "react";
import {
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
  const handleChangeTheme = (theme) => {
    document.body.setAttribute("data-theme", theme);
  };

  return (
    <Navbar className="header-container" expand="md">
      <NavbarBrand href="/">
        <span className="logo">
          <img src="assets/img/logo.png" alt="logo" /> Todo App
        </span>
      </NavbarBrand>
      <NavbarToggler onClick={toggle} />
      <Collapse isOpen={isOpen} navbar>
        <Nav className="ms-auto" navbar>
          <NavItem>
            <Link className="nav-link" to="/">
              Home
            </Link>
          </NavItem>
          <NavItem>
            <Link className="nav-link" to="/todo">
              Todo
            </Link>
          </NavItem>
          <UncontrolledDropdown nav inNavbar>
            <DropdownToggle nav caret>
              Settings
            </DropdownToggle>
            <DropdownMenu>
              <DropdownItem>Theme</DropdownItem>
              <DropdownItem divider />
              <DropdownItem onClick={() => handleChangeTheme("dark")}>
                Dark
              </DropdownItem>
              <DropdownItem onClick={() => handleChangeTheme("light")}>
                Light
              </DropdownItem>
            </DropdownMenu>
          </UncontrolledDropdown>
        </Nav>
      </Collapse>
    </Navbar>
  );
};

export default Header;
