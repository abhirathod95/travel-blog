import React from 'react'
import PropTypes from 'prop-types'
import Helmet from 'react-helmet'
import Header from '../components/header'
import HeaderLeft from '../components/side_header.js'
//import './index.css'
//import '../static/bootstrap.min.css';
import '../scss/index.scss';

import { library } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
  faInstagram,
  faPinterest,
  faTumblr
} from '@fortawesome/free-brands-svg-icons'
import {
  faEnvelope
} from '@fortawesome/free-solid-svg-icons'

library.add(faInstagram, faPinterest, faEnvelope, faTumblr)

const Layout = ({ children, data }) => (
  <div>
    <Helmet
      title={data.site.siteMetadata.title}
      meta={[
        { name: 'description', content: 'Sample' },
        { name: 'keywords', content: 'sample, something' },
      ]}
    />
    <Header siteTitle={data.site.siteMetadata.title} />
    <HeaderLeft />
    <div>
      {children()}
    </div>
  </div>
)

Layout.propTypes = {
  children: PropTypes.func,
}

export default Layout

export const query = graphql`
  query SiteTitleQuery {
    site {
      siteMetadata {
        title
      }
    }
  }
`
