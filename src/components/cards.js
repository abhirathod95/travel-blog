import React from 'react'
import { Link } from 'gatsby'
import { Row, Col, Button } from 'reactstrap'
import { GatsbyImage } from 'gatsby-plugin-image'

const CustomCol = (props) => (
  <Col widths={['xs', 'sm', 'md', 'lg', 'xl', 'xxl', 'xxxl']} {...props} />
)

export default class CustomCard extends React.Component {
  getHorizontalCard() {
    return (
      <Row className="justify-content-center m-0 mb-5">
        <CustomCol md="6" lg="6" xl="4" xxl="3">
          <div className="aspect-ratio-box">
            {this.props.item.link ? (
              <Link to={this.props.item.link}>
                <GatsbyImage
                  image={this.props.item.childImageSharp.gatsbyImageData}
                  className="gatsby-img"
                  position="absolute"
                  alt={this.props.item.alt}
                />
              </Link>
            ) : (
              <GatsbyImage
                image={this.props.item.childImageSharp.gatsbyImageData}
                className="gatsby-img"
                position="absolute"
                alt={this.props.item.alt}
              />
            )}
          </div>
        </CustomCol>
        <Col md="6" lg="6">
          {this.props.item.date ? (
            <div
              className="custom-raleway m-0 mt-2 mb-2 pl-2 pr-2 pt-1 pb-1"
              style={{ display: 'inline-block', backgroundColor: '#229990' }}
            >
              {this.props.item.date}{' '}
            </div>
          ) : (
            false
          )}
          <h2 className="m-0 mb-2 p-0">{this.props.item.title}</h2>
          {this.props.item.subtitle ? (
            <div>{this.props.item.subtitle}</div>
          ) : (
            false
          )}
          <div>{this.props.item.content}</div>
          {this.props.item.buttonText ? (
            <Button
              outline
              size="sm"
              tag={Link}
              to={this.props.item.link}
              style={{ marginTop: 'auto', flex: '0 0 auto' }}
            >
              {this.props.item.buttonText}
            </Button>
          ) : (
            false
          )}
        </Col>
      </Row>
    )
  }

  getVerticalCard() {
    return (
      <div className="m-0 p-0">
        <div className="aspect-ratio-box">
          {this.props.item.link ? (
            <Link to={this.props.item.link}>
              <GatsbyImage
                image={this.props.item.childImageSharp.gatsbyImageData}
                className="gatsby-img"
                position="absolute"
                alt={this.props.item.alt}
              />
            </Link>
          ) : (
            <GatsbyImage
              image={this.props.item.childImageSharp.gatsbyImageData}
              className="gatsby-img"
              position="absolute"
              alt={this.props.item.alt}
            />
          )}
        </div>
        {this.props.item.date ? (
          <div
            className="custom-raleway m-0 mt-2 mb-2 pl-2 pr-2 pt-1 pb-1"
            style={{ display: 'inline-block', backgroundColor: '#229990' }}
          >
            {this.props.item.date}{' '}
          </div>
        ) : (
          false
        )}
        <h4 className="d-none d-lg-block m-0 mb-2 p-0">
          {this.props.item.title}
        </h4>
        <h6 className="d-block d-lg-none m-0 mb-2 p-0">
          {this.props.item.title}
        </h6>
        {this.props.item.subtitle ? <div>{this.props.subtitle}</div> : false}
        <div>{this.props.item.content}</div>
        <div>
          {this.props.item.buttonText ? (
            <Button
              outline
              size="sm"
              tag={Link}
              to={this.props.item.link}
              style={{ marginTop: 'auto', flex: '0 0 auto' }}
            >
              {this.props.item.buttonText}
            </Button>
          ) : (
            false
          )}
        </div>
      </div>
    )
  }

  getOverlayCard() {
    return (
      <div className="m-0 p-0">
        {this.props.item.link ? (
          <Link to={this.props.item.link} style={{ color: 'inherit' }}>
            <div className="aspect-ratio-box">
              <GatsbyImage
                image={this.props.item.childImageSharp.gatsbyImageData}
                className="gatsby-img"
                position="absolute"
                alt={this.props.item.alt}
              />
              <div className="aspect-ratio-box-inside d-flex flex-row">
                <div className="text-box">
                  <h6 className="d-block d-lg-none m-0 p-4">
                    {this.props.item.title}
                  </h6>
                  <h5 className="d-none d-lg-block m-0 p-4">
                    {this.props.item.title}
                  </h5>
                </div>
              </div>
            </div>
          </Link>
        ) : (
          <div className="aspect-ratio-box">
            <GatsbyImage
              image={this.props.item.childImageSharp.gatsbyImageData}
              className="gatsby-img"
              position="absolute"
              alt={this.props.item.alt}
            />
            <div className="aspect-ratio-box-inside d-flex flex-row">
              <div className="text-box">
                <h6 className="d-block d-lg-none m-0 p-4">
                  {this.props.item.title}
                </h6>
                <h5 className="d-none d-lg-block m-0 p-4">
                  {this.props.item.title}
                </h5>
              </div>
            </div>
          </div>
        )}
      </div>
    )
  }

  getCard() {
    if (this.props.cardType === 'vertical') {
      return this.getVerticalCard()
    } else if (this.props.cardType === 'horizontal') {
      return this.getHorizontalCard()
    } else {
      return this.getOverlayCard()
    }
  }

  render() {
    return <div>{this.getCard()}</div>
  }
}

CustomCard.defaultProps = {
  cardType: 'horizontal',
}
