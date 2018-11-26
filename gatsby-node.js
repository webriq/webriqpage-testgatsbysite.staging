const path = require('path')
const slugify = require('slugify')

const makeRequest = (graphql, request) =>
  new Promise((resolve, reject) => {
    // Query for nodes to use in creating pages.
    resolve(
      graphql(request).then(result => {
        if (result.errors) {
          reject(result.errors)
        }

        return result
      })
    )
  })

exports.createPages = ({ graphql, actions }) => {
  const { createPage } = actions

  const getPosts = makeRequest(
    graphql,
    `
      query {
        allStrapiPosts {
          edges {
            node {
              id
              fields {
                slug
              }
            }
          }
        }
      }
    `
  ).then(result => {
    result.data.allStrapiPosts.edges.forEach(({ node }) => {
      createPage({
        path: `/${node.fields.slug}`,
        component: path.resolve(`./src/components/post/single.js`),
        context: {
          id: node.id,
        },
      })
    })
  })

  return Promise.all([getPosts])
}

exports.onCreateNode = ({ node, actions, getNode }) => {
  const { createNodeField } = actions

  // Create slug for Strapi posts
  if (node.internal.type === `StrapiPosts`) {
    const slugify_title = slugify(node.title, {
      replacement: '-', // replace spaces with replacement
      remove: null, // regex to remove characters
      lower: true, // result in lower case
    })

    // Create slug field all lowercased and separated with dashes
    createNodeField({
      node,
      name: `slug`,
      value: slugify_title,
    })
  }
}
