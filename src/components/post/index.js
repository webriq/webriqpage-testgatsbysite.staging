import React from 'react'
import { StaticQuery, Link, graphql } from 'gatsby'
import Author from './author'
import DEBUG from '../../utils/debug/index'
import indexStyles from './index.module.css'

const PostList = () => (
  <StaticQuery
    query={graphql`
      query {
        allStrapiPosts(sort: { fields: [createdAt], order: DESC }) {
          edges {
            node {
              ...PostsListFragment
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
    render={data => {
      console.log(data)
      return (
        <div className="blogList">
          <h1>Recent Posts</h1>
          <DEBUG data={data} />
          <ul>
            {data.allStrapiPosts.edges.map(post => (
              <li key={post.node.id}>
                <h2 className={indexStyles.postTitle}>{post.node.title}</h2>
                <Author
                  users={data.allStrapiUsers.edges}
                  userId={post.node.author.id}
                />
                <p>{post.node.excerpt || 'No excerpt found...'}</p>
                <Link to={post.node.fields.slug}>Read more...</Link>
              </li>
            ))}
          </ul>
        </div>
      )
    }}
  />
)

export default PostList
