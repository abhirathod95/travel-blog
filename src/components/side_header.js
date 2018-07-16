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

export default class HeaderLeft extends React.Component {
  constructor(props) {
    super(props);
  };
  

  render() {
    return (
      <div className="sidebar">
        <Navbar>
              <Nav navbar>
                <FontAwesomeIcon icon={['fab', 'pinterest']} size="lg" color={iconColor} fixedWidth className="m-2" /> 
                <FontAwesomeIcon icon={['fab', 'instagram']} size="lg" color={iconColor} fixedWidth  className="m-2 "/> 
                <FontAwesomeIcon icon={['fab', 'tumblr']} size="lg" color={iconColor} fixedWidth  className="m-2 "/> 
                <FontAwesomeIcon icon="envelope" size="lg" color={iconColor} fixedWidth transform="shrink-1" className="m-2"/> 
              </Nav>
        </Navbar>
      </div>
    );
  }
}
