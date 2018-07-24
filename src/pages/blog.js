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

const CustomCol = (props) => <Col widths={['xs', 'sm', 'md', 'lg', 'xl', 'xxl']} {...props} />;
const items = [
  {
    src: Amsterdam0,
    altText: 'Slide 1',
    caption: 'Amsterdam'
  },
  {
    src: Chicago0,
    altText: 'Slide 2',
    caption: 'Chicago'
  },
  {
    src: Page0,
    altText: 'Slide 3',
    caption: 'Arizona'
  }
];

const BlogPage = () => (
	<div>
		<Banner item={{'src':Amsterdam0, 'alt': 'Amsterdam', 'width':'100vw', 'height':'50vh','subHeading':'Better Ways To','heading':'Travel Smarter', 'buttonText':'Read More'}}/>
		<Container fluid>
			<Row className="mt-5 justify-content-center">
	  			<Col sm="8">
	  				<div className="d-flex flex-row">
	    				<div style={{'flexGrow': '1'}}>
	    					<hr/>
	    				</div>
	    				<div className="pl-5 pr-5" style={{'flexBasis': 'auto'}}> 
	    					March 12, 2018 
	    				</div>
	    				<div style={{'flexGrow': '1'}}>
	    					<hr/>
	    				</div>
	    			</div>
	  			</Col>
			</Row>

			<Row className="m-0 justify-content-center" >
				<CustomCol sm="auto">
					<CardImg src={Amsterdam0} className="img-fluid" alt="Card image cap" style={{'objectFit':'cover','width': '300px', 'height': '250px'}}/>
				</CustomCol>
				<Col sm="6">
		            <CardBody >
		                <CardTitle>Card title</CardTitle>
		                <CardSubtitle>Card subtitle</CardSubtitle>
		                <CardText>Some quick example text to build on the card title and make up the bulk of the card's content.</CardText>
		                <Button>Button</Button>
	            	</CardBody>
				</Col>
			</Row>
			<Row className="m-0 justify-content-center " >
				<Col sm="auto">
					<div className="test-test" style={{'backgroundImage': 'url(' + Amsterdam0 + ')'}}></div>
				</Col>
				<Col sm="6">
		            <CardBody >
		                <CardTitle>Card title</CardTitle>
		                <CardSubtitle>Card subtitle</CardSubtitle>
		                <CardText>Some quick example text to build on the card title and make up the bulk of the card's content.</CardText>
		                <Button>Button</Button>
	            	</CardBody>
				</Col>
			</Row>
        </Container>
	</div>
)

export default BlogPage
