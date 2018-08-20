import React from 'react'
import Link from 'gatsby-link'
import { 
	Container, 
	Row, 
	Col,
	Button,
	Card, 
	CardImg, 
	CardText, 
	CardBody,
	CardTitle, 
	CardSubtitle, 
} from 'reactstrap';
import Banner from '../components/banner.js'
import CustomCard from '../components/cards.js'

const CustomCol = (props) => <Col widths={['xs', 'sm', 'md', 'lg', 'xl', 'xxl']} {...props} />;


export default class BlogPage extends React.Component {
	constructor(props) {
		super(props);

		this.items = []

		console.log(this.props.data.allJavascriptFrontmatter.edges)

		this.props.data.allJavascriptFrontmatter.edges.forEach(item => {
			var showTitle;
			if (!Array.isArray(item.node.frontmatter.city) || !item.node.frontmatter.city.length) {
				showTitle = item.node.frontmatter.title
			} else {
				showTitle = item.node.frontmatter.city[0] + ": " + item.node.frontmatter.title 
			}
			this.items.push({
				sizes: item.node.fields.imageNode.sizes, 
				alt: item.node.frontmatter.city[0], 
				date: item.node.frontmatter.date, 

				title: showTitle, 
				content: item.node.frontmatter.excerpt, 
				link: item.node.frontmatter.path, 
				buttonText: "Read More"
			})
		});
	}

	render() {
		return (
			<div>
				<Container fluid>
					<Row>
						<Banner showBottomText showTextBox={false} width='100%' height='50vh' item={{'sizes':this.props.data.allJavascriptFrontmatter.edges[0].node.fields.imageNode.sizes, 'alt': 'Amsterdam', 'subHeading':'Better Ways To','heading':'Blog Posts', 'buttonText':'Read More'}}/>
					</Row> 
					<Row>
					</Row> 
			        	{ 
			        		this.items.map((item, i) => {
				        		return (
				        			<div key={i}>
				        				<CustomCard key={i} item={item}/> 
					        			{ (i != this.items.length-1) ?
				         					<Row className="justify-content-center m-0 mb-5" >
												<Col sm="10">
													<hr/>
												</Col>
											</Row> 
											:
											false
										}
									</div>
			              		)
			            	})
			        	}
		        </Container>
			</div>
		)
	}
}

export const query = graphql`
	query PostsByOrder {
		allJavascriptFrontmatter (sort: {fields : [frontmatter___date] order: DESC}){
		    edges {
		    	node {
		        	id 
		        	frontmatter {
		          		component
		        		title
		          		date
		          		path
		          		excerpt
		          		tags
		          		country
		          		city
		        	}
		        	fields {
		        		imageNode{
			        		sizes(maxWidth: 2060, cropFocus:SOUTH) {
		          				...GatsbyImageSharpSizes
		          				originalName
	          				}
	          			}
		        	}
		        
		      	}
		    }
		}
  	}`