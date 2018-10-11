import React from 'react'
import { navigate } from 'gatsby'

const Header = ({ siteTitle }) => (
  <header>
    <div className="container">
      <h1 className="logo" onClick={() => navigate('/')}>
        Chainpoint
      </h1>
      <a
        href="http://github.com/chainpoint"
        target="_blank"
        className="github"
        rel="noopener noreferrer"
      >
        {' '}
      </a>
    </div>
  </header>
)

export default Header
