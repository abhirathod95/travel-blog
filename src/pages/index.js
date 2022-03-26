import React from 'react';
import { graphql } from 'gatsby';
import Layout from "../components/layout";
import {
	Container,
	Row,
	Col,
} from 'reactstrap';
import WorldMap from '../components/world_map.js';
import HomeCarousel from '../components/carousel.js';
import CardDeck from  '../components/card_deck.js';
import CustomCard from '../components/cards.js';
import Gallery from '../components/gallery.js';
import SEO from '../components/seo.js';

export default class IndexPage extends React.Component {
	constructor(props) {
		super(props);

		let data = this.props.data;

		console.log(data)

		this.carouselItems = data.allMarkdownRemark.edges.map((item, index) => {
			return ({
				key: index,
				fluid: item.node.frontmatter.featuredImage.childImageSharp.fluid,
				alt: item.node.frontmatter.title,
				heading: item.node.frontmatter.title,
				link: item.node.frontmatter.path,
				subHeading: 'Explore', buttonText: 'Read More'
			})
		});

		this.cardItems = [
			{'title':'TRAVEL GUIDES', 'fluid':data.allImageSharp.edges[0].node.fluid, alt: 'Amsterdam', 'date': 'March 10, 2018', 'content': 'This is some quick example text to build on the card title and yeah.', link: '/tags/travel-guide'},
			{'title':'ITINERARIES', 'fluid':data.allImageSharp.edges[1].node.fluid, alt: 'Amsterdam', 'date': 'March 10, 2018', 'content': 'This is some quick example text to build on the card title and yeah.', link: '/tags/itinerary'},
			{'title':'HEALTH & TRAVEL', 'fluid':data.allImageSharp.edges[2].node.fluid, alt: 'Amsterdam', 'date': 'March 10, 2018', 'content': 'This is some quick example text to build on the card title and yeah.'},
		];

		this.tipCards = [
			{fluid: data.allImageSharp.edges[0].node.fluid, alt: 'Amsterdam', 'title':'OUR FAVORITE 10 DESIGN HOTELS WORLDWIDE', 'date': 'March 10, 2018', 'content': 'This is some quick example text to build on the card title and yeah.'},
			{fluid: data.allImageSharp.edges[0].node.fluid, alt: 'Amsterdam', 'title':'OUR FAVORITE 10 DESIGN HOTELS WORLDWIDE', 'date': 'March 10, 2018', 'content': 'This is some quick example text to build on the card title and yeah.'},
			{fluid: data.allImageSharp.edges[0].node.fluid, alt: 'Amsterdam', 'title':'OUR FAVORITE 10 DESIGN HOTELS WORLDWIDE', 'date': 'March 10, 2018', 'content': 'This is some quick example text to build on the card title and yeah.'},
		]

		this.mapCountData = []

		data.worldMap.groupByCountry.forEach((country) => {
			this.mapCountData[country.fieldValue] = country.totalCount
		});

  	this.bucketListItems = data.bucketList.edges.map((item, index) => (
			{
				'title': item.node.title,
				'fluid': item.node.image.childImageSharp.fluid,
				'alt': item.node.title,
				"link": item.node.link ? item.node.link : null,
			}
		));

		this.seo = {
			"title": "Home",
			"description": "Description",
			"image": this.props.location.origin + this.carouselItems[0].fluid.src,
			"type": "website",
			"date": new Date().toISOString(),
			"category": "Home",
			"keywords": [],
			"canonUrl": "https://wheretonextdoc.com"
		}

	}

	render() {
  		return(
			<Layout>
      	<SEO url={this.props.location.href} {...this.seo}/>
				<Container fluid className="index-container">
					<Row className="top-carousel mb-0">
						<Col>
			    			<HomeCarousel items={this.carouselItems}></HomeCarousel>
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
					<Row className="justify-content-center no-marg-pad">
						<Col lg="9">
							<CardDeck items={this.cardItems} type={"overlay"}/>
						</Col>
					</Row>
					<Row className="justify-content-center p-0">
						<Col lg="12" xl="8" className="text-center">
							<p> Welcome to “Where to Next, Doc?” your all-purpose travel guide and itinerary helper to make sure you get the most out of your every trip.</p>
							<p> My name is Ramya, and I’m a Neurology resident that just can’t cure my own travel bug. Even though I’m very busy with school, I am here to tell you it is possible to plan a well thought out itinerary/budget plan for your adventure on top of school or a full-time job. <br/>Especially with a little bit of my help! </p>
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
			    			<WorldMap articleCount={this.mapCountData}/>
			  			</Col>
					</Row>
					<Row className="justify-content-center p-0 m-0 mb-5 p-5" style={{'backgroundColor':'#000000'}}>
			  			<Col>
			    			<h1 className="text-center m-0 p-0" style={{'color':'white'}}> Bucket List Experiences </h1>
			  			</Col>
					</Row>
					<Row>
			  			<Col>
			  				<Gallery items={this.bucketListItems.map((item, i) => (
							        <div key={i} className="bucket-list-gallery" > <CustomCard cardType="vertical" item={item}/></div>
						      	))}
		  					/>
			  			</Col>
					</Row>

					{/*
					<Row className="p-0 m-0 mb-5">
			  			<Col>
			  				<Banner width="100%" height="500px" item={{'fluid':this.props.data.allImageSharp.edges[1].node.fluid, 'subHeading':'Better Ways To','heading':'Travel Smarter', 'buttonText':'Read More', 'link':'/'}}/>
			  			</Col>
					</Row>
					<Row className="justify-content-center p-0">
						<Col lg="9">
							<CardDeck items={this.tipCards} type={"vertical"}/>
						</Col>
					</Row>
					<Row className="">
			  			<CustomCol>
			    				<div className="test123" style={{'backgroundImage': "url('" + this.props.data.allImageSharp.edges[1].node.fluid + "')"}}/>
			    		</CustomCol>
					</Row>
					*/}

				</Container>
			</Layout>
		)
	}
}


export const query = graphql`
	query test {
		allImageSharp(filter : {fluid : {originalName: {regex : "/Image_/"} }}, sort: {fields : [fluid___originalName]}){
    		edges {
      			node{
					id
        			fluid(maxWidth: 2060, cropFocus:SOUTH) {
          				...GatsbyImageSharpFluid
          				originalName
          			}
    			}
  			}
		}
		worldMap: allMarkdownRemark {
			groupByCountry: group(field: frontmatter___country) {
			  fieldValue
			  totalCount
			}
		}
		allMarkdownRemark(
		    limit: 3
			sort: { order: DESC, fields: [frontmatter___date] }
		) {
			edges {
			  node {
			    frontmatter {
			      title,
			      path,
			      featuredImage {
			        childImageSharp {
			          fluid(maxWidth: 2545, srcSetBreakpoints: [573, 764, 986, 1193, 1909, 2546]) {
	              	...GatsbyImageSharpFluid
			          }
			        }
			      }
			    }
			  }
			}
		}
		bucketList: allBucketListJson {
	    edges {
				node {
					title
					link
					image {
		        childImageSharp {
		          fluid(maxWidth: 572, srcSetBreakpoints: [130, 173, 223, 270, 432, 572]) {
                ...GatsbyImageSharpFluid
		          }
		        }
					}
				}
	    }
  	}
	}
`
