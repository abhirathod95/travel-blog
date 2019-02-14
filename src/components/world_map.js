import React from 'react';
import ReactTooltip from 'react-tooltip';
import Map_110m from "../static/world-110m.json";
import chroma from 'chroma-js';
import { navigate } from "gatsby";

import {
  ComposableMap,
  ZoomableGroup,
  Geographies,
  Geography,
} from "react-simple-maps"


const wrapperStyles = {
  margin: "0 auto"
}

const maxStep = 8
//const colorScale = chroma.scale(["#3A6186", "#89253E"]).domain([1, maxStep]).mode('lab')
const colorScale = chroma.scale(["#D3CD17", "#8DC05D", "#1369FB"]).domain([1, maxStep])

const noBlogCountries = ["France", "India", "Italy", "Canada", "Switzerland","Turkey","Australia","New Zealand","United Arab Emirates"]
//const BlogCountries = ["United States of America", "Netherlands", "Portugal", "Turkey", "Morocco", "Mexico","Spain","Australia", "New Zealand"]

class WorldMap extends React.Component {
  constructor() {
    super()
    this.handleEnter = this.handleEnter.bind(this)
    this.handleLeave = this.handleLeave.bind(this)
    this.getDefaultColor = this.getDefaultColor.bind(this)
    this.getHoverColor = this.getHoverColor.bind(this)
    this.getPressedColor = this.getPressedColor.bind(this)
    this.onClick = this.onClick.bind(this)
    this.replaceAll = this.replaceAll.bind(this)
    this.state = {location: '', count: 0};
  }

  handleEnter(geography, evt) {
    // Set count to zero
    let count = "No Articles";

    // If the country exists in the count dictionary as a key
    // the country's got articles. Update count accordingly
    if (geography.properties.NAME in this.props.articleCount) {
      count = this.props.articleCount[geography.properties.NAME] + " Articles"
    }

    // Update state
    this.setState({
      location: geography.properties.NAME,
      count: count
    });
  }

  onClick(geography, evt) {
    // If we have a country page for this country, take the user there
    if (geography.properties.NAME in this.props.articleCount) {
      navigate('/country/' + this.replaceAll(geography.properties.NAME.toLowerCase(), " ", "-"))
    } 
  }

  handleLeave() {
    
  }

  getDefaultColor(country) {
    var defaultFill = "#ECEFF1"
    if (noBlogCountries.includes(country)) {
      defaultFill = "#8699A6"
    } else if (country in this.props.articleCount) {
      //console.log(Math.floor(Math.random() * visitedCountryColors.length))
      defaultFill = colorScale(Math.floor(Math.random() * maxStep) + 1).hex();
      //console.log(defaultFill)
    }

    return defaultFill
  }

  getHoverColor(country) {

  }
 
  getPressedColor(country) {

  }


  replaceAll(str,replaceWhat,replaceTo){
    replaceWhat = replaceWhat.replace(/[-\/\\^$*+?.()|[\]{}]/g, '\\$&');
    var re = new RegExp(replaceWhat, 'g');
    return str.replace(re,replaceTo);
  }

  render() {
    return (
      <div style={wrapperStyles}>
        <ComposableMap style={{width: "100%", height: "auto"}}>
          <ZoomableGroup disablePanning>
            <Geographies geography={Map_110m} >
              {(geographies, projection) =>
                geographies.map((geography, i) => (
                  <Geography 
                    data-tip
                    key={i}
                    geography={geography}
                    projection={projection}
                    onMouseEnter={this.handleEnter}
                    onMouseLeave={this.handleLeave}
                    onClick={this.onClick}
                    style={{
                      default: {
                        fill: this.getDefaultColor(geography.properties.NAME),
                        stroke: "#607D8B",
                        strokeWidth: 0.75,
                        outline: "none",
                      },
                      hover: {
                        fill: "#607D8B",
                        stroke: "#607D8B",
                        strokeWidth: 0.75,
                        outline: "none",
                      },
                      pressed: {
                        fill: this.getDefaultColor(geography.properties.NAME),
                        stroke: "#607D8B",
                        strokeWidth: 0.75,
                        outline: "none",
                      },
                    }}
                  />
                ))
              }
            </Geographies>
          </ZoomableGroup>
        </ComposableMap>
        <ReactTooltip type='error' getContent={() => <div className="custom-raleway">{this.state.location}<br/>{this.state.count}</div>}/>
      </div>
    )
  }
}

export default WorldMap