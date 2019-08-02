import React from 'react'
import {
  graphql,
  StaticQuery
} from 'gatsby';
import Header from '../components/header';
import HeaderLeft from '../components/side_header.js';
import Footer from '../components/footer.js';
import '../scss/index.scss';

import { library } from '@fortawesome/fontawesome-svg-core';
import {
  faInstagram,
  faPinterest,
  faTumblr
} from '@fortawesome/free-brands-svg-icons';
import {
  fas,
  faEnvelope,
  faAngleLeft,
  faAngleRight,
  faIgloo
} from '@fortawesome/free-solid-svg-icons';

library.add(fas, faInstagram, faPinterest, faEnvelope, faTumblr, faAngleRight, faAngleLeft, faIgloo)


export default ({children }) =>
  <StaticQuery
    query={graphql`
      query LayoutQuery {
        site {
          siteMetadata {
            title
          }
        }
      }
    `}
    render={data => (
      <div>
        <Header/>
        <HeaderLeft />
        <div>
          {children}
        </div>
        <Footer/>
      </div>
    )}
  />
