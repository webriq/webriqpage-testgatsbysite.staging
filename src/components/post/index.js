import React from 'react'
import { StaticQuery, Link, graphql } from 'gatsby'
import Author from './author'
import DEBUG from '../../utils/debug/index'
import style from './index.module.css'

const PostList = () => (
  <StaticQuery
    render={data => {
      const posts = data.allStrapiPosts.edges.map(post => post.node)
      const users = data.allStrapiUsers.edges.map(user => user.node)

      return (
        <div className="blogList">
          <h1>Recent Posts</h1>
          <DEBUG data={data} />
          <ul>
            {posts.map(post => (
              <li key={post.id}>
                <h2 className={style.title}>
                  <Link to={post.fields.slug}>{post.title}</Link>
                </h2>
                <small> ({post.createdAt})</small>
                <br />
                <Author users={users} userId={post.author.id} />
                <p className={style.content}>
                  {post.excerpt || 'No excerpt found...'}
                </p>
              </li>
            ))}
          </ul>
        </div>
      )
    }}
    query={graphql`
      query {
        allStrapiPosts(sort: { fields: [createdAt], order: DESC }) {
          edges {
            node {
              id
              title
              excerpt
              createdAt(fromNow: true)
              updatedAt(fromNow: true)
              fields {
                slug
              }
              author {
                id
              }
            }
          }
        }
        allStrapiUsers {
          edges {
            node {
              id
              email
              profile {
                id
                firstname
                lastname
              }
            }
          }
        }
      }
    `}
  />
)

export default PostList
