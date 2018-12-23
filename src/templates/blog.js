import React from "react";
import { 
	Container, 
	Row, 
	Col,
} from 'reactstrap';
import { graphql } from 'gatsby';
import CardDeck from "../components/card_deck.js";
import Layout from "../components/layout";
import BlogHeader from "../components/blog_header.js";

export default class DestinationTemplate extends React.Component {
	constructor(props) {
		super(props);
		if (this.props.data.allMarkdownRemark === undefined || this.props.data.allMarkdownRemark == null ) {
			this.posts = null;
		} else {
			this.posts = this.props.data.allMarkdownRemark.edges;
		}
		this.blogType = this.props.pageContext.blogType;
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
				let alt;
				
				if (this.blogType === "destinations") {
					alt = post.city[0]
				} else {
					alt = post.title
				}

				return(
					{
						fluid: post.featuredImage.childImageSharp.fluid,
						alt: alt,
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
		return (
			<Layout>
				<Container fluid>
					<Row className="destinations-navbar">
						<Col className="p-3">
							<BlogHeader blogType={this.blogType} headers={this.props.pageContext.headers}/>
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

export const query = graphql`
    query allArticles($skip: Int!, $limit: Int!, $filter: filterMarkdownRemark){
      allMarkdownRemark(
        filter: $filter
        sort: { order: DESC, fields: [frontmatter___date] }
        skip: $skip
        limit: $limit
      ) {
        edges {
          node {
            html
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
      }
    }
`