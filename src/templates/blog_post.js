import React from "react";
import Helmet from 'react-helmet';
import Layout from "../components/layout";
import { 
	Container, 
	Row, 
	Col,
} from 'reactstrap';
import { graphql } from 'gatsby';
import Banner from '../components/banner.js';

export default class BlogPostTemplate extends React.Component {

	constructor(props) {
		super(props);
		
		this.tableOfContents = props.data.markdownRemark.tableOfContents;
		this.frontmatter = props.data.markdownRemark.frontmatter;
		this.html = props.data.markdownRemark.html;

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
				<Helmet title={this.frontmatter.title} />
				<Container fluid className="blog-post">
					<Row>
						<Banner showTextBox={false} width="100%" height="50vh" item={{'fluid':this.frontmatter.featuredImage.childImageSharp.fluid, 'subHeading':'Better Ways To','heading':bannerTitle, 'buttonText':'Read More', 'link':'/'}}/>
					</Row>
					<Row>
						<Col xs="12" sm="10" md="8" lg="6">
							<h1 className="text-center h1">{this.frontmatter.title}</h1>
							<h5 className="text-center">{this.frontmatter.date}</h5>
						</Col>
					</Row>
					<Row>
						<Col xs="9">
							<div className="blog-post-content" dangerouslySetInnerHTML={{ __html: this.html }}/>
						</Col>
					</Row>
				</Container>
			</Layout>
		);
	}

}

export const query = graphql`
query getArticleById ($id:String!) {
	markdownRemark(id: {eq: $id}) {
		id
    	html
        tableOfContents(
          pathToSlugField: "frontmatter.path"
          maxDepth: 2
        )
		frontmatter {
			title,
			date(formatString: "MMMM DD, YYYY"),
			path,
			excerpt,
			tags,
			continent,
			country,
			city,
			featuredImage {
				childImageSharp {
					fluid(maxWidth: 2060) {
						base64
						aspectRatio
						src
						srcSet
						sizes
						originalImg
						originalName
					}
				}
			}
		}
    }
}
`