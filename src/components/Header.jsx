import React from 'react'
import { navigateTo } from 'gatsby-link'

const Header = ({ siteTitle }) => (
  <header>
    <div className="container">
      <h1 className="logo" onClick={() => navigateTo('/')}>
        Chainpoint
      </h1>
      <a
        href="http://github.com/chainpoint"
        target="_blank"
        className="github"
      />
    </div>
  </header>
)

export default Header
