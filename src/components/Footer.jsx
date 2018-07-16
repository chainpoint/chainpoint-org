import React from 'react'

const Footer = () => {
  const year = new Date().getFullYear()
  return (
    <footer>
      <div className='container'>
        <div className='inner'>
          <div className='d-none d-sm-block'>
            <p className='left'><span className='copyright'>&copy; {year}</span></p>
          </div>
          <div className='d-none d-sm-block'>
            <p className='right'><span className='social'><a href='https://www.facebook.com/pages/Tierion/1430447893927429' target='_blank' className='facebook' /><a href='http://www.twitter.com/tierion' target='_blank' className='twitter' /></span></p>
          </div>
          <p className='small-date d-block d-sm-none'>&copy; {year}</p>
          <a id='flogo' href='#' className='go-top' /><a href='https://tierion.com' target='_blank' className='site-by d-none d-sm-block'>site by Tierion</a>
        </div>
      </div>
    </footer>
  )
}

export default Footer
