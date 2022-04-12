import React from 'react';
import {
  Navbar,
  Nav,
  NavItem,
  NavLink,
} from 'reactstrap';
import {Link} from 'gatsby';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const iconColor = "#000000"

const HeaderLeft = () => (
  <div className="sidebar" >
    <Navbar>
          <Nav navbar>
            <NavItem>
              <a href="https://www.pinterest.com/wheretonext_doc" aria-label="Pinterest">
                <FontAwesomeIcon icon={['fab', 'pinterest']} size="lg" color={iconColor} fixedWidth/>
              </a>
            </NavItem>
            <NavItem>
              <a href="mailto:wheretonextdoc@gmail.com" aria-label="Email">
                <FontAwesomeIcon icon="envelope" size="lg" color={iconColor} fixedWidth transform="shrink-1"/>
              </a>
            </NavItem>
            <FontAwesomeIcon icon={['fab', 'instagram']} size="lg" color={iconColor} fixedWidth/>
          </Nav>
    </Navbar>
  </div>
)

export default HeaderLeft
