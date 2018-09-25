import React from "react";
import Helmet from 'react-helmet';
import { 
	Container, 
	Row, 
	Col,
	Button,  
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
} from 'reactstrap';
import Link from 'gatsby-link'
import Banner from '../components/banner.js';
import Img from "gatsby-image";

export default class DestinationTemplate extends React.Component {
	constructor(props) {
		super(props);

		this.toggleNavbar = this.toggleNavbar.bind(this);
		this.onMouseEnter = this.onMouseEnter.bind(this);
		this.onMouseLeave = this.onMouseLeave.bind(this);
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

	onMouseEnter() {
		this.setState({dropdownOpen: true});
	}

	onMouseLeave() {
		this.setState({dropdownOpen: false});
	}


	render() {
		console.log(this.props)
		return (
			<div>
				<Container fluid>
					<Row className="destinations-navbar">
						<Col className="p-5">
							<Navbar expand="lg">
								<NavbarToggler className="d-sm-none small-icon" onClick={this.toggleNavbar} />
								<NavbarToggler className="d-none d-sm-block d-lg-none large-icon" onClick={this.toggleNavbar} />
								<Collapse isOpen={this.state.isOpen} navbar>
									<Nav navbar className="align-items-center justify-content-center">
										<NavLink key={"destinations"} to={"/destinations"} tag={Link}> All </NavLink>
										{
											this.props.pathContext.additionalContext.destinations.map((destination, index) =>
												<NavLink key={index} to={"/destinations/" + destination.toLowerCase().replace(" ", "-")} tag={Link}> {destination} </NavLink>
											)
										}
									</Nav>
								</Collapse>
							</Navbar>
						</Col>
					</Row>
				</Container>
			</div>
		);
	}
}
