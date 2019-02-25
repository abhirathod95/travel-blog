module.exports = {
  siteMetadata: {
    title: `Where to next, doc?`,
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    `gatsby-plugin-catch-links`,
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        path: `${__dirname}/src/images`,
        name: 'images',
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        path: `${__dirname}/src/pages`,
        name: 'pages',
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        path: `${__dirname}/src/blog/travel`,
        name: 'travel',
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        path: `${__dirname}/src/blog/journal`,
        name: 'journal',
      },
    },
    {
      resolve: `gatsby-plugin-sass`,
      options: {
        precision: 8,
      },
    },
    {
      resolve: `gatsby-transformer-remark`,
      options: {
        plugins: [
          {
            // CommonMark mode (default: true)
            commonmark: true,
            // Footnotes mode (default: true)
            footnotes: true,
            // Pedantic mode (default: true)
            pedantic: true,
            // GitHub Flavored Markdown mode (default: true)
            gfm: true,
            resolve: `gatsby-remark-images-grid`,
            options: {
              gridGap: "20px",
            }
          },
          {
            resolve: `gatsby-remark-images`,
            options: {
              maxWidth: 2060,
              backgroundColor: 'transparent',
            },
          },
        ],
      },
    },
  ],
}
