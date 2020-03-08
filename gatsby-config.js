const siteAddress = new URL("https://www.wheretonextdoc.com")

module.exports = {
  siteMetadata: {
    title: `Where to next, doc?`,
  },
  plugins: [
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: 'Where to Next, Doc?',
        short_name: 'WTN Doc',
        start_url: "/",
        background_color: "#ffffff",
        theme_color: "#000000",
        display: "standalone",
        icon: "src/images/favicon.png",
        include_favicon: true,
      },
    },
    `gatsby-plugin-offline`,
    `gatsby-plugin-react-helmet`,
    `gatsby-plugin-catch-links`,
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    `gatsby-transformer-json`,
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
      resolve: `gatsby-source-filesystem`,
      options: {
        path: `${__dirname}/src/data/`,
        name: 'data',
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
              maxWidth: 1431,
              backgroundColor: 'transparent',
            },
          },
        ],
      },
    },
    {
      resolve: `gatsby-plugin-s3`,
      options: {
        bucketName: "wheretonextdoc.com",
        protocol: siteAddress.protocol.slice(0, -1),
        hostname: siteAddress.hostname,
      },
    },
    {
      resolve: `gatsby-plugin-canonical-urls`,
      options: {
          siteUrl: siteAddress.href.slice(0, -1),
      }
    },
  ],
}
