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
		<Container fluid className="m-0 p-0">
			<Row className="m-0 p-0 mb-5">
				<Banner showTextBox={false} item={{'src':NewZealand0, 'alt': 'Amsterdam', 'width':'100vw', 'height':'50vh','subHeading':'Better Ways To','heading':'Travel Smarter', 'buttonText':'Read More'}}/>
			</Row> 
			<Row className="justify-content-center m-0 mb-5">
				<CustomCol sm="3" className="wrapper">
					<CardImg src={Amsterdam0} className="img-fluid" alt="Card image cap" />
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
			<Row className="justify-content-center m-0 mb-5" >
				<Col sm="10">
					<hr/>
				</Col>
			</Row>
			<Row className="justify-content-center m-0 mb-5" >
				<CustomCol sm="3" className="wrapper">
					<CardImg src={Amsterdam0} className="img-fluid" alt="Card image cap" />
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
        </Container>
	</div>
)

export default BlogPage
