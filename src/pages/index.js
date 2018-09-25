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
import CardDeck from  '../components/card_deck.js'
import CustomCard from '../components/cards.js'

import Img from "gatsby-image";

const CustomCol = (props) => <Col widths={['xs', 'sm', 'md', 'lg', 'xl', 'xxl']} {...props} />;


export default class IndexPage extends React.Component {
	constructor(props) {
		super(props);
		var data = this.props.data;

		this.carouselitems = [
			{key: 1, sizes: data.allImageSharp.edges[0].node.sizes, alt: 'Amsterdam', heading: 'Amsterdam', link: '/', subHeading: 'Explore', buttonText: 'Read More'},
			{key: 2, sizes: data.allImageSharp.edges[1].node.sizes, alt: 'Chicago', heading: 'Chicago', link: '/', subHeading: 'Explore', buttonText: 'Read More'},
			{key: 3, sizes: data.allImageSharp.edges[2].node.sizes, alt: 'Dallas', heading: 'Dallas', link: '/', subHeading: 'Explore', buttonText: 'Read More'},
		]

		this.cardItems = [
			{'title':'TRAVEL GUIDES', 'sizes':data.allImageSharp.edges[0].node.sizes, alt: 'Amsterdam', 'date': 'March 10, 2018', 'content': 'This is some quick example text to build on the card title and yeah.'},
			{'title':'ITINERARIES', 'sizes':data.allImageSharp.edges[1].node.sizes, alt: 'Amsterdam', 'date': 'March 10, 2018', 'content': 'This is some quick example text to build on the card title and yeah.'},
			{'title':'TRAVEL JOURNAL', 'sizes':data.allImageSharp.edges[2].node.sizes, alt: 'Amsterdam', 'date': 'March 10, 2018', 'content': 'This is some quick example text to build on the card title and yeah.'},
		];

		this.tipCards = [
			{sizes: data.allImageSharp.edges[0].node.sizes, alt: 'Amsterdam', 'title':'OUR FAVORITE 10 DESIGN HOTELS WORLDWIDE', 'date': 'March 10, 2018', 'content': 'This is some quick example text to build on the card title and yeah.'},
			{sizes: data.allImageSharp.edges[0].node.sizes, alt: 'Amsterdam', 'title':'OUR FAVORITE 10 DESIGN HOTELS WORLDWIDE', 'date': 'March 10, 2018', 'content': 'This is some quick example text to build on the card title and yeah.'},
			{sizes: data.allImageSharp.edges[0].node.sizes, alt: 'Amsterdam', 'title':'OUR FAVORITE 10 DESIGN HOTELS WORLDWIDE', 'date': 'March 10, 2018', 'content': 'This is some quick example text to build on the card title and yeah.'},
		]

	}

	render() {
  		return(
			<div>
				<Container fluid className="p-0 m-0">
					<Row className="top-carousel mb-0">
						<Col>	
			    			<HomeCarousel items={this.carouselitems}></HomeCarousel>
			  			</Col>
					</Row>
					<Row className="justify-content-center p-5" style={{'backgroundColor':'#000000'}}>
			  			<Col lg="12" xl="6" className="text-center">
			    			<blockquote className="blockquote">
			  					<p className="mb-0 font-weight-bold h4" style={{'color':'white'}}>“Let us step into the night and pursue that flighty temptress, adventure.” </p>
			  					<footer className="blockquote-footer" style={{'color':'#FFDF00'}}>Albus Dumbledore, <cite >Harry Potter and the Half Blood Prince</cite></footer>
							</blockquote>
		  				</Col>
					</Row>
					<Row className="justify-content-center p-0">
						{ this.cardItems.map((item, i) => {
						  return (
						    <CustomCol key={i} sm="12" md="4" lg="4" xl="3">
						      <CustomCard loc={'overlay'} item={item}/>    
						    </CustomCol>
						  )
						})
						}
					</Row>
					<Row className="justify-content-center p-0">
						<Col lg="12" xl="8" className="text-center">
							<p> Welcome to “Where to Next, Doc?” your all-purpose travel guide and itinerary helper to make sure you get the most out of your every trip.</p>
							<p> My name is Ramya, and I’m a second-year medical student (almost a doctor) that just can’t cure my own travel bug. Even though I’m very busy with school, I am here to tell you it is possible for you to plan a well thought out itinerary/budget plan for your adventure on top of school or a full-time job. <br/>Especially with a little bit of my help! </p>
							<p> What I really want my readers to know is that life doesn’t stop. If you are serious about experiencing the world, don’t put it off any longer. Learn something new, understand life around you a little better, and have fun. That is the purpose of travel. </p>
							<p className="m-0 p-0">All I have left to ask is, <br/> <span className="font-weight-bold">Where to next, friend?</span></p>
						</Col>
					</Row>
					<Row className="justify-content-center p-0 m-0 mb-5 p-5" style={{'backgroundColor':'#000000'}}>
			  			<Col>
			    			<h1 className="text-center m-0 p-0" style={{'color':'white'}}> Where I Have Been </h1>
			  			</Col>
					</Row>
					<Row className="justify-content-center p-0 ">
			  			<Col lg="12" xl="8">
			    			<WorldMap/>	
			  			</Col>
					</Row>
					<Row className="p-0 m-0 mb-5">
			  			<Col>
			  				<Banner width="100%" height="500px" item={{'sizes':this.props.data.allImageSharp.edges[1].node.sizes, 'subHeading':'Better Ways To','heading':'Travel Smarter', 'buttonText':'Read More', 'link':'/'}}/>
			  			</Col>
					</Row>
					<Row className="justify-content-center p-0">
			  			<CustomCol>
			    				<CardDeck items={this.tipCards}/>
			    		</CustomCol>
					</Row>
					<Row className="">
			  			<CustomCol>
			    				<div className="test123" style={{'backgroundImage': "url('" + this.props.data.allImageSharp.edges[1].node.sizes + "')"}}/>
			    		</CustomCol>
					</Row>
			
				</Container>
			</div>
		)
	}
}


export const query = graphql`
	query test {
		allImageSharp  (filter : {id : {regex : "/Other/"} }, sort: {fields : [id]} ) {
    		edges {
      			node{
					id
        			sizes(maxWidth: 2060, cropFocus:SOUTH) {
          				...GatsbyImageSharpSizes
          				originalName
          			}
    			}
  			}
		}
  	}`