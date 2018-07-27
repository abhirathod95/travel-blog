import React from 'react'
import Link from 'gatsby-link'
import { 
	Container, 
	Row, 
	Col,
	Button,
} from 'reactstrap';
import Banner from '../components/banner.js'
import WorldMap from '../components/world_map.js'
import HomeCarousel from '../components/carousel.js'
import Tips from  '../components/tips.js'
import TipsBackgroundImg from '../images/tips.jpg'
import Amsterdam0 from '../images/Netherlands/Amsterdam_0.jpg'
import CustomCard from '../components/cards.js'


const CustomCol = (props) => <Col widths={['xs', 'sm', 'md', 'lg', 'xl', 'xxl']} {...props} />;

const items = [
  {'title':'TRAVEL GUIDES', 'src':Amsterdam0, 'date': 'March 10, 2018', 'content': 'This is some quick example text to build on the card title and yeah.'},
  {'title':'ITINERARIES', 'src':Amsterdam0, 'date': 'March 10, 2018', 'content': 'This is some quick example text to build on the card title and yeah.'},
  {'title':'TRAVEL JOURNAL', 'src':TipsBackgroundImg, 'date': 'March 10, 2018', 'content': 'This is some quick example text to build on the card title and yeah.'},
]

const IndexPage = () => (
	<div>
		<Container fluid className="m-0 p-0">
			<Row className="top-carousel m-0">
				<Col>
	    			<HomeCarousel></HomeCarousel>
	  			</Col>
			</Row>
			<Row className="justify-content-center m-0 mb-5 p-5" style={{'backgroundColor':'#229990'}}>
	  			<Col lg="12" xl="6" className="text-center">
	    			<blockquote className="blockquote">
	  					<p className="mb-0 font-weight-bold h2" style={{'color':'white'}}>“Let us step into the night and pursue that flighty temptress, adventure.” </p>
	  					<footer className="blockquote-footer" style={{'color':'white'}}>Albus Dumbledore, <cite >Harry Potter and the Half Blood Prince</cite></footer>
					</blockquote>
  				</Col>
			</Row>
			<Row className="justify-content-center p-0 m-0 mb-5">
				{ items.map((item, i) => {
				  return (
				    <CustomCol key={i}  sm="3">
				      <CustomCard loc={'overlay'} item={item}/>    
				    </CustomCol>
				  )
				})
				}
			</Row>
			<Row className="justify-content-center p-0 m-0 mb-5">
				<Col lg="12" xl="8" className="text-center">
					<p> Welcome to “Where to Next, Doc?” your all-purpose travel guide and itinerary helper to make sure you get the most out of your every trip.</p>
					<p> My name is Ramya, and I’m a second-year medical student (almost a doctor) that just can’t cure my own travel bug. Even though I’m very busy with school, I am here to tell you it is possible for you to plan a well thought out itinerary/budget plan for your adventure on top of school or a full-time job. <br/>Especially with a little bit of my help! </p>
					<p> What I really want my readers to know is that life doesn’t stop. If you are serious about experiencing the world, don’t put it off any longer. Learn something new, understand life around you a little better, and have fun. That is the purpose of travel. </p>
					<p className="m-0 p-0">All I have left to ask is, <br/> <span className="font-weight-bold">Where to next, friend?</span></p>
				</Col>
			</Row>
			<Row className="justify-content-center p-0 m-0 mb-5 p-5" style={{'backgroundColor':'#229990'}}>
	  			<Col>
	    			<h1 className="text-center display-4 m-0 p-0" style={{'color':'white'}}> Where I Have Been </h1>
	  			</Col>
			</Row>
			<Row className="justify-content-center p-0 m-0 mb-5">
	  			<Col lg="12" xl="8">
	    			<WorldMap/>	
	  			</Col>
			</Row>
			<Row className="p-0 m-0 mb-5">
	  			<Col>
	  				<Banner item={{'src':TipsBackgroundImg, 'width':'100vw', 'height':'500px','subHeading':'Better Ways To','heading':'Travel Smarter', 'buttonText':'Read More'}}/>
	  			</Col>
			</Row>
			<Row className="justify-content-center p-0 m-0 mb-5">
	  			<CustomCol>
	    				<Tips/>
	    		</CustomCol>
			</Row>
			<Row className="">
	  			<CustomCol>
	    				<div className="test123" style={{'backgroundImage': "url('" + Amsterdam0 + "')"}}/>
	    		</CustomCol>
			</Row>				
		</Container>
	</div>
)

export default IndexPage
