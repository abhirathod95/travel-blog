import React from 'react'
import { StaticQuery, graphql } from 'gatsby'
import {
  Collapse,
  Navbar,
  NavbarToggler,
  Nav,
  NavItem,
  NavLink,
} from 'reactstrap'
import { Link } from 'gatsby'
import { GatsbyImage } from 'gatsby-plugin-image'
import { getSrc } from 'gatsby-plugin-image'

export default class BlogHeader extends React.Component {
  constructor(props) {
    super(props)

    this.toggleNavbar = this.toggleNavbar.bind(this)
    this.state = {
      isOpen: false,
    }
  }

  // Handles toggling of the menu when the screen size is small
  toggleNavbar() {
    this.setState({
      isOpen: !this.state.isOpen,
    })
  }

  render() {
    // Need to create pointers to this.* variables
    // since they can't be accessed in the render function
    // of the static query
    const props = this.props
    const toggleNavbar = this.toggleNavbar
    let state = this.state

    return (
      // Static query that grabs all the header images
      <StaticQuery
        query={graphql`
          {
            travel: allFile(
              filter: { relativePath: { regex: "/travel_header/" } }
            ) {
              edges {
                node {
                  base
                  childImageSharp {
                    gatsbyImageData(layout: FIXED, height: 95)
                  }
                }
              }
            }
            journal: allFile(
              filter: { relativePath: { regex: "/journal_header/" } }
            ) {
              edges {
                node {
                  base
                  childImageSharp {
                    gatsbyImageData(layout: FIXED, height: 100)
                  }
                }
              }
            }
          }
        `}
        render={function (data) {
          // Map the array of nodes returned by query
          // to a dictionary where the keys are the continents
          // and the value is the image we want
          let images = {}
          let items, preamble

          // console.log(data)
          // console.log(props)

          if (props.blogType === 'country') {
            return (
              <Navbar expand="lg">
                <Nav navbar>
                  <NavItem key={props.blogType} className="country-bar">
                    <h2>{props.headers[0].toUpperCase()}</h2>
                  </NavItem>
                </Nav>
              </Navbar>
            )
          }

          // Catch the appropriate data from the query result
          // and set the correct preamable shared by all the images for a
          // blog type
          if (props.blogType === 'destinations') {
            items = data.travel.edges
            preamble = 'travel_header_'
          } else if (props.blogType === 'journal') {
            items = data.journal.edges
            preamble = 'journal_header_'
          } else {
            //console.log("Returning empty with type: " + props.blogType)
            return
          }

          // Create a dictionary where the key is the continent/category
          // and value is the image icon for that continent/category
          items.forEach((image) => {
            let name = image.node.base.replace(preamble, '').replace('.png', '')
            images[name] = image.node.childImageSharp.gatsbyImageData
          })

          return (
            <Navbar expand="lg">
              <NavbarToggler
                className="d-sm-none small-icon"
                onClick={toggleNavbar}
              />
              <NavbarToggler
                className="d-none d-sm-block d-lg-none large-icon"
                onClick={toggleNavbar}
              />
              <Collapse isOpen={state.isOpen} navbar>
                <Nav navbar>
                  <NavItem key={props.blogType}>
                    <NavLink
                      className="d-flex flex-column"
                      key={props.blogType}
                      to={'/' + props.blogType}
                      tag={Link}
                    >
                      <div>
                        <GatsbyImage image={images['all']} alt={'All'} />
                        <div> DESTINATIONS </div>
                      </div>
                    </NavLink>
                  </NavItem>
                  {props.headers.map((header, index) => (
                    <NavItem key={index}>
                      <NavLink
                        className="d-flex flex-column"
                        key={index}
                        to={
                          '/' +
                          props.blogType +
                          '/' +
                          header.toLowerCase().replace(' ', '-')
                        }
                        tag={Link}
                      >
                        <GatsbyImage
                          image={images[header.toLowerCase().replace(' ', '_')]}
                          alt={header}
                        />
                        <div> {header.toUpperCase()} </div>
                      </NavLink>
                    </NavItem>
                  ))}
                </Nav>
              </Collapse>
            </Navbar>
          )
        }}
      />
    )
  }
}
