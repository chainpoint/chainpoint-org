import React from 'react'

const Footer = () => {
  const year = new Date().getFullYear()
  return (
    <footer>
      <div className="container">
        <div className="inner">
          <div className="d-none d-sm-block">
            <p className="left">
              <span className="copyright">&copy; {year}</span>
            </p>
          </div>
          <div className="d-none d-sm-block">
            <p className="right">
              <span className="social">
                <a
                  href="https://www.facebook.com/chainpoint"
                  target="_blank"
                  className="facebook"
                  rel="noopener noreferrer"
                >
                  {' '}
                </a>
                <a
                  href="https://twitter.com/chainpnt"
                  target="_blank"
                  className="twitter"
                  rel="noopener noreferrer"
                >
                  {' '}
                </a>
              </span>
            </p>
          </div>
          <p className="small-date d-block d-sm-none">&copy; {year}</p>
          <a
            href="https://tierion.com"
            target="_blank"
            className="site-by d-none d-sm-block"
            rel="noopener noreferrer"
          >
            site by Tierion
          </a>
        </div>
      </div>
    </footer>
  )
}

export default Footer
