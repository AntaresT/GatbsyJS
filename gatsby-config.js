/**
 * Configure your Gatsby site with this file.
 *
 * See: https://www.gatsbyjs.org/docs/gatsby-config/
 */

module.exports = {
  siteMetadata: {
    title: `Meu Estudo de Gatsby`,
  },
  plugins: [
    {
      resolve: `gatsby-plugin-typography`,
      options: {
        path: `src/utils/typography`,
      },
    },
  ],
}