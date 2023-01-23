import React from 'react'
import Layout from '../components/layout'
import SEO from '../components/seo.js'
import { graphql } from 'gatsby'
import { Container, Row, Col } from 'reactstrap'
import Banner from '../components/banner.js'
import { getSrc } from 'gatsby-plugin-image'

export default function AboutUs(props) {
  return (
    <Layout>
      <SEO
        url={props.location.href}
        description="Meet the author of the travel blog, Where to Next, Doc? and find out more about the story behind her blog. "
        image={props.location.origin + getSrc(props.data.banner.publicURL)}
        title={'About Us'}
        type="article"
        date={new Date().toISOString()}
        category="About Us"
     />
      <Container fluid className="blog-post">
        <Row>
          <Banner
            showTextBox={false}
            width="100%"
            height="50vh"
            item={{
              heading: 'About Us',
              childImageSharp: props.data.banner.childImageSharp,
              heading: 'About Us',
            }}
          />
        </Row>
        <Row>
          <Col>
            <h1 className="text-center display-3">About Us</h1>
          </Col>
        </Row>
        <Row>
          <Col xs="3">
            <Banner
              showTextBox={false}
              height="50vh"
              item={{
                childImageSharp: props.data.us.childImageSharp,
                heading: 'About Us',
              }}
            />
          </Col>
          <Col xs="4">
            <p>
              My name is Ramya, and I am currently a resident
              living in Texas with a hobby of photography and traveling. 
              Abhi is my husband, who graduated with a computer science
              degree, and helped build the website from scratch. 
            </p>
            <p>
              My love to travel was something I learned from my parents who are
              also avid explorers themselves. You can say that the phrase,
              “Where to Next?” is basically our family motto. Even though I am
              a busy doctor in training, I haven’t given up on seeing the world. 
              And now I share this passion with my husband, Abhi as well. 
            </p>
            <p> 
              This is a personal blog that was started as a joint hobby for my 
              husband and I to share my previous photos and adventures and the new 
              ones we go on together, and we hope it may help some looking to 
              plan their next vacation as well! 
            </p>
            <p>
              Some of the other things we like to do is play with our dog, Merlin,
              and cat, Mika, eat tacos and Thai food, and find new video games
              to play!
            </p>
            <p className="text-center">
              <strong>Thank you for visiting our site!</strong>
            </p>
          </Col>
        </Row>
      </Container>
    </Layout>
  )
}

export const query = graphql`
  query {
    banner: file(relativePath: { regex: "/Image_4/" }) {
      childImageSharp {
        gatsbyImageData(layout: CONSTRAINED)
      }
      publicURL
    }
    us: file(relativePath: { regex: "/about_us/" }) {
      childImageSharp {
        gatsbyImageData(layout: CONSTRAINED)
      }
    }
  }
`
