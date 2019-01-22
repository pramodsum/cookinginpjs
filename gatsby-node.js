const _ = require('lodash')
const Promise = require('bluebird')
const path = require('path')

exports.createPages = ({ graphql, actions }) => {
  const { createPage } = actions

  return new Promise((resolve, reject) => {
    const blogPost = path.resolve('./src/templates/blog-post.js')
    const blogPostList = path.resolve('./src/templates/blog-list.js')
    const blogTagPostList = path.resolve('./src/templates/tag-list.js')
    resolve(
      graphql(
        `
          {
            allGhostPost(sort: { order: DESC, fields: [published_at] }) {
              edges {
                node {
                  html
                  title
                  slug
                  published_at(formatString: "DD MMMM, YYYY")
                  feature_image: image
                  tags {
                    id
                    slug
                  }
                }
              }
            }
          }
        `
      ).then(result => {
        if (result.errors) {
          console.log(result.errors)
          reject(result.errors)
        }

        // Create blog posts pages.
        const posts = result.data.allGhostPost.edges;
        const postsPerPage = 6
        const numPages = Math.ceil(posts.length / postsPerPage)

        // Home page:
        Array.from({ length: numPages }).forEach((_, i) => {
          createPage({
            path: i === 0 ? `/` : `/${i + 1}`,
            component: blogPostList,
            context: {
              limit: postsPerPage,
              skip: i * postsPerPage,
              numPages,
              currentPage: i + 1
            },
          })
        })

        let tags = {};

        // Post pages:
        _.each(posts, (post, index) => {
          const previous = index === posts.length - 1 ? null : posts[index + 1].node;
          const next = index === 0 ? null : posts[index - 1].node;

          // Iterate through each post, putting all found tags into `tags`
          if (_.get(post, "node.tags")) {
            post.node.tags.forEach(tag => {
              tags[tag.id] = tags[tag.id] || { slug: tag.slug, count: 0 };
              tags[tag.id].count++;
            })
          }

          createPage({
            path: post.node.slug,
            component: blogPost,
            context: {
              slug: post.node.slug,
              previous,
              next,
            },
          })
        })

        // Tag pages: 
        _.each(Object.keys(tags), (id, i) => {
          const tag = tags[id];
          const numTagPages = Math.ceil(tag.count / postsPerPage)
          createPage({
            path: `tag/${tag.slug}`,
            component: blogTagPostList,
            context: {
              tag: tag.slug,
              limit: tag.count,
              skip: 0,
              numPages: numTagPages,
              // currentPage: i + 1
            },
          })
        })
      })
    )
  })
}
