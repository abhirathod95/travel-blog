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
        path: `${__dirname}/src/pages`,
        name: 'pages',
      },
    },
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
        path: `${__dirname}/src/blog/`,
        name: 'blog',
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
    `gatsby-transformer-javascript-frontmatter`,
  ],
  mapping: {
    'JavascriptFrontmatter.fields.imageNode' : 'ImageSharp',
  }
}
