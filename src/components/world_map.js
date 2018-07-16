import React from 'react';
import Link from 'gatsby-link'
import ReactTooltip from 'react-tooltip'
import Map_110m from "../static/world-110m.json"
import chroma from 'chroma-js'

import {
  ComposableMap,
  ZoomableGroup,
  Geographies,
  Geography,
} from "react-simple-maps"


const wrapperStyles = {
  margin: "0 auto"
}

const maxStep = 5
const colorScale = chroma.scale(["#A3B96E", "#007994"]).domain([1, maxStep]).mode('lab')
console.log(colorScale(1).hex())



const noBlogCountries = ["France", "United Kingdom", "India", "Italy", "Canada"]
const BlogCountries = ["United States of America", "Netherlands", "Portugal", "Turkey", "Morocco", "Mexico","Spain","Australia", "New Zealand"]
const visitedCountryColors = ["#A7D2CB", "#F2D388","#C98474","#874C62"]

class WorldMap extends React.Component {
  constructor() {
    super()
    this.handleEnter = this.handleEnter.bind(this)
    this.handleLeave = this.handleLeave.bind(this)
    this.getDefaultColor = this.getDefaultColor.bind(this)
    this.getHoverColor = this.getHoverColor.bind(this)
    this.getPressedColor = this.getPressedColor.bind(this)
    this.state = {location: ''};
  }

  handleEnter(geography, evt) {
    this.setState({
      location: geography.properties.NAME
    });
  }

  handleLeave() {
  }

  getDefaultColor(country) {
    var defaultFill = "#ECEFF1"
    if (noBlogCountries.includes(country)) {
      defaultFill = "#8699A6"
    } else if (BlogCountries.includes(country)) {
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
                    onMouseMove={this.handleEnter}
                    onMouseLeave={this.handleLeave}
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
        <ReactTooltip type='error' getContent={() => <div className="custom-raleway">{this.state.location}<br/>2 Articles</div>}/>
      </div>
    )
  }
}

export default WorldMap