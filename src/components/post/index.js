import React from 'react'
import { Link } from 'gatsby'
import Author from './author'
import DEBUG from '../../utils/debug/index'
import style from './index.module.css'

const PostList = ({ posts, users }) => (
  <div className="blogList">
    <DEBUG data={posts} />
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

export default PostList
