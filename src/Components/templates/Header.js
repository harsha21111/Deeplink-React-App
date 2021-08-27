import React from "react";
import { Nav, Navbar, NavDropdown,NavbarBrand } from "react-bootstrap";


class Header extends React.Component {
  render() {
    return (
      <div>
      <Navbar bg="danger" variant="danger" expand="md" >
        <NavbarBrand href="/" alignRight>Deeplink-Portal</NavbarBrand>
          <Nav >
            <NavDropdown
              size="sm"
              alignRight
              title="signup"
            >
              <NavDropdown.Item href="profile">
                My Profile
              </NavDropdown.Item>
            </NavDropdown>
          </Nav>
      </Navbar>
      </div>
    );
  }
}

export default Header;
