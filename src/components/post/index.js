import React from 'react'
import { StaticQuery, Link, graphql } from 'gatsby'
import Author from './author'
import DEBUG from '../../utils/debug/index'
import style from './index.module.css'

const PostList = () => (
  <StaticQuery
    render={data => {
      console.log(data)
      return (
        <div className="blogList">
          <h1>Recent Posts</h1>
          <DEBUG data={data} />
          <ul>
            {data.allStrapiPosts.edges.map(post => (
              <li key={post.node.id}>
                <h2 className={style.title}>
                  <Link to={post.node.fields.slug}>{post.node.title}</Link>
                </h2>
                <small> ({post.node.createdAt})</small>
                <br />
                <Author
                  users={data.allStrapiUsers.edges}
                  userId={post.node.author.id}
                />
                <p className={style.content}>
                  {post.node.excerpt || 'No excerpt found...'}
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
