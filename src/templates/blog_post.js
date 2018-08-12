import React from 'react';
import Helmet from 'react-helmet'
import { 
  Container, 
  Row, 
  Col,
  Button,
} from 'reactstrap';
import Banner from '../components/banner.js'
import Chicago0 from '../images/United States of America/Illinois/Chicago_2.jpg'

export default function Blog({data}) {
  const post = data.markdownRemark; 
  return (
    <div>
    <Helmet title={post.frontmatter.title} />
    <Container fluid>
      <Row>
        <Banner showBottomText showTextBox={false} width="100%" height="50vh" item={{'src':Chicago0, 'subHeading':'Better Ways To','heading':'Travel Smarter', 'buttonText':'Read More', 'link':'/'}}/>
      </Row>
      <Row className="justify-content-center">
        <Col xs="12" sm="10" md="8" lg="6">
          <h1 className="text-center">{post.frontmatter.title}</h1>
          <h5 className="text-center">{post.frontmatter.date}</h5>
        </Col>
      </Row>
      <Row className="justify-content-center">
        <Col xs="12" sm="10" md="8" lg="6">
          <div dangerouslySetInnerHTML={{ __html: post.html }} />
        </Col>
      </Row>
    </Container>
    </div>
  );
}

export const pageQuery = graphql`
  query BlogPostByPath($path: String!) {
    markdownRemark(frontmatter: { 
    	path: { 
    		eq: $path 
    	} 
    }) 
    {
      html
      frontmatter {
        date(formatString: "MMMM DD, YYYY")
        path
        title
      }
    }
  }
`
;