import React from 'react'
import PropTypes from 'prop-types'
import Helmet from 'react-helmet'

import Header from '../components/Header'
import Footer from '../components/Footer'
import '../styles/main.scss'

if (typeof window !== 'undefined') {
  require('bootstrap')
}

const Layout = ({ children, data }) => (
  <div>
    <Helmet title={data.site.siteMetadata.title}>
      <meta
        name="description"
        content="Chainpoint is an open standard for anchoring data to a blockchain to create a timestamp proof of any data, file, or series of events."
      />
      <meta property="og:type" content="website" />
      <meta property="og:title&quot; content=&quot;Chainpoint - Blockchain Proof Standard" />
      <meta
        property="og:description"
        content="Open standard for creating a timestamp proof of any data, file, or series of events."
      />
      <meta property="og:url" content="https://chainpoint.org" />
      <meta
        property="og:image"
        content="https://chainpoint.org/images/facebook-open-graph.png"
      />
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:site" content="@chainpnt" />
      <meta
        name="twitter:title"
        content="Chainpoint - Blockchain Proof Standard"
      />
      <meta
        name="twitter:description"
        content="Open standard for creating a timestamp proof of any data, file, or series of events."
      />
      <meta
        name="twitter:image"
        content="https://chainpoint.org/images/twitter-large.png?3"
      />
    </Helmet>
    <Header siteTitle={data.site.siteMetadata.title} />
    {children()}
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
