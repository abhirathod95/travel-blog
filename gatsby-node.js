/**
 * Implement Gatsby's Node APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/node-apis/
 */

 // You can delete this file if you're not using it

const path = require ('path');
const slash = require('slash');

// Number of pages per blog page
const postsPerPage = 9;

// Template for page that shows a list of blogs
const blogTemplate = path.resolve(`./src/templates/blog.js`);
// Template for a single blog post
const blogPostTemplate = path.resolve(`./src/templates/blog_post.js`);

// List of destinations
const destinations = ["North America", "South America", "Europe", "Africa", "Asia", "Oceania"]

// Categories for journal posts
const journalCategories = ["Travel", "Life", "Medicine"]


exports.onCreateNode = ({ node, actions, getNode }) => {
  const { createNodeField } = actions;

  if (node["internal"]["type"] === `MarkdownRemark`) {
    // Get the parent node
    const parent = getNode(node["parent"])

    // Create a field on this node for the "collection" of the parent
    // This is necessary so we can filter `allMarkdownRemark` by
    // `collection` otherwise there is no way to filter for only markdown
    // documents based on if they are journal or travel related.
    createNodeField({
      node,
      name: 'collection',
      value: parent['sourceInstanceName'],
    })
  }
}

function paginate(createPage, numPages, path, blogType, graphqlFilter, headers) {
  //console.log(path)
  Array.from({ length: numPages }).forEach((_, i) => {
    createPage({
      path: i === 0 ? path + "/" : path + "/" + (i + 1),
      component: blogTemplate,
      context: {
        numPages,
        blogType,
        headers,
        basePath: path,
        filter: graphqlFilter,
        limit:postsPerPage,
        skip: i * postsPerPage,
        currentPage: i + 1,
      }
    });
  });
}

function createPagesForGroups(currItem, origItems, groupByObject, createPage, path, blogType, graphqlFilter) {

  // Find the current item's object in the graphql query
  // Used to collect the count of blog posts for this item
  groupItem = groupByObject.filter(function(e) { return e.fieldValue === currItem; })

  // If there are no blog posts for this continent, we only need 1 page
  numPages = 1;

  // If the item showed up in the query results, we know there exists at least
  // one blog post for that item.
  // Calculate the number of pages based on the count of blog posts
  if (groupItem.length > 0) {
    numPages = Math.ceil(groupItem[0].totalCount / postsPerPage);
  }

  // Paginate this item's blog post page
  paginate(createPage, numPages, path, blogType, graphqlFilter, origItems);

}

function replaceAll(str,replaceWhat,replaceTo){
    replaceWhat = replaceWhat.replace(/[-\/\\^$*+?.()|[\]{}]/g, '\\$&');
    var re = new RegExp(replaceWhat, 'g');
    return str.replace(re,replaceTo);
}

exports.createPages = ({ actions, graphql }) => {
  const { createPage } = actions;


  // for adding journal categories, add the following to query
  // groupByCategory: group(field: frontmatter___category) {
  //   fieldValue
  //   totalCount
  // }
  return graphql(`
    query travelArticlesCount{
      allMarkdownRemark {
        totalCount
        groupByBlogType: group(field: fields___collection) {
          fieldValue
          totalCount
        }
        groupByContinent: group(field: frontmatter___continent) {
          fieldValue
          totalCount
        }
        groupByCountry: group(field: frontmatter___country) {
          fieldValue
          totalCount
        }
        edges {
          node {
            id
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
    if (result.errors) {
      console.log("Bad result!!!");
      console.log(result.errors);
      return;
    }

    // Create all blog post pages
    result.data.allMarkdownRemark.edges.forEach(({ node }) => {
      createPage({
        path: node.frontmatter.path,
        component: blogPostTemplate,
        context: {
          id: node.id,
        }, // additional data can be passed via context
      });
    });

    // Create travel related blog pages

    // Create and paginate main destinations page
    createPagesForGroups(
      "travel",
      destinations,
      result.data.allMarkdownRemark.groupByBlogType,
      createPage,
      "destinations",
      "destinations",
      {"fields" : {"collection": {"eq": "travel"}}}
    )


    // Create and paginate for each continent's destination page
    destinations.forEach((destination) => createPagesForGroups(
      destination,
      destinations,
      result.data.allMarkdownRemark.groupByContinent,
      createPage,
      "destinations/" + replaceAll(destination.toLowerCase(), " ", "-"),
      "destinations",
      {"frontmatter" : {"continent": {"eq": destination}}}
    ))

    // Create journal related blog pages

    // Create and paginate main journal page
    // createPagesForGroups(
    //   "journal",
    //   journalCategories,
    //   result.data.allMarkdownRemark.groupByBlogType,
    //   createPage,
    //   "journal",
    //   "journal",
    //   {"fields" : {"collection": {"eq": "journal"}}}
    // )

    // // Create and paginate for each journal category
    // journalCategories.forEach((category) => createPagesForGroups(
    //   category,
    //   journalCategories,
    //   result.data.allMarkdownRemark.groupByCategory,
    //   createPage,
    //   "journal/" + replaceAll(category.toLowerCase(), " ", "-"),
    //   "journal",
    //   {"frontmatter" : {"category": {"eq": category}}}
    // ))


    // Create pages for country tags (for the world map on home page)
    result.data.allMarkdownRemark.groupByCountry.forEach((countryItem) => {
      numPages = Math.ceil(countryItem.totalCount / postsPerPage);

      // Paginate this item's blog post page
      paginate(
        createPage,
        numPages,
        "country/" + replaceAll(countryItem.fieldValue.toLowerCase(), " ", "-"),
        "country",
        {"frontmatter" : {"country": {"eq": countryItem.fieldValue}}},
        null
      );
    })

  });


}

exports.createSchemaCustomization = ({ actions }) => {
  const { createFieldExtension, createTypes } = actions

  createFieldExtension({
    name: 'fileByDataPath',
    extend: () => ({
      resolve: function (src, args, context, info) {
        const partialPath = src.featuredImage

          if (!partialPath) {
            return null
          }

        const filePath = slash(path.posix.join(__dirname, 'src', partialPath.replace("../../../", "")))
        //console.log(filePath)
        const fileNode = context.nodeModel.runQuery({
          firstOnly: true,
          type: 'File',
          query: {
            filter: {
              absolutePath: {
                eq: filePath
              }
            }
          }
        })

        //console.log(context.nodeModel.getAllNodes({ type: `File` }))

        //console.log(fileNode)

        if (!fileNode) {
          return null
        }

        return fileNode
      }
    })
  })

  const typeDefs = `
    type Frontmatter @infer {
      featuredImage: File @fileByDataPath
    }

    type MarkdownRemark implements Node @infer {
      frontmatter: Frontmatter
    }
  `

  createTypes(typeDefs)
}
