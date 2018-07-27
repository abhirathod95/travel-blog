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
import Chicago0 from '../images/United States of America/Illinois/Chicago_0.jpg'
import Page0 from '../images/United States of America/Arizona/Page_0.jpg'
import Amsterdam0 from '../images/Netherlands/Amsterdam_0.jpg'
import NewZealand0 from '../images/New Zealand/NA_0.jpg'
import CustomCard from '../components/cards.js'

const CustomCol = (props) => <Col widths={['xs', 'sm', 'md', 'lg', 'xl', 'xxl']} {...props} />;


const items = [
  {'title':'OUR FAVORITE 10 DESIGN HOTELS WORLDWIDE', 'buttonText' : 'Read More', 'subtitle' : 'subtitle', 'src': Amsterdam0, 'date': 'March 10, 2018', 'content': 'This is some quick example text to build on the card title and yeah.'},
  {'title':'OUR FAVORITE 10 DESIGN HOTELS WORLDWIDE', 'src': NewZealand0, 'date': 'March 10, 2018', 'content': 'This is some quick example text to build on the card title and yeah.'},
  {'title':'OUR FAVORITE 10 DESIGN HOTELS WORLDWIDE', 'src': Page0, 'date': 'March 10, 2018', 'content': 'This is some quick example text to build on the card title and yeah.'},
]

const BlogPage = () => (
	<div>
		<Container fluid className="m-0 p-0">
			<Row className="m-0 p-0 mb-5">
				<Banner showTextBox={false} item={{'src':NewZealand0, 'alt': 'Amsterdam', 'width':'100vw', 'height':'50vh','subHeading':'Better Ways To','heading':'Travel Smarter', 'buttonText':'Read More'}}/>
			</Row> 
	        	{ 
	        		items.map((item, i) => {
		        		return (
		        			<div>
		        				<CustomCard key={i} item={item}/> 
			        			{ (i != items.length-1) ?
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

export default BlogPage
