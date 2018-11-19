import React from "react"
import { StaticQuery, graphql } from "gatsby"
import { 
  Collapse,
  Navbar,
  NavbarToggler,
  Nav,
  NavLink,
} from 'reactstrap';
import {Link} from 'gatsby';
import Img from "gatsby-image";

export default class BlogHeader extends React.Component {
  constructor(props) {
    super(props);

    this.toggleNavbar = this.toggleNavbar.bind(this);
    this.state = {
      isOpen: false
    };
  }

  // Handles toggling of the menu when the screen size is small
  toggleNavbar() {
    this.setState({
      isOpen: !this.state.isOpen
    });
  }

  render() {
    // Need to create pointers to this.* variables
    // since they can't be accessed in the render function
    // of the static query
    const props = this.props;
    const toggleNavbar = this.toggleNavbar;
    let state = this.state;

    return(
      // Static query that grabs all the continent images
      <StaticQuery
        query={graphql`
          {
            travel: allImageSharp (filter :{fluid : {originalName : {regex: "/travel_header/"}}}){
              edges {
                node {
                  fixed(height: 100) {
                    ...GatsbyImageSharpFixed
                    originalName
                  }
                }
              }
            }
            medicine: allImageSharp (filter :{fluid : {originalName : {regex: "/medicine_header/"}}}){
              edges {
                node {
                  fixed(height: 100) {
                    ...GatsbyImageSharpFixed
                    originalName
                  }
                }
              }
            }
          }
        `}
        render={function(data) {
          // Map the array of nodes returned by query
          // to a dictionary where the keys are the continents
          // and the value is the image we want
          let images = {};
          let items, preamble;

          if (props.blogType === "destinations") {
            items = data.travel.edges;
            preamble = "travel_header_";
            images["north_america"] = items[0].node.fixed

          } else {
            items = data.medicine.edges;
            preamble = "medicine_header_";
          }

          items.forEach(image => {
            let name = image.node.fixed.originalName.replace(preamble,"").replace(".png","")
            images[name] = image.node.fixed
          })

          return (
            <Navbar expand="lg">
              <NavbarToggler className="d-sm-none small-icon" onClick={toggleNavbar} />
              <NavbarToggler className="d-none d-sm-block d-lg-none large-icon" onClick={toggleNavbar} />
              <Collapse isOpen={state.isOpen} navbar>
                <Nav navbar >
                  <NavLink key={props.blogType} to={"/" + props.blogType} tag={Link}> 
                    <div>
                      <Img fixed={images["all"]} alt={"All"}/> 
                      <div> All </div>
                    </div>
                  </NavLink>
                  {
                    props.headers.map((header, index) => 
                        <NavLink key={index} to={"/" + props.blogType + "/" + header.toLowerCase().replace(" ", "-")} tag={Link}> 
                              <Img fixed={images[header.toLowerCase().replace(" ", "_")]} alt={header}/> 
                              <div> {header}</div>
                        </NavLink>
                    )
                  }
                </Nav>
              </Collapse>
            </Navbar>
          )
        }}
      />
    )
  } 

}