import React from "react";
import Helmet from 'react-helmet';
import Layout from "../components/layout";
import { 
	Container, 
	Row, 
	Col,
} from 'reactstrap';
import Banner from '../components/banner.js';

export default class BlogPostTemplate extends React.Component {

	constructor(props) {
		super(props);
		
		this.frontmatter = props.pageContext.data.frontmatter;
		this.html = props.pageContext.data.html;

	}

	render() {

		let bannerTitle;
		if (!Array.isArray(this.frontmatter.city) || !this.frontmatter.city.length) {
			bannerTitle = this.frontmatter.title
		} else {
			bannerTitle = this.frontmatter.city[0]
		}

		return (
			<Layout>
				<Helmet title={this.frontmatter.city[0] + ": " + this.frontmatter.title} />
				<Container fluid className="blog-post">
					<Row>
						<Banner showTextBox={false} width="100%" height="50vh" item={{'fluid':this.frontmatter.featuredImage.childImageSharp.fluid, 'subHeading':'Better Ways To','heading':bannerTitle, 'buttonText':'Read More', 'link':'/'}}/>
					</Row>
					<Row>
						<Col xs="12" sm="10" md="8" lg="6">
							<h1 className="text-center display-3">{this.frontmatter.title}</h1>
							<h5 className="text-center">{this.frontmatter.date}</h5>
						</Col>
					</Row>
					<Row>
						<Col xs="8">
							<div className="blog-post-content" dangerouslySetInnerHTML={{ __html: this.html }}/>
						</Col>
					</Row>
				</Container>
			</Layout>
		);
	}

}
