module.exports = {
  siteMetadata: {
    title: `When did Arnie fall?`,
    description: `A site that tells Arnie how long ago he fell through the portal behind Burger King.`,
    author: `@davehrtng`,
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `when-did-arnie-fall-through-the-portal-behind-burger-king`,
        short_name: `when-did-arnie-fall`,
        start_url: `/`,
        background_color: `#663399`,
        theme_color: `#663399`,
        display: `minimal-ui`,
        icon: `src/images/gatsby-icon.png`, // This path is relative to the root of the site.
      },
    },
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    // 'gatsby-plugin-offline',
  ],
}
