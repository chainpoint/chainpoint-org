import React from 'react'

const ContentBlock = ({ children, ...rest }) => (
  <section className="proof-works" {...rest}>
    <div className="container">{children}</div>
  </section>
)

const Diagram = ({ src }) => (
  <div className="diagram-wrap">
    <img src={src} alt={src} className="img-fluid diagram" />
  </div>
)

const HeroBlock = ({ heading, subheading, children, ...rest }) => (
  <ContentBlock className="hero" {...rest}>
    <Row>
      <div className="col-12">
        <h1>{heading}</h1>
        <h2>{subheading}</h2>
        {children}
      </div>
    </Row>
  </ContentBlock>
)

const LinkExternal = ({ href, children, ...rest }) => (
  <a href={href} target="_blank" rel="noopener noreferrer" {...rest}>
    {children}
  </a>
)

const Row = ({ children }) => <div className="row">{children}</div>

export { ContentBlock, Diagram, HeroBlock, LinkExternal, Row }
