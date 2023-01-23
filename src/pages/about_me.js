import React from 'react'
import Layout from '../components/layout'
import SEO from '../components/seo.js'
import { graphql } from 'gatsby'
import { Container, Row, Col } from 'reactstrap'
import Banner from '../components/banner.js'
import { getSrc } from 'gatsby-plugin-image'

export default function AboutMe(props) {
  return (
    <Layout>
      <SEO
        url={props.location.href}
<<<<<<< HEAD
        description="Meet the author and the creator of the travel blog, Where to Next, Doc? and find out more about the story behind their blog. "
        image={props.location.origin + getSrc(props.data.file.childImageSharp)}
        title={'About Us'}
        type="article"
        date={new Date().toISOString()}
        category="About Us"
=======
        description="Meet the author of the travel blog, Where to Next, Doc? and find out more about the story behind her blog. "
        image={props.location.origin + getSrc(props.data.file.childImageSharp)}
        title={'About Me'}
        type="article"
        date={new Date().toISOString()}
        category="About Me"
>>>>>>> 8c0cec35b512b4e023993e4fccebfd033f67d5c1
      />
      <Container fluid className="blog-post">
        <Row>
          <Banner
            showTextBox={false}
            width="100%"
            height="50vh"
            item={{
              childImageSharp: props.data.file.childImageSharp,
<<<<<<< HEAD
              heading: 'About Us',
=======
              heading: 'About Me',
>>>>>>> 8c0cec35b512b4e023993e4fccebfd033f67d5c1
            }}
          />
        </Row>
        <Row>
          <Col>
            <h1 className="text-center display-3">About Us</h1>
          </Col>
        </Row>
        <Row>
          <Col xs="6">
            <p>
<<<<<<< HEAD
              My name is Ramya, and I am currently a resident
              living in Texas with a hobby of photography and traveling. 
              Abhi is my husband, who graduated with a computer science
              degree, and helped build the website from scratch. 
=======
              My name is Ramya, and I am currently a third-year medical student
              living in Texas with a hobby of writing about my travels in the
              little spare moments I have. I find writing and editing my photos
              from my travels therapeutic after many long hours of studying, and
              I figured why not put together a blog that I can share with other
              people.
>>>>>>> 8c0cec35b512b4e023993e4fccebfd033f67d5c1
            </p>
            <p>
              My love to travel was something I learned from my parents who are
              also avid explorers themselves. You can say that the phrase,
              “Where to Next?” is basically our family motto. Even though I am
<<<<<<< HEAD
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
=======
              in medical school, I haven’t given up on seeing more of the world.
              In fact, the lessons I learn from traveling help me be a better
              culturally informed and adaptable physician-to-be. As a bonus,
              they are applicable everywhere in all areas of life too! Don’t you
              think we could all learn to appreciate each other more if we could
              just understand each other’s way of life by experiencing it for
              ourselves? I certainly do. The skill to plan a good vacation is
              something that takes several trips to learn, and the research
              always takes hours to do. However, the hard work pays when I see
              the people I travel with enjoy the experiences, food, and city to
              the fullest. Maybe I can be of some assistance for you and your
              family, friends, and significant others to feel the same way.
            </p>
            <p>
              Some of the other things I like to do is play with my dog, Merlin,
              and cat, Mika, eat tacos and Thai food, and find new video games
              to watch and play with my husband!
>>>>>>> 8c0cec35b512b4e023993e4fccebfd033f67d5c1
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
  query AboutMeImage {
    file(relativePath: { regex: "/Image_4/" }) {
      childImageSharp {
        gatsbyImageData(layout: CONSTRAINED)
      }
    }
  }
`
