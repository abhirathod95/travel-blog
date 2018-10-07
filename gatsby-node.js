/**
 * Implement Gatsby's Node APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/node-apis/
 */

 // You can delete this file if you're not using it

const createPaginatedPages = require("gatsby-paginate");

const path = require ('path');


exports.createPages = ({ boundActionCreators, graphql }) => {
  const { createPage } = boundActionCreators;

  // Templates for the blog posts and for the destination pages 
  const blogPostTemplate = path.resolve(`src/templates/blog_post.js`);
  //const destinationTemplate = path.resolve(`src/templates/destination.js`);

  // List of destinations
  // Static, since continents don't change
  const destinations = ["North America", "Europe", "Asia", "Africa", "Oceania", "South America"]
  

  // Create the overall destination page separately
  // This page is different since it doesn't use a country filter 
  graphql(`
    query allArticles {
      allMarkdownRemark(
        sort: { order: DESC, fields: [frontmatter___date] }
      ) {
        edges {
          node {
            frontmatter {
              title,
              date(formatString: "MMMM DD, YYYY"),
              path,
              excerpt,
              tags,
              continent,
              country,
              city,
              featuredImage {
                childImageSharp {
                  sizes(maxWidth: 2060) {
                    base64
                    tracedSVG
                    aspectRatio
                    src
                    srcSet
                    srcWebp
                    srcSetWebp
                    sizes
                    originalImg
                    originalName
                  }
                }
              }
            }
          }
        }
      }
    }
    `).then(result => {

      // Create all the blog post pages since we have them ready here
      result.data.allMarkdownRemark.edges.forEach(({ node }) => {
        createPage({
          path: node.frontmatter.path,
          component: blogPostTemplate,
          context: {
          }, // additional data can be passed via context
        });
      });

      // Create pages of destination page based on results above
      createPaginatedPages({
        createPage: createPage, 
        edges: result.data.allMarkdownRemark.edges, 
        pageLength: 10, // How many items you want per page
        pathPrefix: 'destinations',
        pageTemplate: "src/templates/destination.js",
        context: {
          continent: "All",
          destinations: destinations
        }
      })
    });

  // Automatically create paginated versions of the destination page for each continent
  destinations.forEach((destination) => {
    console.log(destination)
    graphql(`
    query articlesByContinent($continent: String!) {
      allMarkdownRemark(
        filter: {frontmatter: {continent: {eq: $continent}}}
        sort: { order: DESC, fields: [frontmatter___date] }
      ) {
        edges {
          node {
            frontmatter {
              title,
              date(formatString: "MMMM DD, YYYY"),
              path,
              excerpt,
              tags,
              continent,
              country,
              city,
              featuredImage {
                childImageSharp {
                  sizes(maxWidth: 2060) {
                    base64
                    tracedSVG
                    aspectRatio
                    src
                    srcSet
                    srcWebp
                    srcSetWebp
                    sizes
                    originalImg
                    originalName
                  }
                }
              }
            }
          }
        }
      }
    }
    `, {continent: destination}).then(result => {
      if (result.errors) {
        //console.log("Bad result!!!");
        //console.log(result.errors);
        return;
      }

      // Check articles for this destination
      // If so, use empty object for now so the first page gets created
      if (result.data.allMarkdownRemark === undefined || result.data.allMarkdownRemark == null) {
        //console.log("No markdown results found!")
        result.data.allMarkdownRemark = {edges: [false]}
      }

      // Finally create pagination for this continent
      createPaginatedPages({
        createPage: createPage, 
        edges: result.data.allMarkdownRemark.edges, 
        pageLength: 10, // How many items you want per page
        pathPrefix: 'destinations/' + destination.toLowerCase().replace(" ", "-"),
        pageTemplate: "src/templates/destination.js",
        context: {
          continent: destination,
          destinations: destinations
        }
      })
    });
  });
};