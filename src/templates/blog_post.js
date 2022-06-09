import React from 'react'
import Layout from '../components/layout'
import { Container, Row, Col } from 'reactstrap'
import { graphql } from 'gatsby'
import Banner from '../components/banner.js'
import SEO from '../components/seo.js'
import { getSrc } from 'gatsby-plugin-image'

export default class BlogPostTemplate extends React.Component {
  constructor(props) {
    super(props)

    this.tableOfContents = props.data.markdownRemark.tableOfContents
    this.frontmatter = props.data.markdownRemark.frontmatter
    this.html = props.data.markdownRemark.html

    console.log(props.data.relatedMarkdownRemarks)
  }

  render() {
    const CustomCol = (props) => (
      <Col widths={['xs', 'sm', 'md', 'lg', 'xl', 'xxl']} {...props} />
    )
    let bannerTitle
    if (
      !Array.isArray(this.frontmatter.city) ||
      !this.frontmatter.city.length
    ) {
      bannerTitle = this.frontmatter.title
    } else {
      bannerTitle = this.frontmatter.city[0]
    }

    return (
      <Layout>
        <SEO
          url={this.props.location.href}
          description={this.frontmatter.excerpt}
          image={
            this.props.location.origin +
            getSrc(this.frontmatter.featuredImage.childImageSharp)
          }
          keywords={this.frontmatter.tags}
          title={this.frontmatter.title}
          type="article"
          date={new Date(this.frontmatter.date).toISOString()}
          category={
            this.frontmatter.continent[0] || this.frontmatter.category[0]
          }
        />
        <Container fluid className="blog-post">
          <Row>
            <Banner
              showTextBox={false}
              width="100%"
              height="50vh"
              item={{
                childImageSharp: this.frontmatter.featuredImage.childImageSharp,
                alt: this.frontmatter.excerpt,
                heading: bannerTitle,
                buttonText: 'Read More',
                link: '/',
              }}
            />
          </Row>
          <Row>
            <Col xs="12" sm="10" md="8" lg="6">
              <h1 className="text-center h1">{this.frontmatter.title}</h1>
              <h5 className="text-center">{this.frontmatter.date}</h5>
            </Col>
          </Row>
          <Row>
            <CustomCol xs="9" xl="7" xxl="6">
              <div
                className="blog-post-content"
                dangerouslySetInnerHTML={{ __html: this.html }}
              />
            </CustomCol>
          </Row>
        </Container>
      </Layout>
    )
  }
}

export const query = graphql`
  query getArticleById($id: String!) {
    markdownRemark(id: { eq: $id }) {
      id
      html
      frontmatter {
        title
        date(formatString: "MMMM DD, YYYY")
        path
        excerpt
        tags
        continent
        country
        city
        featuredImage {
          childImageSharp {
            gatsbyImageData(layout: CONSTRAINED)
          }
        }
      }
    }
    relatedMarkdownRemarks(parent: { id: { eq: $id } }) {
      posts {
        id
        frontmatter {
          title
          date(formatString: "MMMM DD, YYYY")
          path
          excerpt
          featuredImage {
            childImageSharp {
              gatsbyImageData(layout: CONSTRAINED)
            }
          }
        }
      }
    }
  }
`
