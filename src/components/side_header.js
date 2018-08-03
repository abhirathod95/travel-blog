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
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

const iconColor = "#000000"

const HeaderLeft = () => (
  <div className="sidebar" >
    <Navbar>
          <Nav navbar>
            <FontAwesomeIcon icon={['fab', 'pinterest']} size="lg" color={iconColor} fixedWidth/> 
            <FontAwesomeIcon icon={['fab', 'instagram']} size="lg" color={iconColor} fixedWidth/> 
            <FontAwesomeIcon icon={['fab', 'tumblr']} size="lg" color={iconColor} fixedWidth/> 
            <FontAwesomeIcon icon="envelope" size="lg" color={iconColor} fixedWidth transform="shrink-1"/> 
          </Nav>
    </Navbar>
  </div>
)

export default HeaderLeft
