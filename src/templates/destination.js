import React from "react";
import { 
	Container, 
	Row, 
	Col,
	Collapse,
	Navbar,
	NavbarToggler,
	Nav,
	NavLink,
} from 'reactstrap';
import {Link} from 'gatsby';
import CardDeck from "../components/card_deck.js";
import Layout from "../components/layout";

export default class DestinationTemplate extends React.Component {
	constructor(props) {
		super(props);

		this.posts = this.props.pathContext.group;
		this.toggleNavbar = this.toggleNavbar.bind(this);
		this.renderBlogPosts = this.renderBlogPosts.bind(this);
		this.state = {
			isOpen: false
		};
	}

	toggleNavbar() {
		this.setState({
			isOpen: !this.state.isOpen
		});
	}

	renderBlogPosts() {
		if (this.posts === undefined || this.posts == null || this.posts.length < 1 || this.posts[0] === false) {
			return (
				<Row>
					<Col>
						<h1>Articles coming soon...</h1>
					</Col>
				</Row>
			); 
		}

		const j = this.posts.length;
		const chunk = 3;
		let finalPosts = [];

		for(let i = 0; i < j; i += chunk) {
			let postGroup = this.posts.slice(i, i + chunk);
			postGroup = postGroup.map((item) => {
				let post = item.node.frontmatter;
				return(
					{
						fluid: post.featuredImage.childImageSharp.fluid,
						alt: post.city[0],
						title: post.title.toUpperCase(),
						buttonText: "Read More",
						content: post.excerpt,
						link: post.path,
					}
				);
			});
			finalPosts.push(
				<CardDeck key={i} items={postGroup} type={"vertical"}/>
			)
		}

		return finalPosts;
	}

	render() {
		console.log(this.props)
		return (
			<Layout>
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
					<Row className="m-0 p-0 justify-content-center">
						<Col md="11" className="m-0 p-0">
							{this.renderBlogPosts()}
						</Col>
					</Row>
				</Container>
			</Layout>
		);
	}
}
