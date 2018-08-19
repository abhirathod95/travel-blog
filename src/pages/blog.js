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
import Chicago0 from '../images/United States of America/Illinois/Chicago_00.jpg'
import Page0 from '../images/United States of America/Arizona/Page_0.jpg'
import Amsterdam0 from '../images/Netherlands/Amsterdam_0.jpg'
import NewZealand0 from '../images/New Zealand/NA_0.jpg'
import CustomCard from '../components/cards.js'

const CustomCol = (props) => <Col widths={['xs', 'sm', 'md', 'lg', 'xl', 'xxl']} {...props} />;


export default class BlogPage extends React.Component {
	constructor(props) {
		super(props);

		this.items = []

		console.log(this.props.data.allJavascriptFrontmatter.edges)

		this.props.data.allJavascriptFrontmatter.edges.forEach(item => {
			this.items.push({
				sizes: item.node.fields.imageNode.sizes, 
				alt: item.node.frontmatter.city, 
				date: item.node.frontmatter.date, 
				title: item.node.frontmatter.title, 
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