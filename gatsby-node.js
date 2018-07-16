/**
 * Implement Gatsby's Node APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/node-apis/
 */

 // You can delete this file if you're not using it

const path = require ('path');

exports.createPages = ({boundActionCreators, graphql}) => {
  const {createPage} = boundActionCreators;
  const blogPostTemplate = path.resolve (`src/templates/blog_post.js`);

  return graphql (
    `{
    allMarkdownRemark {
      edges {
        node {
          html
          id
          frontmatter {
            date
            path
            title
            excerpt
            tags
          }
        }
      }
    }
  }`
  ).then (result => {
    if (result.errors) {
      return Promise.reject (result.errors);
    }

    result.data.allMarkdownRemark.edges.forEach (({node}, index) => {
      createPage ({
        path: node.frontmatter.path,
        component: blogPostTemplate,
      });
    });
  });
};