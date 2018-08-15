/**
 * Implement Gatsby's Node APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/node-apis/
 */

 // You can delete this file if you're not using it

const path = require ('path');


exports.onCreateNode = ({node, boundActionCreators }) => {
  const { createNode, createNodeField } = boundActionCreators
  // Transform the new node here and create a new node or
  // create a new node field.

  if (node.internal.type === "JavascriptFrontmatter") {
    console.log("Found jsfm node")
    createNodeField({
      node: node,
      name: "imageNode",
      value: "sample"
    })
  }
}

exports.createPages = ({getNode, boundActionCreators, graphql}) => {
  const {createPage, createNodeField} = boundActionCreators;
  
  return graphql (
    `{
      allJavascriptFrontmatter {
        edges {
          node {
            id 
            frontmatter {
              component
              title
              date
              path
              excerpt
              tags
              country
              city
              featuredImage
            }
            fileAbsolutePath
          }
        }
      }
    }`
  ).then (result => {
    if (result.errors) {
      return Promise.reject (result.errors);
    }

    result.data.allJavascriptFrontmatter.edges.forEach (({node}, index) => {

      graphql(   
       `query FindImage($image: String!) {
          imageSharp (id: {regex: $image}) {
            id
          }
        }`
        , {image: "/" + node.frontmatter.featuredImage + "/"}).then (imageResult => {
          //console.log(imageResult.data.imageSharp)
          
          const blogPostTemplate = path.resolve(node.frontmatter.component);

          createNodeField({
            node: getNode(node.id),
            name: "imageNode",
            value: imageResult.data.imageSharp.id
          })

          createPage ({
            path: node.frontmatter.path,
            component: blogPostTemplate,
          });
        })
    });
  });
};