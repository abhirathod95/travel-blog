import React from 'react'
import Link from 'gatsby-link'
import WorldMap from '../components/world_map.js'
import HomeCarousel from '../components/carousel.js'
import { Container, Row, Col } from 'reactstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'


const IndexPage = () => (
	<div>
		<div className="img-overlay"></div>	
		<div className="bg"></div>	
		<Container fluid>
			<div className="row justify-content-center">
	  			<div className="col-lg-12 col-xl-6 text-center">
	    			<blockquote className="blockquote">
	  					<p className="mb-0 font-weight-bold">“Let us step into the night and pursue that flighty temptress, adventure.” </p>
	  					<footer className="blockquote-footer">Albus Dumbledore, <cite >Harry Potter and the Half Blood Prince</cite></footer>
					</blockquote>
					<br/>
					<p> Welcome to “Where to Next, Doc?” your all-purpose travel guide and itinerary helper to make sure you get the most out of your every trip.</p>
					<p> My name is Ramya, and I’m a second-year medical student (almost a doctor) that just can’t cure my own travel bug. Even though I’m very busy with school, I am here to tell you it is possible for you to plan a well thought out itinerary/budget plan for your adventure on top of school or a full-time job. <br/>Especially with a little bit of my help! </p>
					<p> What I really want my readers to know is that life doesn’t stop. If you are serious about experiencing the world, don’t put it off any longer. Learn something new, understand life around you a little better, and have fun. That is the purpose of travel. </p>
					<p className="m-0 p-0">All I have left to ask is, <br/> <span className="font-weight-bold">Where to next, friend?</span></p>
	  			</div>
			</div>
			<div className="row justify-content-center">
	  			<div className="col-lg-12 col-xl-8">
	    			<hr/>
	  			</div>
			</div>
			<div className="row justify-content-center m-0 p-0">
	  			<div className="col">
	    			<h3 className="text-center"> Where I Have Been </h3>
	  			</div>
			</div>
			<div className="row justify-content-center">
	  			<div className="col-lg-12 col-xl-6">
	    			<WorldMap/>	
	  			</div>
			</div>
			<div className="row top-carousel">
				<div className="col">
	    			<HomeCarousel></HomeCarousel>
	  			</div>
			</div>

		</Container>
	</div>
)

export default IndexPage
