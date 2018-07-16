import React from 'react'

const ContentBlock = ({children, ...rest}) => (
  <section className='proof-works' {...rest}>
    <div className='container'>
      {children}
    </div>
  </section>
)

const Diagram = ({src}) => (
  <div className='diagram-wrap'><img src={src} className='img-fluid diagram' /></div>
)

const HeroBlock = ({heading, subhead, children, ...rest}) => (
  <ContentBlock className='hero' {...rest}>
    <div className='row'>
      <div className='col-12'>
        <h1>Chainpoint is an open standard for creating a timestamp proof of any data, file, or process.</h1>
        <h2>Anchor an unlimited amount of data to multiple blockchains. Verify the integrity and existence of data without relying on a trusted third-party.</h2>
        {children}
      </div>
    </div>
  </ContentBlock>
)

export {
  ContentBlock,
  Diagram,
  HeroBlock
}
