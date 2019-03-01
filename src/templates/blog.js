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
import PaginationNav from "../components/pagination.js";

export default class DestinationTemplate extends React.Component {
	constructor(props) {
		super(props);

		console.log(props)

		// Check if any data was returned for the query
		// May not be if there is no articles
		if (this.props.data.allMarkdownRemark === undefined || this.props.data.allMarkdownRemark == null ) {
			this.posts = null;
		} else {
			this.posts = this.props.data.allMarkdownRemark.edges;
		}
		this.blogType = this.props.pageContext.blogType;
		this.renderBlogPosts = this.renderBlogPosts.bind(this);
	}

	// Function to take the posts array and group them into chunks
	renderBlogPosts() {

		// No articles for this page, so all we need is one row 
		// to let the users know 
		if (this.posts === undefined || this.posts == null || this.posts.length < 1 || this.posts[0] === false) {
			return (
				<Row>
					<Col>
						<h1>Articles coming soon...</h1>
					</Col>
				</Row>
			); 
		}

		// number of posts for this page
		const j = this.posts.length;
		// number of posts per row
		const chunk = 3;
		// array to hold the rows of posts wrapped in
		// the appropriate bootstrap
		let finalPosts = [];

		// Loop over the posts array in chunk sized chunks
		for(let i = 0; i < j; i += chunk) {
			// Slice out this iteration's chunk from array
			let postGroup = this.posts.slice(i, i + chunk);

			// Create the appropriate objects out of the chunk of data
			postGroup = postGroup.map((item) => {
				let post = item.node.frontmatter;
				let alt;
				
				// If it's a travel blog post, we want the alt of the image
				// to be the city
				if (this.blogType === "destinations") {
					alt = post.city[0]
				} else {
					alt = post.title
				}

				// This is the object format CardDeck component expects
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

			// Push this row into the final array
			finalPosts.push(
				<CardDeck key={i} items={postGroup} type={"vertical"}/>
			)
		}

		return finalPosts;
	}

	render() {
		return (
			<Layout>
				<Container fluid className="blog-list">
					<Row className="destinations-navbar">
						<Col>
							<BlogHeader blogType={this.blogType} headers={this.props.pageContext.headers}/>
						</Col>
					</Row>
					<Row className="no-marg-pad justify-content-center">
						<Col md="11">
							{this.renderBlogPosts()}
						</Col>
					</Row>
					
					<Row >
						<Col md="11">
							<PaginationNav numPages={this.props.pageContext.numPages} currentPage={this.props.pageContext.currentPage}/>
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