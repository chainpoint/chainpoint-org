module.exports = {
  siteMetadata: {
    title: 'Chainpoint - Blockchain Proof & Anchoring Standard'
  },
  plugins: [
    'gatsby-plugin-react-helmet',
    'gatsby-plugin-sass',
    'gatsby-plugin-netlify',
    {
      resolve: 'gatsby-plugin-segment',
      options: {
        writeKey: 'Fhdxp0u1VjOv5U4aGbESiuYg4YYoGq6T'
      }
    },
    {
      resolve: `gatsby-plugin-favicon`,
      options: {
        logo: './src/images/chainpoint-favicon.png',
        injectHTML: true,
        icons: {
          android: true,
          appleIcon: true,
          appleStartup: true,
          coast: false,
          favicons: true,
          firefox: true,
          twitter: false,
          yandex: false,
          windows: false
        }
      }
    }
  ]
}
