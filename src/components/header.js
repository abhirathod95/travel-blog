import React from 'react';
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavLink,
  NavItem,
  Dropdown,
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
  {"name" : "aboutMe", "path" : "/", "visibleName": "ABOUT ME"}
  ]

const navbarItemsRight = [
  {"name" : "blog", "path" : "/page-2", "visibleName": "BLOG POSTS"},
  {"name" : "travelTips", "path" : "/", "visibleName": "TRAVEL TIPS"}
  ]

const dropdownItems = [
  {"name" : "northAmerica", "path" : "/page-2", "visibleName": "North America"},
  {"name" : "europe", "path" : "/", "visibleName": "Europe"},
  {"name" : "africa", "path" : "/", "visibleName": "Africa"},
  {"name" : "asia", "path" : "/", "visibleName": "Asia"},
  {"name" : "oceania", "path" : "/", "visibleName": "Oceania"},
  {"name" : "southAmerica", "path" : "/", "visibleName": "South America"},
  ]

export default class Header extends React.Component {
  constructor(props) {
    super(props);

    this.toggleNavbar = this.toggleNavbar.bind(this);
    this.toggleDropDown = this.toggleDropDown.bind(this);
    this.state = {
      isOpen: false,
      dropdownOpen: false
    };
  }

  toggleNavbar() {
    this.setState({
      isOpen: !this.state.isOpen
    });
  }

  toggleDropDown() {
    this.setState({
      dropdownOpen: !this.state.dropdownOpen
    });
  }


  render() {
    return (
      <div className="top-navbar">
        <Navbar fixed="top" expand="md">
          <NavbarBrand className="d-md-none" tag={Link} to="/"><img src={Logo} width="275" height="auto" alt=""/></NavbarBrand>
          <NavbarToggler onClick={this.toggleNavbar} />
          <div className="container">
            <Collapse isOpen={this.state.isOpen} navbar>
              <Nav navbar className="align-items-center justify-content-center">
                <Dropdown nav inNavbar isOpen={this.state.dropdownOpen} toggle={this.toggleDropDown} className="align-items-center justify-content-center">
                  <DropdownToggle nav> DESTINATIONS </DropdownToggle>
                  <DropdownMenu style={{'left':''}}>
                    {
                      dropdownItems.map((item) => {
                        return (
                          <DropdownItem key={item.name} tag={Link} to={item.path}> {item.visibleName} </DropdownItem>
                        )
                      })
                    }
                  </DropdownMenu>
                </Dropdown>
                {
                  navbarItemsLeft.map((item) => {
                    return (
                        <NavLink key={item.name} to={item.path} tag={Link}> {item.visibleName} </NavLink>

                    )
                  })
                }
              </Nav>
              <NavbarBrand className="d-none d-md-block" tag={Link} to="/"><img src={Logo} width="275" height="auto" alt=""/></NavbarBrand>
              <Nav navbar className="align-items-center justify-content-center">

                {
                  navbarItemsRight.map((item) => {
                    return (
                        <NavLink key={item.name} to={item.path} tag={Link}> {item.visibleName} </NavLink>

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
