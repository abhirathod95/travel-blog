import React from "react";
import { 
	Container, 
	Row, 
	Col,
} from 'reactstrap';
import CardDeck from "../components/card_deck.js";
import Layout from "../components/layout";
import DestinationHeader from "../components/destination_header.js";

export default class DestinationTemplate extends React.Component {
	constructor(props) {
		super(props);

		this.posts = this.props.pathContext.group;
		this.renderBlogPosts = this.renderBlogPosts.bind(this);
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
						<Col className="p-3">
							<DestinationHeader destinations={this.props.pathContext.additionalContext.destinations}/>
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
