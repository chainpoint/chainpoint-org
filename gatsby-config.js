module.exports = {
  siteMetadata: {
    title: 'Chainpoint - Blockchain Proof & Anchoring Standard'
  },
  plugins: [
    'gatsby-plugin-react-helmet',
    'gatsby-plugin-sass',
    {
      resolve: 'gatsby-plugin-segment',
      options: {
        writeKey: 'Fhdxp0u1VjOv5U4aGbESiuYg4YYoGq6T'
      }
    }
  ]
}
