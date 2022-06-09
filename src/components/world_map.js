import React, { memo, useState } from 'react'
import Map_110m from '../static/world-110m.json'
import ReactTooltip from 'react-tooltip'
import chroma from 'chroma-js'
import { navigate } from 'gatsby'

import { ComposableMap, Geographies, Geography } from 'react-simple-maps'

const wrapperStyles = {
  margin: '0 auto',
}

const maxStep = 8
//const colorScale = chroma.scale(["#3A6186", "#89253E"]).domain([1, maxStep]).mode('lab')
const colorScale = chroma
  .scale(['#D3CD17', '#8DC05D', '#1369FB'])
  .domain([1, maxStep])

const noBlogCountries = [
  'France',
  'India',
  'Italy',
  'Canada',
  'Switzerland',
  'United Arab Emirates',
]
//const BlogCountries = ["United States of America", "Netherlands", "Portugal", "Turkey", "Morocco", "Mexico","Spain","Australia", "New Zealand"]

function replaceAll(str, replaceWhat, replaceTo) {
  replaceWhat = replaceWhat.replace(/[-\/\\^$*+?.()|[\]{}]/g, '\\$&')
  var re = new RegExp(replaceWhat, 'g')
  return str.replace(re, replaceTo)
}

const WorldMap = ({ articleCount }) => {
  const [countryName, setCountryName] = useState('')
  const [artCount, setArtCount] = useState('')
  function getDefaultColor(country, articleCount) {
    var defaultFill = '#ECEFF1'
    if (noBlogCountries.includes(country)) {
      defaultFill = '#8699A6'
    } else if (country in articleCount) {
      //console.log(Math.floor(Math.random() * visitedCountryColors.length))
      defaultFill = colorScale(Math.floor(Math.random() * maxStep) + 1).hex()
      defaultFill = '#000000'
      //console.log(defaultFill)
    }

    return defaultFill
  }
  return (
    <div style={wrapperStyles}>
      <ComposableMap data-tip="" height="500">
        <Geographies geography={Map_110m}>
          {({ geographies }) =>
            geographies.map((geo) => (
              <Geography
                key={geo.rsmKey}
                geography={geo}
                onClick={() => {
                  const NAME = geo.properties.NAME
                  if (NAME in articleCount) {
                    navigate(
                      '/country/' + replaceAll(NAME.toLowerCase(), ' ', '-')
                    )
                  }
                }}
                onMouseEnter={() => {
                  const NAME = geo.properties.NAME
                  setCountryName(NAME)

                  let count = 'No Articles'

                  // If the country exists in the count dictionary as a key
                  // the country's got articles. Update count accordingly
                  if (NAME in articleCount) {
                    count = articleCount[NAME] + ' Articles'
                  } else if (noBlogCountries.includes(NAME)) {
                    count = 'Article Coming Soon!'
                  }
                  setArtCount(count)
                }}
                onMouseLeave={() => {
                  setCountryName('')
                  setArtCount('')
                }}
                style={{
                  default: {
                    fill: getDefaultColor(geo.properties.NAME, articleCount),
                    stroke: '#607D8B',
                    strokeWidth: 0.75,
                    outline: 'none',
                  },
                  hover: {
                    fill: '#607D8B',
                    stroke: '#607D8B',
                    strokeWidth: 0.75,
                    outline: 'none',
                  },
                  pressed: {
                    fill: getDefaultColor(geo.properties.NAME, articleCount),
                    stroke: '#607D8B',
                    strokeWidth: 0.75,
                    outline: 'none',
                  },
                }}
              />
            ))
          }
        </Geographies>
      </ComposableMap>
      <ReactTooltip type="error">
        {countryName === '' ? (
          ''
        ) : (
          <div className="custom-raleway">
            {countryName}
            <br />
            {artCount}
          </div>
        )}
      </ReactTooltip>
    </div>
  )
}

export default memo(WorldMap)
