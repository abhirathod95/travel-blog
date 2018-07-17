import React from 'react';
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavLink,
  NavItem,
  UncontrolledDropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
  InputGroup,
  InputGroupAddon,
  Button,
  Input } from 'reactstrap';
import Link from 'gatsby-link'
import Logo from '../images/logo.png'

const navbarItemsLeft = [
  {"name" : "posts", "path" : "/page-2", "visibleName": "POSTS"},
  {"name" : "aboutMe", "path" : "/", "visibleName": "ABOUT ME"}
  ]

const navbarItemsRight = [
  {"name" : "destinations", "path" : "/", "visibleName": "DESTINATIONS"},
  {"name" : "travelTips", "path" : "/", "visibleName": "TRAVEL TIPS"}
  ]

export default class Header extends React.Component {
  constructor(props) {
    super(props);

    this.toggle = this.toggle.bind(this);
    this.state = {
      isOpen: false
    };
  }
  toggle() {
    this.setState({
      isOpen: !this.state.isOpen
    });
    console.log(this.state.isOpen)
  }
  render() {
    return (
      <div className="top-navbar">
        <Navbar fixed="top" expand="md">
          <NavbarBrand className="d-md-none text-center" tag={Link} to="/"><img src={Logo} width="275" height="auto" alt=""/></NavbarBrand>
          <NavbarToggler onClick={this.toggle} />
          <div className="container custom-raleway">
            <Collapse isOpen={this.state.isOpen} navbar>
              <Nav navbar>
                {
                  navbarItemsLeft.map((item) => {
                    return (
                        <NavLink className="text-center h6" key={item.name} to={item.path} tag={Link}> {item.visibleName} </NavLink>

                    )
                  })
                }
              </Nav>
              <NavbarBrand className="d-none d-md-block text-center" tag={Link} to="/"><img src={Logo} width="275" height="auto" alt=""/></NavbarBrand>
              <Nav navbar>
                {
                  navbarItemsRight.map((item) => {
                    return (
                        <NavLink className="text-center h6" key={item.name} to={item.path} tag={Link}> {item.visibleName} </NavLink>

                    )
                  })
                }
              </Nav>
            </Collapse>
          </div>
        </Navbar>
      </div>
    );
  }
}
