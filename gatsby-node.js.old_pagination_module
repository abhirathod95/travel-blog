/**
 * Implement Gatsby's Node APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/node-apis/
 */

 // You can delete this file if you're not using it

const createPaginatedPages = require("gatsby-paginate");

const path = require ('path');

const postsPerPage = 9;


exports.onCreateNode = ({ node, actions, getNode }) => {
  const { createNodeField } = actions;

  if (node["internal"]["type"] === `MarkdownRemark`) {
    // Get the parent node
    const parent = getNode(node["parent"])

    // Create a field on this node for the "collection" of the parent
    // This is necessary so we can filter `allMarkdownRemark` by
    // `collection` otherwise there is no way to filter for only markdown
    // documents based on if they are medicine or travel related.
    createNodeField({
      node,
      name: 'collection',
      value: parent['sourceInstanceName'],
    })
  }
}

exports.createPages = ({ actions, graphql }) => {
  const { createPage } = actions;

  // Templates for the main blog page and the blog posts 
  const blogTemplate = path.resolve(`src/templates/blog.js`);
  const blogPostTemplate = path.resolve(`src/templates/blog_post.js`);


  // List of destinations
  // Static, since continents don't change
  const destinations = ["North America", "Europe", "Asia", "Africa", "Oceania", "South America"]
  

  // Categories for medicine posts 
  const medCategories = ["Pre-Med", "Medical School", "Residency"]
  

  // Create the overall destination page separately
  // This page is different since it doesn't use a country filter 
  graphql(`
    query allArticles {
      allMarkdownRemark(
        filter: {fields : {collection: {eq : "travel"}}}
        sort: { order: DESC, fields: [frontmatter___date] }
      ) {
        edges {
          node {
            html
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
                  fluid(maxWidth: 2060) {
                    base64
                    aspectRatio
                    src
                    srcSet
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
            data: node,
          }, // additional data can be passed via context
        });
      });

      // Create pages of destination page based on results above
      createPaginatedPages({
        createPage: createPage, 
        edges: result.data.allMarkdownRemark.edges, 
        pageLength: postsPerPage, // How many items you want per page
        pathPrefix: 'destinations',
        pageTemplate: blogTemplate,
        context: {
          category: "Travel All",
          headers: destinations,
          blogType: "destinations",
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
                  fluid(maxWidth: 2060) {
                    base64
                    aspectRatio
                    src
                    srcSet
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
        pageLength: postsPerPage, // How many items you want per page
        pathPrefix: 'destinations/' + destination.toLowerCase().replace(" ", "-"),
        pageTemplate: blogTemplate,
        context: {
          category: destination,
          headers: destinations,
          blogType: "destinations",
        }
      })
    });
  });


  // Create the overall destination page separately
  // This page is different since it doesn't use a country filter 
  graphql(`
    query allArticles {
      allMarkdownRemark(
        filter: {fields : {collection: {eq : "medicine"}}}
        sort: { order: DESC, fields: [frontmatter___date] }
      ) {
        edges {
          node {
            html
            frontmatter {
              title,
              date(formatString: "MMMM DD, YYYY"),
              path,
              excerpt,
              tags,
              category,
              featuredImage {
                childImageSharp {
                  fluid(maxWidth: 2060) {
                    base64
                    aspectRatio
                    src
                    srcSet
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
            data: node,
          }, // additional data can be passed via context
        });
      });

      // Create paginations for medicine page based on results above
      createPaginatedPages({
        createPage: createPage, 
        edges: result.data.allMarkdownRemark.edges, 
        pageLength: 9, // How many items you want per page
        pathPrefix: 'medicine',
        pageTemplate: blogTemplate,
        context: {
          category: "Medicine All",
          headers: medCategories,
          blogType: "medicine",
        }
      })
    });

  // Programatically create paginated versions of each category 
  medCategories.forEach((category) => {
    console.log(category)
    graphql(`
    query articlesByContinent($category: String!) {
      allMarkdownRemark(
        filter: {frontmatter: {category: {eq: $category}}}
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
              category,
              featuredImage {
                childImageSharp {
                  fluid(maxWidth: 2060) {
                    base64
                    aspectRatio
                    src
                    srcSet
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
    `, {category: category}).then(result => {
      if (result.errors) {
        //console.log("Bad result!!!");
        //console.log(result.errors);
        return;
      }

      // Check if this category has articles
      // If not, use empty object for now so the first page of pagination gets created
      if (result.data.allMarkdownRemark === undefined || result.data.allMarkdownRemark == null) {
        //console.log("No markdown results found!")
        result.data.allMarkdownRemark = {edges: [false]}
      }

      // Finally paginate this category
      createPaginatedPages({
        createPage: createPage, 
        edges: result.data.allMarkdownRemark.edges, 
        pageLength: postsPerPage, // How many items you want per page
        pathPrefix: 'medicine/' + category.toLowerCase().replace(" ", "-"),
        pageTemplate: blogTemplate,
        context: {
          category: category,
          headers: medCategories,
          blogType: "medicine",
        }
      })
    });
  });

};