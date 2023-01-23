import React from 'react'
import { graphql } from 'gatsby'
import Layout from '../components/layout'
import { Container, Row, Col, ListGroup, ListGroupItem } from 'reactstrap'
import WorldMap from '../components/world_map.js'
import Banner from '../components/banner.js'
import CardDeck from '../components/card_deck.js'
import CustomCard from '../components/cards.js'
import Gallery from '../components/gallery.js'
import SEO from '../components/seo.js'
import { getSrc } from 'gatsby-plugin-image'

export default class IndexPage extends React.Component {
  constructor(props) {
    super(props)
    let data = this.props.data

    //console.log(data)

    this.destinations = ["North America", "South America", "Europe", "Africa", "Asia", "Oceania"]

    this.carouselItems = data.latestArticles.edges.map((item, index) => {
      return {
        key: index,
        childImageSharp: item.node.frontmatter.featuredImage.childImageSharp,
        alt: item.node.frontmatter.title,
        heading: item.node.frontmatter.title,
        title: item.node.frontmatter.title,
        link: item.node.frontmatter.path,
        subHeading: 'Explore',
        buttonText: 'Read More',
      }
    })

    this.mapCountData = []

    data.worldMap.groupByCountry.forEach((country) => {
      this.mapCountData[country.fieldValue] = country.totalCount
    })

    this.bucketListItems = data.bucketList.edges.map((item, index) => ({
      title: item.node.title,
      childImageSharp: item.node.image.childImageSharp,
      alt: item.node.title,
      link: item.node.link ? item.node.link : null,
    }))

    this.seo = {
      title: 'Home',
      description:
        'Where to Next, Doc? is a personal travel blog written by a future doctor featuring itineraries, photography, and adventures from around the world to help you plan your next adventure!',
      image:
        this.props.location.origin +
        getSrc(this.carouselItems[0].childImageSharp),
      type: 'website',
      date: new Date().toISOString(),
      category: 'Home',
      keywords: [],
      canonUrl: 'https://wheretonextdoc.com',
    }
  }

  render() {
    return (
      <Layout>
        <SEO url={this.props.location.href} {...this.seo} />
        <Container fluid className="index-container">
          <Row className="top-carousel mb-0">
            <Col>
              {/* <Banner width="100%" height="100vh" item={this.carouselItems[0]} /> */}
              <Banner
                showTextBox={false}
                width="100%"
                height="60vh"
                item={{
                  childImageSharp: this.props.data.banner.childImageSharp,
                  heading: 'About Us',
                }}
              />
            </Col>
          </Row>
          <Row
            className="justify-content-center p-0 m-0 mb-5 p-5"
            style={{ backgroundColor: '#000000' }}
          >
            <Col>
              <h1 className="text-center m-0 p-0" style={{ color: 'white' }}>
                {' '}
                Recent Articles{' '}
              </h1>
            </Col>
          </Row>
          {/* <Row className="justify-content-center p-5" style={{'backgroundColor':'#000000'}}>
			  			<Col lg="12" xl="6" className="text-center">
			    			<blockquote className="blockquote">
			  					<p className="mb-0 font-weight-bold h4" style={{'color':'white'}}>“Let us step into the night and pursue that flighty temptress, adventure.” </p>
			  					<footer className="blockquote-footer" style={{'color':'#FFDF00'}}>Albus Dumbledore, <cite >Harry Potter and the Half Blood Prince</cite></footer>
							</blockquote>
		  				</Col>
					</Row> */}
          <Row className="justify-content-center no-marg-pad">
            <Col lg="10">
              <CardDeck items={this.carouselItems} type={'vertical'} />
            </Col>
          </Row>

          <Row className="justify-content-center p-0">
            <Col lg="12" xl="8" className="text-center">
              <p>
                {' '}
                Welcome to “Where to Next, Doc?” your all-purpose travel guide
                and itinerary helper to make sure you get the most out of your
                every trip.
              </p>
              <p>
                {' '}
                My name is Ramya, and I’m a Neurology resident that just can’t
                cure my own travel bug. Even though I’m very busy, I am always looking forward for that next trip.
                 <br />
              </p>
              <p>
                {' '}
                My goal is to always learn something new, understand life around you
                a little better, and have fun. That is the purpose of travel. I'd like to share these stories and lessons with you.{' '}
              </p>
              <p className="m-0 p-0">
                All I have left to ask is, <br />{' '}
                <span className="font-weight-bold">Where to next, friend?</span>
              </p>
            </Col>
          </Row>
          <Row
            className="justify-content-center p-0 m-0 mb-5 p-5"
            style={{ backgroundColor: '#000000' }}
          >
            <Col>
              <h1 className="text-center m-0 p-0" style={{ color: 'white' }}>
                {' '}
                Where I Have Been{' '}
              </h1>
            </Col>
          </Row>
          <Row className="justify-content-center p-0">
            <Col lg="3" className="d-flex flex-column justify-content-center p-0">
              <h3 className="text-center m-0 p-0">
                Continents Visited 
                <br></br>
              </h3>
              <h1 className="text-center m-0 p-0">
              <b className="visited-num">{this.props.data.worldMap.visitedContinents.length}</b>
                <br></br>
              </h1>
              <div style={{ height: '5vh' }}></div>
              <h3 className="text-center m-0 p-0">
                Countries Visited
              </h3>
              <h1 className="text-center m-0 p-0">
              <b className="visited-num">{this.props.data.worldMap.visitedCountries.length}</b>
                <br></br>
              </h1>
            </Col>
            <Col lg="6">
              <WorldMap articleCount={this.mapCountData} />
            </Col>
            <Col lg="3" className="d-flex flex-column justify-content-center p-0">
              <h3 className="text-center m-0 p-0">
                Cities Visited
              </h3>
              <h1 className="text-center m-0 p-0">
              <b className="visited-num">{this.props.data.worldMap.visitedCities.length}</b>
                <br></br>
              </h1>
              <div style={{ height: '5vh' }}></div>
              <h3 className="text-center m-0 p-0">
                National Parks Visited
              </h3>
              <h1 className="text-center m-0 p-0">
              <b className="visited-num">{this.props.data.visitedParks.totalCount}</b>
                <br></br>
              </h1>
            </Col>
          </Row>
          <Row
            className="justify-content-center p-0 m-0 mb-5 p-5"
            style={{ backgroundColor: '#000000' }}
          >
            <Col>
              <h1 className="text-center m-0 p-0" style={{ color: 'white' }}>
                {' '}
                Bucket List Experiences{' '}
              </h1>
            </Col>
          </Row>
          <Row>
            <Col>
              <Gallery
                items={this.bucketListItems.map((item, i) => (
                  <div key={i} className="bucket-list-gallery">
                    {' '}
                    <CustomCard cardType="vertical" item={item} />
                  </div>
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

export const query = graphql`query {
  banner: file(relativePath: { regex: "/home_banner/" }) {
    childImageSharp {
      gatsbyImageData(layout: CONSTRAINED)
    }
  }
  worldMap: allMarkdownRemark {
    groupByCountry: group(field: {frontmatter: {country: SELECT}}) {
      fieldValue
      totalCount
    }
    visitedContinents: distinct(field:{frontmatter: {continent:SELECT}}) 
    visitedCountries: distinct(field:{frontmatter: {country:SELECT}})
    visitedCities: distinct(field:{frontmatter: {city:SELECT}})
  }
  latestArticles: allMarkdownRemark(limit: 3, sort: {frontmatter: {date: DESC}}) {
    edges {
      node {
        frontmatter {
          title
          path
          featuredImage {
            childImageSharp {
              gatsbyImageData(layout: FULL_WIDTH)
            }
          }
        }
      }
    }
  }
  visitedParks: allMarkdownRemark(filter: {frontmatter: {tags: {in: "National park"}}}){
    totalCount
  }
  bucketList: allBucketListJson {
    edges {
      node {
        title
        link
        image {
          childImageSharp {
            gatsbyImageData(width: 572, layout: CONSTRAINED)
          }
        }
      }
    }
  }
}`
