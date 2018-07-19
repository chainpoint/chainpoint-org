import React, { Component } from 'react'
import prismjs from 'prismjs'
import 'prismjs/components/prism-json'
import 'prismjs/themes/prism-coy.css'

// This wrapper component imports prismjs and highlights the required items
// we use it as a wrapper to avoid unnecessary reinitializations of prismjs
// when using multiple Example items
class SyntaxHightedContainer extends Component {
  render () {
    return (
      <div className='language-json syntax-highlighted-container'>
        { this.props.children }
      </div>
    )
  }
}

export default SyntaxHightedContainer
