import React from "react";
import { AiOutlineUser } from "react-icons/ai";
import {
  Nav,
  Navbar,
  NavbarBrand,
  NavbarText,
  NavItem,
  NavLink,
} from "reactstrap";
import {FaClipboardList } from "react-icons/fa";

const Header = () => {
  return (
    <div>
      <Navbar color="danger" light expand="md">
        <NavbarBrand href="/">React Application</NavbarBrand>
        <Nav className="mr-auto" navbar>
          <NavItem>
            <NavLink href="/Components/">Components</NavLink>
          </NavItem>
          <NavItem>
            <NavLink href="/Signup" icon={<FaClipboardList />}>
              Sign-Up
            </NavLink>
          </NavItem>
        </Nav>
        <NavbarText>
          <div>
            <AiOutlineUser></AiOutlineUser>
          </div>
        </NavbarText>
      </Navbar>
    </div>
  );
};

export default Header;