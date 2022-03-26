import React from 'react';
import Helmet from 'react-helmet';
import Layout from "../components/layout";
import SEO from '../components/seo.js';
import { graphql } from 'gatsby';
import {
  Container,
  Row,
  Col,
} from 'reactstrap';
import Banner from '../components/banner.js';

export default function AboutMe(props) {

  return (
    <Layout>
      <SEO url={props.location.href} description="Description" image={props.location.origin + props.data.imageSharp.fluid.src} title={"About Me"} type="article" date={new Date().toISOString()} category="About Me"/>
      <Container fluid className="blog-post">
        <Row>
          <Banner showTextBox={false} width="100%" height="50vh" item={{'fluid':props.data.imageSharp.fluid,'heading':'About Me',}}/>
        </Row>
        <Row>
          <Col>
            <h1 className="text-center display-3">About Me</h1>
          </Col>
        </Row>
        <Row>
          <Col xs="6">
            <p>
              My name is Ramya, and I am a neurology resident in Texas with a love for travel. I started my personal travel blog to document my own travels and to share what I had learned on my adventures. While I admired those who were able to make a career out of travel, I knew my heart belonged in medicine and travel is a hobby. This blog is for others like me who do not have weeks or months to explore a country and may only get to visit a country once. My travel bug was something I caught from my parents who are also avid explorers themselves. You can say that the words, “Where to Next?” are basically our family motto. Even though I am in residency, I haven’t given up on seeing more of the world. In fact, the lessons I learn from traveling help me be a better culturally informed, adaptable physician and are applicable everywhere in all areas of life. Don’t you think we could all learn to appreciate each other more if we could just understand each other’s way of life by experiencing it for ourselves? I certainly do.             </p>
            <p>
              Some of the other things I like to do is play with my dog, Merlin, and cat, Mika, eat tacos and Thai food, and find new video games to watch and play with my husband!
            </p>
            <p className="text-center">
              <strong>Thank you for visiting my site!</strong>
            </p>
          </Col>
        </Row>

      </Container>
    </Layout>
  );
}


export const query = graphql`
  query AboutMeImage {
    imageSharp(fluid : {originalName : {regex : "/Image_4.jpg/"}}) {
      fluid(maxWidth: 2545, srcSetBreakpoints: [573, 764, 986, 1193, 1909, 2545], cropFocus:SOUTH) {
        ...GatsbyImageSharpFluid
        originalName
      }
    }
  }
`
