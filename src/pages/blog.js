import React from 'react'

import Layout from '../components/layouts/default'
import BlogList from '../components/post/index'

const BlogPage = () => (
  <Layout head={{ title: 'Blog Page' }}>
    <BlogList />
  </Layout>
)

export default BlogPage
