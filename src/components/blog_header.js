import React from "react"
import { StaticQuery, graphql } from "gatsby"
import {
  Collapse,
  Navbar,
  NavbarToggler,
  Nav,
  NavItem,
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
      // Static query that grabs all the header images
      <StaticQuery
        query={graphql`
          {
            travel: allImageSharp (filter :{fixed : {originalName : {regex: "/travel_header/"}}}){
              edges {
                node {
                  fixed(height: 100) {
                    ...GatsbyImageSharpFixed
                    originalName
                  }
                }
              }
            }
            journal: allImageSharp (filter :{fixed : {originalName : {regex: "/journal_header/"}}}){
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

          console.log(data)

          // Catch the appropriate data from the query result
          // and set the correct preamable shared by all the images for a
          // blog type
          if (props.blogType === "destinations") {
            items = data.travel.edges;
            preamble = "travel_header_";

          } else if (props.blogType === "journal") {
            items = data.journal.edges;
            preamble = "journal_header_";
          } else {
            return
          }

          // Create a dictionary where the key is the continent/category
          // and value is the image icon for that continent/category
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
                  <NavItem key={props.blogType}>
                    <NavLink key={props.blogType} to={"/" + props.blogType} tag={Link}>
                      <div>
                        <Img fixed={images["all"]} alt={"All"}/>
                        <div> All </div>
                      </div>
                    </NavLink>
                  </NavItem>
                  {
                    props.headers.map((header, index) =>
                        <NavItem key={index} >
                          <NavLink key={index} to={"/" + props.blogType + "/" + header.toLowerCase().replace(" ", "-")} tag={Link}>
                                <Img fixed={images[header.toLowerCase().replace(" ", "_")]} alt={header}/>
                                <div> {header}</div>
                          </NavLink>
                        </NavItem>
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
