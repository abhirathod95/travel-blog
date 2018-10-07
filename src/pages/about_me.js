import React from 'react';
import Helmet from 'react-helmet';
import Layout from "../components/layout";
import { 
  Container, 
  Row, 
  Col,
} from 'reactstrap';
import Banner from '../components/banner.js';

export default function AboutMe(props) {
  console.log(props)
  return (
    <Layout>
      <Helmet title={"About Me"} />
      <Container fluid className="blog-post">
        <Row>
          <Banner showBottomText showTextBox={false} width="100%" height="50vh" item={{'fluid':props.data.imageSharp.fluid,'heading':'About Me',}}/>
        </Row>
        <Row>
        </Row>
        <Row>
          <Col xs="6">
            <p>
              My name is Ramya, and I am currently a second-year medical student living in Texas with a serious hobby of blogging about my travels in the little spare moments I have. I find writing and editing my photos from my travels therapeutic after some serious hours of studying, and I figured why not put together a blog that I can share with other people. Traveling can seem daunting, especially when you are a working individual with a 9 to 5 job. But it doesn’t have to be. You don’t have to quit your job and spend your savings in order to experience the world; you just need to know how to travel smarter. 
            </p>
            <p>
              My love to travel was something I learned from my parents who are also avid explorers themselves. You can say that the words, “Where to Next?”, are basically our family motto. Even though I am in medical school, I haven’t given up on seeing more of the world. In fact, the lessons I learn from traveling helps me be a better culturally informed and adaptable physician-to-be, but they are applicable everywhere in all areas of life. Don’t you think we could all learn to love each other more if we could just understand each other’s way of life by experiencing it for ourselves. I certainly do. 
            </p>
            <p>
              The skill to plan a good vacation is something that takes several trips to learn, and the research always takes hours to do. However, the hard work pays when I see the people I travel with enjoy the experiences, food, and city to the fullest. Maybe I can be of some assistance for you and your family, friends, and significant others to feel the same way. 
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
      fluid(maxWidth: 2060, cropFocus:SOUTH) {
        ...GatsbyImageSharpFluid
        originalName
      }
    }
  }
`