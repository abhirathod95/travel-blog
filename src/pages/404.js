import React from 'react'
import Layout from '../components/layout'
import { Link } from 'gatsby'
import SEO from '../components/seo.js'
import { Container, Row, Col } from 'reactstrap'

export default function Error(props) {
  return (
    <Layout>
      <SEO
        url={props.location.href}
        description="404 Error: Page not found"
        title={'404 Error'}
        type="article"
        date={new Date().toISOString()}
        category="404 Error"
      />
      <Container fluid className="blog-post">
        <Row>
          <Col>
            <h1 className="text-center display-3">Oops!</h1>
          </Col>
        </Row>
        <Row>
          <Col xs="6">
            <p>Looks like we can't find the page you're looking for.</p>
            <p>
              <Link to="/">Click here to navigate back to the home page.</Link>
            </p>
          </Col>
        </Row>
      </Container>
    </Layout>
  )
}
