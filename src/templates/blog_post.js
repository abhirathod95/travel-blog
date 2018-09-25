import React from "react";
import Helmet from 'react-helmet';
import { 
	Container, 
	Row, 
	Col,
	Button,
} from 'reactstrap';
import Banner from '../components/banner.js';
import Img from "gatsby-image";

export default function Template({data,}) {

	const { markdownRemark } = data; // data.markdownRemark holds our post data
	const {frontmatter, html} = markdownRemark;

	var bannerTitle;
	if (!Array.isArray(frontmatter.city) || !frontmatter.city.length) {
		bannerTitle = frontmatter.title
	} else {
		bannerTitle = frontmatter.city[0]
	}

	return (
		<div>
			<Helmet title={frontmatter.city[0] + ": " + frontmatter.title} />
			<Container fluid className="blog-post">
				<Row>
					<Banner showBottomText showTextBox={false} width="100%" height="50vh" item={{'sizes':frontmatter.featuredImage.childImageSharp.sizes, 'subHeading':'Better Ways To','heading':bannerTitle, 'buttonText':'Read More', 'link':'/'}}/>
				</Row>
				<Row>
					<Col xs="12" sm="10" md="8" lg="6">
						<h1 className="text-center">{frontmatter.title}</h1>
						<h5 className="text-center">{frontmatter.date}</h5>
					</Col>
				</Row>
				<Row>
					<Col xs="8">
						<div className="blog-post-content" dangerouslySetInnerHTML={{ __html: html }}/>
					</Col>
				</Row>
			</Container>
		</div>
	);
}

export const pageQuery = graphql`
	query BlogPostByPath($path: String!) {
		markdownRemark(frontmatter: { path: { eq: $path } }) {
			html
			frontmatter {
				date(formatString: "MMMM DD, YYYY")
				path
				title
				tags
				country
				city
				featuredImage {
					childImageSharp{
						sizes(maxWidth: 2060) {
							...GatsbyImageSharpSizes
						}
					}
				}
			}
		}
	}
`;

