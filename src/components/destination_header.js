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

export default class DestinationHeader extends React.Component {
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
            allImageSharp (filter :{fluid : {originalName : {regex: "/destination_header/"}}}){
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
          data.allImageSharp.edges.forEach(image => {
            let name = image.node.fixed.originalName.replace("destination_header_","").replace(".png","")
            images[name] = image.node.fixed
          })
          images["north_america"] = data.allImageSharp.edges[0].node.fixed
          images["all"] = data.allImageSharp.edges[0].node.fixed


          return (
            <Navbar expand="lg">
              <NavbarToggler className="d-sm-none small-icon" onClick={toggleNavbar} />
              <NavbarToggler className="d-none d-sm-block d-lg-none large-icon" onClick={toggleNavbar} />
              <Collapse isOpen={state.isOpen} navbar>
                <Nav navbar >
                  <NavLink key={"destinations"} to={"/destinations"} tag={Link}> 
                    <div>
                      <Img fixed={images["all"]} alt={"test"}/> 
                      <div> All </div>
                    </div>
                  </NavLink>
                  {
                    props.destinations.map((destination, index) => 
                        <NavLink key={index} to={"/destinations/" + destination.toLowerCase().replace(" ", "-")} tag={Link}> 
                              <Img fixed={images[destination.toLowerCase().replace(" ", "_")]} alt={"test"}/> 
                              <div> {destination}</div>
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